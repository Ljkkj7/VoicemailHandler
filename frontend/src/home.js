import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
        <div className="home">
            {heroSection()}
            {ctaSection()}
        </div>
    );
    }
}

function heroSection() {
  return (
      <div className="hero-section">
        <h1>Welcome to Heidi Calls</h1>
        <p>Your practice's voicemail handler</p>
        <div className="hero-info-grid">
          <div className="hero-info-card">
            <h2>Automated Voicemail Handling</h2>
            <p>Heidi Calls automatically answers your practice's phone calls and takes messages when you're unavailable. 
              No more missed calls or lost messages!</p>
          </div>
          <div className="hero-info-card">
            <h2>Easy Setup</h2>
            <p>Getting started is easy. Just sign up, set your preferences, and let Heidi Calls do the rest.</p>
          </div>
          <div className="hero-info-card">
            <h2>Secure and Reliable</h2>
            <p>Your patients' information is safe with us. We use industry-standard security measures to protect your data.</p>
          </div>
        </div>
      </div>
  );
}

function ctaSection() {
  return (
       <div className="call-to-action-section">
          <h1>Experience the difference with Heidi Calls</h1>
          <div className="call-to-action-grid">
            <div className="call-to-action-card">
              <h2>Ready to get started?</h2>
              <p>Sign up today and let Heidi Calls handle your practice's voicemail needs!</p>
              <a href="/signup" className="cta-button">Sign Up Now</a>
            </div>
            <div className="call-to-action-card">
              <h2>Practice Login</h2>
              <p>Login to access your practice's dashboard.</p>
              <a href="/login" className="cta-button">Login</a>
            </div>
          </div>
      </div>
  );
}

export default Home;