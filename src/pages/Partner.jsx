import TATA_AIA from '../assets/tata_aia.jpg';
import POLICY_BAZAAR from '../assets/policy_bazaar.png';
import ANGEL_ONE from '../assets/angel_one.png';
import IIFL from "../assets/iifl.jpeg";
import './Partner.css';
import { motion } from 'framer-motion';

const Partners = () => {
  const logos = [TATA_AIA, POLICY_BAZAAR, ANGEL_ONE, IIFL];

 
  return (
    <div  className="container py-5 text-center partners-bg">
    
        
        <h1 className="mb-3 text-Primary underline-title">
          🤝 Join the Karma Financial Network 🤝</h1>

      <p className="lead text-white">
        Be part of a growing legacy of financial empowerment.
      </p>

      <p className="lead mb-4 text-dark">
        Start your journey with Karma Financial and help others grow their wealth confidently.
      </p>
      <div className='box'>
        <h2 className="partner">Our Trusted Partners</h2>
         {/* Slider */}
      <div className="partner-slider-wrapper overflow-hidden">
        <div className="partner-slider d-flex align-items-center">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Partner Logo"
              className={`img-fluid rounded shadow mx-3 ${
                idx % logos.length === 1 || idx % logos.length === 2 ? "small-logo" : ""
              }`}
            />
              ))}
      </div>
      

     
        
        </div>
      </div>

      <a
        href="https://a.aonelink.in/ANGOne/OVAk2Su"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg mt-4 invest-btn"

      >
        📩 Start Investment
      </a>
    </div>
  );
};

export default Partners;
