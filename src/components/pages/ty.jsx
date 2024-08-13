import './ty.css';
import { Link } from 'react-router-dom';
// logo imports
import brandLogo from '../assets/natil evideya logo-black.png';
import checkMark from '../assets/Check Mark.svg';
import watsApp from '../assets/WhatsApp.svg';
import faceBook from '../assets/Facebook.svg';
import linkedIn from '../assets/LinkedIn.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/Instagram.svg';
import preView from '../assets/preview.png';

export const Ty = () => {
  return (
    <div className="body">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-gradient">
        <div className="position-absolute top-0 start-0 p-4">
          {/* Logo */}
          <img src={brandLogo} alt="Naatil Evidya Logo" className="logo mb-3 align-self-start p-3" style={{ width: 140 }} />
        </div>
        <div className="text-center">
          <div className="mb-2">
            {/* Checkmark Icon */}
            <img src={checkMark} alt="Checkmark" className="img-fluid" style={{ maxWidth: '70px' }} />
          </div>
          <h1 className="display-4 fw-bold text-primary">Thank You!</h1>
          <p className="lead text-primary">
            You have joined 5,500 other Malayalee&apos;s in our waiting list. <br />
            We will notify you as soon as we launch!
          </p>

          <Link to="/" className="btn btn-primary btn-lg rounded-pill mt-3">
            Back to Home
          </Link>
          <p className="reccomend mt-4 text-primary">Don’t hesitate to share with your friends</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            {/* Social Media Icons with Links */}
            
            <a href="https://wa.me/?text=Check%20out%20Naatil%20Evidya%20at%20https://naatil-evideya-react.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={watsApp} alt="WhatsApp" className="img-fluid" style={{ width: '40px',height:'50px' }} />
              <meta property="og:title" content="Join Naatil Evidya" />
              <meta property="og:description" content="Join 5,500 other Malayalees in our waiting list for Naatil Evidya." />
              <meta property="og:image" content={preView} />
            </a>

            <a href="https://www.facebook.com/sharer/sharer.php?u=https://naatil-evideya-react.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={faceBook} alt="Facebook" className="img-fluid" style={{ width: '50px',height:'50px' }} />
              {/* Facebook */}
              <meta property="og:title" content="Join Naatil Evidya" />
              <meta property="og:description" content="Join 5,500 other Malayalees in our waiting list for Naatil Evidya." />
              <meta property="og:image" content={preView} />
            </a>

            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://naatil-evideya-react.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" className="img-fluid" style={{ width: '50px',height:'50px' }} />
              {/* LinkedIn */}
              <meta property="og:title" content="Join Naatil Evidya" />
              <meta property="og:description" content="Join our waiting list on LinkedIn and stay updated." />
              <meta property="og:image" content={preView} />
            </a>

            <a href="https://twitter.com/intent/tweet?url=https://naatil-evideya-react.vercel.app/&text=Check%20out%20Naatil%20Evidya" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="img-fluid" style={{ width: '40px',height:'50px' }} />
              {/* Twitter */}
              <meta property="og:title" content="Naatil Evidya on Twitter" />
              <meta property="og:description" content="Tweet about Naatil Evidya and join our waiting list." />
              <meta property="og:image" content={preView} />
            </a>

            <a href="https://www.instagram.com/?url=https://naatil-evideya-react.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="img-fluid" style={{ width: '50px',height:'50px' }} />
              {/* Instagram */}
              <meta property="og:title" content="Join Naatil Evidya on Instagram" />
              <meta property="og:description" content="Share Naatil Evidya with your Instagram followers." />
              <meta property="og:image" content={preView} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};