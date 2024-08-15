// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'
// Lottie imports
import animationData from '../assets/heo-animation.json';
import Lottie from 'lottie-react'
// Section one imports
import brandLogo from '../assets/natil evideya logo-black.png';
import homeIcon from '/src/components/assets/Home-icon.svg';
import nameIcon from '/src/components/assets/name-icon.svg';
import mailIcon from '/src/components/assets/Email-icon.svg';
import currentCityIcon from '/src/components/assets/currentcity-icon.svg';
// Section two imports
import supportiveCommunity from '/src/components/assets/Supportive Community.svg';
import exclusiveContent from '/src/components/assets/Exclusive Content.svg';
import culturalExchange from '/src/components/assets/Cultural Exchange.svg';
import personalizedProfiles from '/src/components/assets/Personalized Profiles.svg';
import globalNetworking from '/src/components/assets/Global Networking.svg';
import eventsMeetups from '/src/components/assets/Events and Meetups.svg';
//dropdown lists(districts)
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


export const Home = () => {

  //NAVIGATION  //HANDLE SUBMIT
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    // navigate('/ty');
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

    // parsing as form data
    const formData = new URLSearchParams();
    formData.append('name', firstName + lastName);
    formData.append('email', email);
    formData.append('currentCity', currentCity);
    formData.append('nattilEvideya', naatilEvideya);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);

    try {
      // Sending form data
      const response = await fetch('https://script.google.com/macros/s/AKfycbwk6Jkh5_mJYNip4ADspWGsmOpE9k2-Hw6yGMtp5SZZD_DxSelwHppn-c6Q62QhsZZnsw/exec', {
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

  const [, setGeoInfo] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  //VISITOR LOCATION
   
  useEffect(() => {
    // Function to get geolocation from the browser
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

    // Function to get geolocation info based on latitude and longitude
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

    // SECTION ONE
    <>
    <div className="row mb-5">
      {/* leftdiv */}
      <div className="left col-md-7 p-5" >
        {/* logo */}
        <img src={brandLogo} alt="Logo" className="logo mb-3" style={{ width: 140 }} />
        {/* animation */}
        <Lottie animationData={animationData} style={{ width: '80%', height: '80%', marginLeft: '25px' }} />
        <div className="hero-text mt-5 mb-2">
          <h1>Connect with Malayalee’s Worldwide!</h1>
          <p>Welcome to the Global Malayalees Community</p>
        </div>
      </div>
      {/* rightdiv */}
      <div className="right col-md-5 d-flex justify-content-center align-items-center">
        <div className="form-container bg-white p-4 w-100">
          <h3 style={{ color: '#525252' }}>Join Our Beta Community</h3>
          <p>&quot;Join Our Exclusive Beta Community and Rediscover Your Roots!&quot;</p>
          <form>
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
              <label htmlFor="email" className="form-label" id='emial'>E-mail</label>
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

            {/* buttonsubmit */}
            <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>

          </form>
          <p className="mt-3 text-muted" style={{ fontSize: 'small' }}>
            *We value your privacy and are committed to protecting your personal information. Any data you provide will be kept confidential and will not be shared with third parties without your consent.
          </p>
        </div>
      </div>
    </div>

    {/* SECTION TWO */}

    <div className="features mt-5 p-5" >
      <h1 className="text-center mb-5 mt-5" style={{ color: '#525252' }}>Naatil-Evideya Features</h1>
      <div className="row">
    <div className="col-md-6 text-center mb-4 mb-s-2 p-5">
      <img src={supportiveCommunity} alt="Supportive Community" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Supportive Community</h4>
      <p style={{ color: '#525252' }}>
        {"Find support and advice from fellow Malayalees who have navigated similar paths. Build a network that can offer guidance on everything from career opportunities to settling in a new city."}
      </p>
    </div>
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={exclusiveContent} alt="Exclusive Content" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Exclusive Content</h4>
      <p style={{ color: '#525252' }}>
        {"Access exclusive content tailored for Malayalees, including articles, videos, and podcasts. Stay informed about the latest news, trends, and happenings within the Malayalees community."}
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={culturalExchange} alt="Cultural Exchange" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Cultural Exchange</h4>
      <p style={{ color: '#525252' }}>
        {"Engage in discussions about Kerala's rich culture, traditions, and festivals. Exchange recipes, travel tips, and cultural practices that keep the spirit of Kerala alive."}
      </p>
    </div>
    <div className="col-md-6 text-center mb-4 p-5">
    <img src={personalizedProfiles} alt="Personalized Profiles" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Personalized Profiles</h4>
      <p style={{ color: '#525252' }}>
        {"Create a personalized profile to showcase your interests, connect with like-minded Malayalees, and build a strong network."}
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 text-center mb-4 p-5">
    <img src={globalNetworking} alt="Global Networking" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Global Networking</h4>
      <p style={{ color: '#525252' }}>
        {"Connect with Malayalees across the globe. Share your experiences, stories, and insights with a community that understands and celebrates your background."}
      </p>
      
    </div>
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={eventsMeetups} alt="Events and Meetups" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Events and Meetups</h4>
      <p style={{ color: '#525252' }}>
        {"Discover and participate in local and global events organized by the community. Attend virtual meetups, cultural festivals, and social gatherings that bring Malayalees together."}
      </p>
    </div>
  </div>
</div>


{/* SECTION THREE */}

<div className="container text-center mb-4">


  <div className="aboutrow row">
    <h1 className='mb-5' style={{ textAlign: 'center', color: '#525252', width: '100%' }}>
    About Naatil-Evideya?
    </h1>
    <div className="aboutleft col" >
      <img className="logo" src={brandLogo} alt="Logo" />
    </div>
    <div className="aboutright col" style={{ flex: '1', color: '#525252', lineHeight: '1.6', maxWidth: '600px',textAlign:'left' }}>
      <p> When Malayalees meet outside Kerala, the first question often is, &quot;Naatil Evideya?&quot; (&quot;Where are you from in Kerala?&quot;). 
        Our platform is built around this sentiment, helping Malayalees across the globe reconnect with their roots. Whether 
        you are living far from Kerala or just a few miles away, our platform bridges the gap, bringing together Malayalees from 
        every corner of the world. Relive the essence of Kerala through vibrant discussions, shared memories, and meaningful 
        connections. Discover new friends, rekindle old friendships, and build a support system that feels just like home. 
        Be part of our beta community and help shape the future of Malayalees connectivity!</p>
    </div>
    </div>
</div>


{/* FOOTER */}

<div className="footer text-center" style={{ color: 'white', backgroundColor: '#000842' }}>
    <p>© 2024 Naatil-Evideya. All Rights Reserved.</p>
</div>

</>
    
  )
}