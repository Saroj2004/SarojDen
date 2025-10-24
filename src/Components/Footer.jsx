import React from 'react';
import LinkD from '../assets/linkedin.png'; // update path to your image
import git from '../assets/git.png';    // update path to your image
import mail from '../assets/email.png';     // update path to your image
import './Footer.css';                     // optional, if you have CSS
const Footer = () => {
  return (
    <footer className="footer-section">
      <ul className="social-links">
        <a href="https://www.linkedin.com/in/saroj-medipakala-a912261a4/">
          <li><img src={LinkD} alt="Linkedin" /></li>
        </a>

        <a href="https://github.com/Saroj2004">
          <li><img src={git} alt="GitHub" /></li>
        </a>
        
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new target="_blank"'>
        <li><img src={mail} alt="Mail" /></li>
        </a>
      </ul>
      <p>© 2025 Saroj Medipakala. Built with ❤️ and lots of coffee.</p>
    </footer>
  );
};

export default Footer;
