import { useState } from "react";
import "./About.css";
import Contact from "./Contact";

const About = () => {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    if (page === "Contact") {
      return <Contact />;
    }

    return (
      <section className="about-container">
        {/* ✅ Headline Top Center */}
        <div className="headline">
          <div className="about-subtitle">🧾 About Us</div>
          <h2 className="about-heading">Karma Financial Solutions</h2>
          <p className="lead">
            Helping You Grow & Protect Your Wealth With Confidence
          </p>
        </div>

        <div className="about-row">
          {/* Left side - Image + Why Choose Us */}
          <div className="about-left">
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
          </div>

          {/* Right side - Paragraph + CTA */}
          <div className="about-right">
            <p className="about-lead">
              At Karma Financial Solutions, we believe that <strong>financial freedom isn't just a goal—it's your right.</strong> 
              Whether you're just starting your investment journey or planning for long-term wealth, 
              we're here to guide you every step of the way.


            </p>
            <p className="about-body">
              With a passion for <strong>transparency, trust, and results, </strong>we offer expert-backed services to meet your unique goals.
            </p>

            <div className="cta">
              <div className="title">💬 Let’s Talk</div>
              <p>Your wealth. Your goals. <strong>Our mission.</strong></p>
              <button
                className="btn"
                onClick={() => setPage("Contact")}
              >
                📩 Book Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return renderPage();
};

export default About;
