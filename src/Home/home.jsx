// import React from 'react'
import './home.css'
import brandLogo from '../components/assets/natil evideya logo-black.png';
// Lottie imports
import animationData from '../components/assets/heo-animation.json';
import Lottie from 'lottie-react'
// import { Form } from 'react-router-dom';
import {Form} from '../components/Form/Form'
import CitiesGrid from '../components/Cities/Cities';
import FeaturesGrid from '../components/Features/Features';
import AboutNaatilEvideya from '../components/About/AboutUs';
import Footer from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div className="row">
      {/* SECTION ONE */}
       {/* leftdiv */}
       <div className="left col-md-7 p-5 mb-5" >
          {/* logo */}
          <img src={brandLogo} alt="Logo" className="logo mb-3" style={{ width: 140 }} />
          {/* animation */}
          <Lottie animationData={animationData} style={{ width: '80%', height: '80%', marginLeft: '25px' }} />
          <div className="hero-text mt-5 mb-2">
            <h1 style={{fontSize:40,fontWeight:500}}>Connect with Malayalee’s Worldwide!</h1>
            <p style={{fontSize:24,fontWeight:500}}>Join the #1 global community for 2.1Million Malayalee’s living abroad.</p>
          </div>
       </div>
       {/* rightdiv/form */}
       <div className="right col-md-5 d-flex justify-content-center align-items-center">
         <Form/>
       </div>
      {/* where do u live? */}
      <div className="cities mt-5">
        <CitiesGrid/>
      </div>  
      {/* features section */}
      <div className="mt-5 mb-0">
        <FeaturesGrid/>
      </div>
      {/* about section */}
      <div className="mt-1">
        <AboutNaatilEvideya/>
      </div>
      {/* footer */}
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}