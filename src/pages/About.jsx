import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import Contact from "./Contact";

const About = () => {
  const [page, setPage] = useState("Home");

  const fadeDown = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const renderPage = () => {
    if (page === "Contact") return <Contact />;

    return (
      <section className="about-container">
        {/* Headline - fades in center */}
        <motion.div
          className="headline"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="about-subtitle">🧾 About Us</div>
          <h2 className="about-heading">Karma Financial Solutions</h2>
          <p className="lead">
            Helping You Grow & Protect Your Wealth With Confidence
          </p>
        </motion.div>

        <div className="about-row">
          {/* Left side - image + why choose us */}
          <motion.div
            className="about-left"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <figure className="about-figure">
              <img
                src="/images/about.jpg"
                alt="About Us"
                className="about-img"
              />
            </figure>

            <div className="choose-section" aria-label="Why Choose Us">
              <h3 className="choose-title">💡 Why Choose Us?</h3>
              <ul className="choose-list">
                <li><span className="check">✓</span> Transparent, honest advice</li>
                <li><span className="check">✓</span> Real-time data & insights</li>
                <li><span className="check">✓</span> Beginner to pro educational content</li>
                <li><span className="check">✓</span> Trusted by hundreds of satisfied clients</li>
              </ul>
            </div>
          </motion.div>

          {/* Right side - paragraph + CTA */}
          <motion.div
            className="about-right"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="about-lead">
              At Karma Financial Solutions, we believe that{" "}
              <strong>financial freedom isn't just a goal—it's your right.</strong>
              Whether you're just starting your investment journey or planning for long-term wealth, 
              we're here to guide you every step of the way.
            </p>

            <p className="about-body">
              With a passion for <strong>transparency, trust, and results, </strong>
              we offer expert-backed services to meet your unique goals.
            </p>

            <div className="cta">
              <div className="title">💬 Let’s Talk</div>
              <p>Your wealth. Your goals. <strong>Our mission.</strong></p>
              <button className="btn" onClick={() => setPage("Contact")}>
                📩 Book Your Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  return renderPage();
};

export default About;
