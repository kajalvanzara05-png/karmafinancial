import React from "react";
import {   FaYoutube,
  FaWhatsapp,FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/logo.png";  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
         <div className="logo">
      
         <img
             src={logo}
             alt="Karma Financial Solutions Logo"
             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/assets/logo.png"; }}
             className="footer-logo"
           />
      
        {/* About Company */} 
        <div className="footer-section about-company">
          <h6 className="h4">At Karma Financial Solutions, we deliver
             insightful market  research and strategic 
            financial guidance to help you make confident, data-driven decisions.
            <br/> <br/>We follow strict regulatory standards and prioritize transparency,
             integrity, and personalized service—so you always receive the support you can trust.
           </h6>
        </div>
       </div>
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Service">Services</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        {/* Our Office */}
        <div className="footer-section">
          <h3>Our Office</h3>
          <ul className="office-info">
            <li>
              <p><FaMapMarkerAlt className="icon" />156, 1st Floor, C tower, K10 Atlantis,
                                    Near Genda Circle, opp. Honest Restaurant,
                                  Vadodara, Gujarat 390007</p>
            </li>
            <li>
              <FaPhoneAlt className="icon" />+91 81600 72383
            </li>
             <li>
              <FaPhoneAlt className="icon" />+91 +91 74050 65241
            </li>
            <li>
              <FaEnvelope className="icon" /> info@karmafinancial.in
            </li>
          </ul>
        </div>

        {/* Social Media */}
       <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
        
            <a className="instagram" href="https://www.instagram.com/karmfinancial?igsh=MXRiejJqd3VzMWt0bQ==" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a className="youtube" href="https://youtube.com/@stockmovein?si=2dA8V_h7mxcPzds6" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a className="whatsapp" href="https://wa.me/qr/5SUFSRTBPY27D1" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
                      

      

      <div className="footer-bottom">
        
        <p>© {new Date().getFullYear()} Karma Financial Solutions | Made with 🫶🏻 by
          <a className="tech" href="https://techstrota.com/" target="_blank" rel="noopener noreferrer"> Techstrota</a>.
        </p>
     </div>
    </footer>
  );
};

export default Footer;
