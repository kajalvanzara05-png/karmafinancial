import TATA_AIA from '../assets/tata_aia.jpg';
import POLICY_BAZAAR from '../assets/policy_bazaar.png';
import ANGEL_ONE from '../assets/angel_one.png';
import IIFL from "../assets/iifl.jpeg";
import './Partner.css';


const Partners = () => {
  return (

    
    <div className="partner-section">
      
      <div className="trusted-partners">
        <h1>🤝 Join the Karma Financial Network 🤝</h1>
        
     <p className='title'>  Be part of a growing legacy of financial empowerment.</p>
     <p className='title'>Start your journey with Karma Financial and help others grow their wealth confidently.</p>
     <div >
      
     

        <div className="logo-slider-container">
          <h1 className='partner'>Our Trusted Partners</h1>
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
      
      </div>
      <button className="start-investment-btn"> 
        <a href="https://a.aonelink.in/ANGOne/OVAk2Su" target="_blank"  rel="noopener noreferrer"
         >📩 Start Investment</a>
         </button>
    </div>
  );
};
export default Partners;
