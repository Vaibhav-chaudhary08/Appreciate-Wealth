import React, { useState } from 'react';
import './Auth.css'; // CSS file
import Navbar from '../components/Navbar';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
        <Navbar/>
        <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <p>
          By signing in you are agreeing our <a href="#">Terms and Privacy Policy</a>
        </p>

        <form>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Full Name" />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          {isLogin && (
            <div className="form-group checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember password</label>
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>

          {isLogin && (
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          )}
        </form>

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="toggle-auth">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span onClick={toggleForm}>{isLogin ? 'Register' : 'Login'}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Auth;
