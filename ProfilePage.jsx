import React, { useState } from 'react';
import './ProfilePage.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ProfilePage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="profile-page">
      <nav>
        <ul>
          <li>Menu Page</li>
          <li>Contact Us</li>
          <li>Ratings</li>
        </ul>
      </nav>
      <header>
        <h1>Kraving Ratings</h1>
      </header>
      <main>
        <section className="user-info">
          <h2>Profile Page</h2>
          <label>
            Name:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
          <input type="text" placeholder="Search city, state, or zip" />
        </section>
        <section className="ratings">
          <h2>Past Ratings</h2>
          <ul>
            <li>
              Brown Sugar Bar and Grill <span className="stars">★★★★★</span>
            </li>
            <li>
              Crab House NYC <span className="stars">★★★★☆</span>
            </li>
            <li>
              Per Se <span className="stars">★★★☆☆</span>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="footer-links">
          <a href="#">Site Map</a>
          <a href="#">Contact Us</a>
          <a href="#">About</a>
          <a href="#">Sign-In</a>
          <a href="#">FAQ</a>
          <a href="#">Support</a>
        </div>
        <div className="social-media">
          <span>Stay Connected: </span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div>
          &copy; 2024
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
