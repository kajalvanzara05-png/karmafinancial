import TATA_AIA from '../assets/tata_aia.jpg';
import POLICY_BAZAAR from '../assets/policy_bazaar.png';
import ANGEL_ONE from '../assets/angel_one.png';
import IIFL from "../assets/iifl.jpeg";
import './Partner.css';

const Partners = () => {
  return (
    <div className="partner-section">
      <div className="trusted-partners">
        <h1>Our Trusted Partners</h1>
        <div className="logo-slider-container">
          <div className="partners-logo-slider">
            <div className="logo-group">
              <img src={TATA_AIA} alt="Tata AIA" />
              <img src={POLICY_BAZAAR} alt="Policy Bazaar" />
              <img src={ANGEL_ONE} alt="Angel One" />
              <img src={IIFL} alt="IIFL Finance" />
            </div>
            <div className="logo-group">
              <img src={TATA_AIA} alt="Tata AIA" />
              <img src={POLICY_BAZAAR} alt="Policy Bazaar" />
              <img src={ANGEL_ONE} alt="Angel One" />
              <img src={IIFL} alt="IIFL Finance" />
            </div>
            <div className="logo-group">
              <img src={TATA_AIA} alt="Tata AIA" />
              <img src={POLICY_BAZAAR} alt="Policy Bazaar" />
              <img src={ANGEL_ONE} alt="Angel One" />
              <img src={IIFL} alt="IIFL Finance" />
            </div>
            
          </div>
        </div>
      </div>
      <button className="start-investment-btn"> 
        <a href="https://a.aonelink.in/ANGOne/OVAk2Su" target="_blank"  rel="noopener noreferrer"
         className='angel_link'>📩 Start Investment</a>
         </button>
    </div>
  );
};
export default Partners;
