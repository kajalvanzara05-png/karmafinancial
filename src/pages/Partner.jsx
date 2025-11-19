import TATA_AIA from '../assets/tata_aia.jpg';
import POLICY_BAZAAR from '../assets/policy_bazaar.png';
import ANGEL_ONE from '../assets/angel_one.png';
import IIFL from "../assets/iifl.jpeg";
import './Partner.css';
import { motion } from 'framer-motion';

const Partners = () => {
  const logos = [TATA_AIA, POLICY_BAZAAR, ANGEL_ONE, IIFL];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="container py-5 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="mb-3">🤝 Join the Karma Financial Network 🤝</h1>
      <p className="lead">Be part of a growing legacy of financial empowerment.</p>
      <p className="lead mb-4">
        Start your journey with Karma Financial and help others grow their wealth confidently.
      </p>

      <h2 className="mb-4">Our Trusted Partners</h2>

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

      <a
        href="https://a.aonelink.in/ANGOne/OVAk2Su"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg mt-4"
      >
        📩 Start Investment
      </a>
    </motion.div>
  );
};

export default Partners;
