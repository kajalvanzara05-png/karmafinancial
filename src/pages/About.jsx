import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-row">
        {/* Left: image + Why Choose Us (below image) */}
        <div className="about-left">
          <figure className="about-figure">
            <img
              src="/images/about.jpg"
          alt="About Us" /* check filename in /public/images */
              className="about-img"
            />
          </figure>

          <div className="choose-section" aria-label="Why Choose Us">
            <h3 className="choose-title">💡 Why Choose Us?</h3>
            <ul className="choose-list">
              <li><span className="check">✓</span> Transparent, honest advice</li>
              <li><span className="check">✓</span> Real-time data &amp; insights</li>
              <li><span className="check">✓</span> Beginner to pro educational content</li>
              <li><span className="check">✓</span> Trusted by hundreds of satisfied clients</li>
            </ul>
          </div>
        </div>

        {/* Right: paragraph */}
        <div className="about-right">
        <div className="about-subtitle">About Us</div>
          <h2 className="about-heading">Karma Financial Solutions</h2>
          <p class="lead">Helping You Grow & Protect Your Wealth With Confidence</p>

          <p className="about-lead">
            At Karma Financial Solutions, we believe that <strong>financial freedom isn't just a goal—it's your right.</strong>
            Whether you're just starting your investment journey or planning for long‑term wealth, we're here to guide you every step of the way.
          </p>

          <p className="about-body">
            With a passion for <strong>transparency, trust, and results</strong>, we offer expert-backed services tailored to meet your unique goals.
            Our team provides clear advice, data-driven strategies and ongoing support so you can grow and protect your wealth with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
