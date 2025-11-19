import React from "react";
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
  return (
    <footer className="bg-light pt-5">
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
          <div className="col-6 col-sm-4 col-md-2 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="/service" className="text-decoration-none text-dark">Services</a></li>
              <li><a href="/contact" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="col-12 col-sm-8 col-md-3 mb-4">
            <h5>Our Office</h5>
            <p><FaMapMarkerAlt className="me-2 text-primary" />156, 1st Floor, C tower, K10 Atlantis, Near Genda Circle, opp. Honest Restaurant, Vadodara, Gujarat 390007</p>
            <p><FaPhoneAlt className="me-2 text-primary" />+91 81600 72383</p>
            <p><FaPhoneAlt className="me-2 text-primary" />+91 74050 65241</p>
            <p><FaEnvelope className="me-2 text-primary" />info@karmafinancial.in</p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-sm-12 col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-4">
              <a 
                href="https://www.instagram.com/karmfinancial?igsh=MXRiejJqd3VzMWt0bQ==" 
                target="_blank" 
                rel="noreferrer"
                className="text-danger fs-3"
              >
                <FaInstagram />
              </a>

              <a 
                href="https://youtube.com/@stockmovein?si=2dA8V_h7mxcPzds6" 
                target="_blank" 
                rel="noreferrer"
                className="text-danger fs-3"
              >
                <FaYoutube />
              </a>

              <a 
                href="https://wa.me/qr/5SUFSRTBPY27D1" 
                target="_blank" 
                rel="noreferrer"
                className="text-success fs-3"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Karma Financial Solutions | Made with 🫶🏻 by 
            <a 
              className="text-decoration-none ms-1" 
              href="https://techstrota.com/" 
              target="_blank" 
              rel="noopener noreferrer"
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
