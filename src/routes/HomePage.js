import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css';

import img1 from './assets/1.png';
import Navbar from '../components/Navbar';


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <h1>Fruit.Ai</h1>
      <p>Be Healthy!</p>
      <div className="services-container">
        <Link to="/chatbot" className="service-link">
          <div className="service-card chat">
            Chat.
          </div>
        </Link>
        <Link to="/translate" className="service-link">
        <div className="service-card translator">
          <img src={img1} alt="Translator Icon" />
        </div>
        </Link>
        
        <Link to='/faq' className="service-link">
        <div className="service-card about">
          FAQ
        </div>
        </Link>
        <Link to='/about' className="service-link">
        <div className="service-card about">
          About
        </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomePage;
