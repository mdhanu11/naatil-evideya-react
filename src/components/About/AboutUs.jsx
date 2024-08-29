// import React from 'react';
import brandLogo from '../../assets/favicon-black.png'; 

const AboutNaatilEvideya = () => {
  return (
    <div className="container text-center mb-4">
      <div className="aboutrow row">
        <h1 className='mb-5' style={{ textAlign: 'center', color: '#525252', width: '100%' }}>
          About Naatil-Evideya?
        </h1>
        <div className="aboutleft col">
          <img className="logo" src={brandLogo} alt="Logo" style={{ width: 140 }}/>
        </div>
        <div className="aboutright col" style={{ flex: '1', color: '#525252', lineHeight: '1.6', maxWidth: '600px', textAlign: 'left' }}>
          <p>
            When Malayalees meet outside Kerala, the first question often is, &quot;Naatil Evideya?&quot; (&quot;Where are you from in Kerala?&quot;).
            Our platform is built around this sentiment, helping Malayalees across the globe reconnect with their roots. Whether 
            you are living far from Kerala or just a few miles away, our platform bridges the gap, bringing together Malayalees from 
            every corner of the world. Relive the essence of Kerala through vibrant discussions, shared memories, and meaningful 
            connections. Discover new friends, rekindle old friendships, and build a support system that feels just like home. 
            Be part of our beta community and help shape the future of Malayalees connectivity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNaatilEvideya;
