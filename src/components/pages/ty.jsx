import './ty.css'
import { Link } from 'react-router-dom';
//logo imports
import brandLogo from '../assets/natil evideya logo-black.png';
import ckeckMark from '../assets/Check Mark.svg';
import watsApp from '../assets/WhatsApp.svg';
import faceBook from '../assets/Facebook.svg';
import linkedIn from '../assets/LinkedIn.svg'; 
import twitter from '../assets/twitter.svg'; 
import instagram from '../assets/Instagram.svg'; 



export const Ty = () => {
  return (
   
    <div className="body">
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-gradient">
      <div className="position-absolute top-0 start-0 p-4">
        {/* Add your logo image here */}
        <img src={brandLogo} alt="Naatil Evidya Logo" className="logo mb-3 align-self-start p-3" style={{ width: 180 }} />
      </div>
      <div className="text-center">
        <div className="mb-2">
          {/* Add your checkmark icon here */}
          <img src={ckeckMark} alt="Checkmark" className="img-fluid" style={{ maxWidth: '70px' }} />
        </div>
        <h1 className="display-4 fw-bold text-primary">Thank You!</h1>
        <p className="lead text-primary">
                You have joined 5,500 other Malayalee&apos;s in our waiting list. <br />
                We will notify you as soon as we launch!
        </p>

        <Link to="/" className="btn btn-primary btn-lg rounded-pill mt-3">
          Back to Home
        </Link>
        <p className="mt-4 text-primary">Don’t hesitate to share with your friends</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          {/* Add your social media icons here */}
          <img src={watsApp} alt="WhatsApp" className="img-fluid" style={{ width: '40px' }} />
          <img src={faceBook} alt="Facebook" className="img-fluid" style={{ width: '50px' }} />
          <img src={linkedIn} alt="LinkedIn" className="img-fluid" style={{ width: '50px' }} />
          <img src={twitter} alt="X" className="img-fluid" style={{ width: '40px' }} />
          <img src={instagram} alt="Instagram" className="img-fluid" style={{ width: '50px' }} />
        </div>
      </div>
    </div>
    </div>
  );
};

