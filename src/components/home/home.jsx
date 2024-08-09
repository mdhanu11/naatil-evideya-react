// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'
// Lottie imports
import animationData from '../assets/heo-animation.json';
import Lottie from 'lottie-react'
// Section one imports
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




export const Home = () => {

const navigate = useNavigate();
//onclickevent
  const handleSubmit = () => {
    navigate('/ty');
  };


  return (

    // SECTION ONE
    <>
    <div className="hero row mb-5">
      {/* leftdiv */}
      <div className="left col-md-7 p-5">
        {/* logo */}
        <img src="/src/components/assets/natil evideya logo-black.png" alt="Logo" className="logo mb-3 align-self-start" style={{ width: 140 }} />
        {/* animation */}
        <Lottie animationData={animationData} style={{ width: '80%', height: '80%', marginLeft: 20 }} />
        <div className="hero-text mt-5 mb-2">
          <h1>Connect with Malayalee’s Worldwide!</h1>
          <p>Welcome to the Global Mallu Community</p>
        </div>
      </div>
      {/* rightdiv */}
      <div className="right col-md-5 d-flex justify-content-center align-items-center">
        <div className="form-container bg-white p-4 w-100">
          <h2>Join Our Beta Community</h2>
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
                <input type="text" className="form-control underline-input" id="naatilEvideya" placeholder="Kozhikode" required />
              </div>
            </div>
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
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={supportiveCommunity} alt="Supportive Community" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Supportive Community</h4>
      <p style={{ color: '#525252' }}>
        {"Find support and advice from fellow Mallus who have navigated similar paths. Build a network that can offer guidance on everything from career opportunities to settling in a new city."}
      </p>
    </div>
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={exclusiveContent} alt="Exclusive Content" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Exclusive Content</h4>
      <p style={{ color: '#525252' }}>
        {"Access exclusive content tailored for Mallus, including articles, videos, and podcasts. Stay informed about the latest news, trends, and happenings within the Mallu community."}
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
        {"Create a personalized profile to showcase your interests, connect with like-minded Mallus, and build a strong network."}
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 text-center mb-4 p-5">
    <img src={globalNetworking} alt="Global Networking" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Global Networking</h4>
      <p style={{ color: '#525252' }}>
        {"Connect with Mallus across the globe. Share your experiences, stories, and insights with a community that understands and celebrates your background."}
      </p>
      
    </div>
    <div className="col-md-6 text-center mb-4 p-5">
      <img src={eventsMeetups} alt="Events and Meetups" className="mb-3" />
      <h4 style={{ color: '#525252' }}>Events and Meetups</h4>
      <p style={{ color: '#525252' }}>
        {"Discover and participate in local and global events organized by the community. Attend virtual meetups, cultural festivals, and social gatherings that bring Mallus together."}
      </p>
    </div>
  </div>
</div>


{/* SECTION THREE */}

<div className="container text-center mb-4">


  <div className="row">
    <h1 className='mb-5' style={{ textAlign: 'center', color: '#525252', width: '100%' }}>
    About Naatil-Evideya?
    </h1>
    <div className="col">
      <img className='' src="/src/components/assets/natil evideya logo-black.png" alt="Logo" />
    </div>
    <div className="col" style={{ flex: '1', color: '#525252', lineHeight: '1.6', maxWidth: '600px',textAlign:'left' }}>
      <p> When Mallus meet outside Kerala, the first question often is, &quot;Naatil Evideya?&quot; (&quot;Where are you from in Kerala?&quot;). 
        Our platform is built around this sentiment, helping Mallus across the globe reconnect with their roots. Whether 
        you are living far from Kerala or just a few miles away, our platform bridges the gap, bringing together Mallus from 
        every corner of the world. Relive the essence of Kerala through vibrant discussions, shared memories, and meaningful 
        connections. Discover new friends, rekindle old friendships, and build a support system that feels just like home. 
        Be part of our beta community and help shape the future of Mallu connectivity!</p>
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
