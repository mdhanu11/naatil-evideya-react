// import React from 'react';
import supportiveCommunity from '../assets/Supportive Community.svg'; 
import exclusiveContent from '../assets/Exclusive Content.svg';
import culturalExchange from '../assets/Cultural Exchange.svg';
import personalizedProfiles from '../assets/Personalized Profiles.svg';
import globalNetworking from '../assets/Global Networking.svg';
import eventsMeetups from '../assets/Events and Meetups.svg';

const FeaturesGrid = () => {
  const features = [
    {
      imgSrc: supportiveCommunity,
      title: 'Supportive Community',
      description: 'Find support and advice from fellow Malayalees who have navigated similar paths. Build a network that can offer guidance on everything from career opportunities to settling in a new city.',
    },
    {
      imgSrc: exclusiveContent,
      title: 'Exclusive Content',
      description: 'Access exclusive content tailored for Malayalees, including articles, videos, and podcasts. Stay informed about the latest news, trends, and happenings within the Malayalees community.',
    },
    {
      imgSrc: culturalExchange,
      title: 'Cultural Exchange',
      description: "Engage in discussions about Kerala's rich culture, traditions, and festivals. Exchange recipes, travel tips, and cultural practices that keep the spirit of Kerala alive.",
    },
    {
      imgSrc: personalizedProfiles,
      title: 'Personalized Profiles',
      description: 'Create a personalized profile to showcase your interests, connect with like-minded Malayalees, and build a strong network.',
    },
    {
      imgSrc: globalNetworking,
      title: 'Global Networking',
      description: 'Connect with Malayalees across the globe. Share your experiences, stories, and insights with a community that understands and celebrates your background.',
    },
    {
      imgSrc: eventsMeetups,
      title: 'Events and Meetups',
      description: 'Discover and participate in local and global events organized by the community. Attend virtual meetups, cultural festivals, and social gatherings that bring Malayalees together.',
    },
  ];

  return (
    <div className="features mt-1 mb-1 pt-0 p-5">
      <h1 className="text-center mb-2 mt-5" style={{ color: '#525252' }}>Naatil-Evideya Features</h1>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-4 col-md-6 text-center mb-4 p-5">
            <img src={feature.imgSrc} alt={feature.title} className="mb-3" />
            <h4 style={{ color: '#525252' }}>{feature.title}</h4>
            <p style={{ color: '#525252' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
