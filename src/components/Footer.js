import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTiktok, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer id="contact">
      {/* Email Button */}
      <div className="contact-buttons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=namcartela@gmail.com"
          className="contact-button"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>

        <a
          href="https://wa.me/07namcartela"
          className="contact-button"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>

      
      <p className="footer-heading">Ne gasesti si pe retelele sociale</p>


      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="http://" target="_blank" className="social-icon" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="http://" target="_blank" className="social-icon" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://" target="www.tiktok.com/@shotbyshotevents?_t=ZN-8uA6ox2TTx0&_r=1" className="social-icon" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="http://" target="_blank" className="social-icon" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <p>&copy; 2025 Shot shot events | A snaky project</p>
    </footer>
  );
}

export default Footer;
