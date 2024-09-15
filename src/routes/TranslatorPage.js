import React from 'react';
import './TranslatorPage.css'; // Import CSS for styling
import Navbar from '../components/Navbar';

const TranslatorPage = () => {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="translator-container">
        <h1>Online Translator</h1>
        <p>Powered by Google Translate</p>

        {/* Embed Google Translate using iframe */}
        <div className="iframe-container">
          <iframe
            src="https://translate.google.co.in/?sl=auto&tl=en&op=translate"
            title="Google Translate"
            frameBorder="0"
            className="translator-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default TranslatorPage;
