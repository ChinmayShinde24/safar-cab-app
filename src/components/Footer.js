import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Safar</h2>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">Book a cab</a>
          </li>
          <li>
            <a href="/">Join us</a>
          </li>
          <li>
            <a href="/">Outstation</a>
          </li>
          <li>
            <a href="/">Rental</a>
          </li>
          <li>
            <a href="/">Corporate</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Media Centre</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Futurefactory</a>
          </li>
          <li>
            <a href="/">Electric</a>
          </li>
          <li>
            <a href="/">Investor Relations</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png   "
            alt="Instagram"
          />
        </a>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            alt="YouTube"
          />
        </a>
        <a href="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
            alt="Twitter"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
