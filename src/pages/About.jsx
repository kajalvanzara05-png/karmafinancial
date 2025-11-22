import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import about from "../assets/about.jpg";

const About = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container about-wrapper py-0">

        {/* TOP HEADING */}
        <div className="text-center mb-4 mt-3 scroll-animate slide-up">
          <h6 className="about-subtitle">About Us</h6>
          <h2 className="about-heading">Karma Financial Solutions</h2>
          <p className="lead">
            Helping You Grow & Protect Your Wealth With Confidence
          </p>
        </div>

        {/* IMAGE + CONTENT */}
        <div className="row align-items-start mt-3">

          {/* IMAGE */}
          <div className="col-lg-4 d-flex justify-content-center about-img-col">
            <div className="about-img-box scroll-animate slide-left">
              <img src={about} alt="about" className="about-img" />
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="col-lg-4 mb-4 about-text-col">
            <div className="about-text-box p-2 scroll-animate slide-up">
              <p className="about-para"><br /><br />
                At Karma Financial Solutions, we believe that financial freedom
                isn't just a goal—it's your right. Whether you're just starting
                your investment journey or planning for long-term wealth, we're
                here to guide you every step of the way.
              </p>
              <br />
              <p className="about-para">
                With a passion for transparency, trust, and results, we offer
                expert-backed services that match your personal financial goals.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE + CTA */}
          <div className="col-lg-4 mb-4">

            <div className="choose-card p-4 rounded mb-4 scroll-animate slide-right">
              <h5 className="choose-title">💡 Why Choose Us?</h5>
              <ul className="choose-list mt-3">
                <li>✔ Transparent, honest advice</li>
                <li>✔ Real-time data & insights</li>
                <li>✔ Beginner to pro educational content</li>
                <li>✔ Trusted by hundreds of satisfied clients</li>
              </ul>
            </div>

            <div className="cta-box p-4 rounded scroll-animate slide-right">
              <h5>💬 Let’s Talk</h5>
              <p>Your wealth. Your goals. <strong>Our mission.</strong></p>
             
              <button
               className="btn btn-outline-primary w-100"
                onClick={() => (window.location.href = "/contact")}
              >
                📅 Book Your Free Consultation
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default About;
