import React from 'react';
import './About.css'; // Importing the CSS file
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className="about-container">
      <div className="about-content">
        <h1>Fruit.Ai</h1>
        <p>
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button className="about-btn">About</button>
      </div>
    </div>
    </>
  );
};

export default About;
