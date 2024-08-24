import './Form.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Form Icons
import nameIcon from '../assets/name-icon.svg';
import mailIcon from '../assets/Email-icon.svg';
import currentCityIcon from '../assets/currentcity-icon.svg';
import homeIcon from '../assets/Home-icon.svg';


// Dropdown list (districts)
const districts = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasargod'
];

export const Form = () => {
  const navigate = useNavigate();
  const [, setGeoInfo] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const currentCity = document.getElementById('currentCity').value.trim();
    const naatilEvideya = document.getElementById('naatilEvideya').value;

    // alert if miss any input field
    if (!firstName || !lastName || !email || !currentCity || !naatilEvideya) {
      alert('Please fill in all the fields.');
      window.location.reload();
      return;
    } else {
      navigate('/ty'); 
    }

    // Parsing as form data
    const formData = new URLSearchParams();
    formData.append('name', firstName + " " + lastName);
    formData.append('email', email);
    formData.append('currentCity', currentCity);
    formData.append('naatilEvideya', naatilEvideya);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);

    try {
      // Sending form data
      const response = await fetch('https://script.google.com/macros/s/AKfycbx0XubluPxZDxvgcyiILcZxslyoeMEZBXa-KP3Tj-qemLQnsk4u7l48cxOz_Svb2P3X/exec', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Navigate to the ty page after successful form submission
      if (response.ok) {
        alert("submitted");
        navigate('/ty');
      } else {
        alert("failed");
      }
    } catch (error) {
      document.getElementById('response').innerText = 'Error: ' + error;
    }
  };

  // Visitor location
  useEffect(() => {
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            await getGeoInfo(latitude, longitude);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
            document.getElementById('currentCity').value = 'Unable to retrieve location';
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        document.getElementById('currentCity').value = 'Geolocation not supported';
      }
    };

    const getGeoInfo = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();
        setGeoInfo(data);

        // Update the currentCity input field with the location name
        const city = data.city || data.locality || 'Unknown Location';
        document.getElementById('currentCity').value = city;
      } catch (error) {
        console.error('Error fetching geolocation info:', error);
        document.getElementById('currentCity').value = 'Unable to retrieve location';
      }
    };

    getGeolocation();
  }, []);

  return (
    
      <div className="form-container bg-white p-4 w-100">
        <h3 style={{ color: '#525252' }}>Join Our Beta Community</h3>
        <p>&quot;Join Our Exclusive Beta Community and Rediscover Your Roots!&quot;</p>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Name</label>
            <div className="d-flex align-items-center">
              <img src={nameIcon} alt="Name Icon" className="me-2" />
              <input type="text" className="form-control me-2 underline-input" id="firstName" placeholder="First" required />
              <input type="text" className="form-control underline-input" id="lastName" placeholder="Last" required />
            </div>
          </div>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <div className="d-flex align-items-center">
              <img src={mailIcon} alt="Email Icon" className="me-2" />
              <input type="email" className="form-control underline-input" id="email" placeholder="example@gmail.com" required />
            </div>
          </div>
          {/* Current City */}
          <div className="mb-3">
            <label htmlFor="currentCity" className="form-label">Current City</label>
            <div className="d-flex align-items-center">
              <img src={currentCityIcon} alt="Current City Icon" className="me-2" />
              <input type="text" className="form-control underline-input" id="currentCity" placeholder="City" required />
            </div>
          </div>
          {/* Naatil Evideya */}
          <div className="mb-3">
            <label htmlFor="naatilEvideya" className="form-label">Naatil Evideya?</label>
            <div className="d-flex align-items-center">
              <img src={homeIcon} alt="Home Icon" className="me-2" />
              <select id="naatilEvideya" className="form-select underline-input" required>
                <option value="" disabled selected>Select your district</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
        </form>
        <p className="mt-3 text-muted" style={{ fontSize: 'small' }}>
          *We value your privacy and are committed to protecting your personal information. Any data you provide will be kept confidential and will not be shared with third parties without your consent.
        </p>
      </div>
    
  );
};
