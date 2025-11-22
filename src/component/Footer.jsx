import React, { useState } from "react";
import {
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [techActive, setTechActive] = useState(false);

  const handleClickIcon = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleClickTech = () => {
    setTechActive(true);
  };

  return (
    <footer className="footer bg-dark pt-5 text-light">
      <div className="container">
        <div className="row">

          {/* Logo + About */}
          <div className="col-12 col-sm-12 col-md-4 mb-4">
            <img
              src={logo}
              alt="Karma Financial Solutions Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "180px" }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/assets/logo.png";
              }}
            />
            <p>
              At Karma Financial Solutions, we deliver insightful market research and strategic
              financial guidance to help you make confident, data-driven decisions.
              <br /><br />
              We follow strict regulatory standards and prioritize transparency, integrity, and
              personalized service—so you always receive support you can trust.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-6 col-sm-4 col-md-2 mb-4 text-light">
            <h5>Useful Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/service" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="col-12 col-sm-8 col-md-3 mb-4">
            <h5>Our Office</h5>
            <p><FaMapMarkerAlt className="me-2 text-warning" />156, 1st Floor, C tower, K10 Atlantis, Near Genda Circle, opp. Honest Restaurant, Vadodara, Gujarat 390007</p>
            <p><FaPhoneAlt className="me-2 text-warning" />+91 81600 72383</p>
            <p><FaPhoneAlt className="me-2 text-warning" />+91 74050 65241</p>
            <p><FaEnvelope className="me-2 text-warning" />info@karmafinancial.in</p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-sm-12 col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-4 ">
              <a
                href="https://www.instagram.com/karmfinancial?igsh=MXRiejJqd3VzMWt0bQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className={`icon fs-3 insta ${activeIcon === "insta" ? "active" : ""}`}
                  onClick={() => handleClickIcon("insta")}
                />
              </a>

              <a href="https://youtube.com/@stockmovein?si=2dA8V_h7mxcPzds6"
               target="_blank" 
              rel="noopener noreferrer">
                <FaYoutube
                  className={`icon fs-3 youtube ${activeIcon === "youtube" ? "active" : ""}`}
                  onClick={() => handleClickIcon("youtube")}
                />
              </a>

              <a
                href="https://wa.me/91xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className={`icon fs-3 whatsapp ${activeIcon === "whatsapp" ? "active" : ""}`}
                  onClick={() => handleClickIcon("whatsapp")}
                />
              </a>

            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Karma Financial Solutions | Made with 🫶🏻 by
            <a
              href="https://techstrota.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`techstrota-link ms-1 ${techActive ? "active" : ""}`}
              onClick={handleClickTech}
            >
              Techstrota
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
