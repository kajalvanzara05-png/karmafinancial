import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const text = "Welcome to KarmaFinancial";
  const [letters, setLetters] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  const homeRef = useRef(null);

  // Slider Images
  const images = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
    "/images/home5.jpg"
  ];

  useEffect(() => setLetters(text.split("")), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const lettersEl = entry.target.querySelectorAll(".rs-letter");
          const fadeEls = entry.target.querySelectorAll(".fade-in");

          if (entry.isIntersecting) {
            lettersEl.forEach((letter, i) => {
              letter.style.animation = `rsFadeIn 0.8s forwards`;
              letter.style.animationDelay = `${i * 0.08}s`;
            });

            fadeEls.forEach((el, i) => {
              el.style.animation = `fadeInUp 0.8s forwards`;
              el.style.animationDelay = `${i * 0.1 + 0.5}s`;
            });
          } else {
            lettersEl.forEach((letter) => (letter.style.animation = "none"));
            fadeEls.forEach((el) => (el.style.animation = "none"));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => homeRef.current && observer.unobserve(homeRef.current);
  }, [letters]);

  return (
    <section
      ref={homeRef}
      className="home d-flex flex-column justify-content-center align-items-center text-center text-white position-relative container-fluid"
      style={{
        minHeight: "80vh",

        // ⭐⭐ IMAGE DOWN OFFSET (ONLY CHANGE ⭐⭐)
        marginTop: "30px",

        backgroundImage: `linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)),
        url(${images[imgIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        padding: "120px 20px",
        overflow: "hidden",
      }}
    >
      {/* Left Button */}
      <button
        className="slider-btn left"
        onClick={() =>
          setImgIndex((imgIndex - 1 + images.length) % images.length)
        }
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        className="slider-btn right"
        onClick={() => setImgIndex((imgIndex + 1) % images.length)}
      >
        ›
      </button>

      <div className="row w-100 justify-content-center">
        <div className="col-md-10 col-lg-8">
          <h2
            className="mb-4 fw-bold display-4 underline-title"
            style={{
              letterSpacing: "1px",
              textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
            }}
          >
            {letters.map((char, i) => (
              <span key={i} className="rs-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          {letters.length > 0 && (
            <>
              <p
                className="fade-in lead mx-auto mb-4"
                style={{ maxWidth: "700px", color: "#e0e0e0" }}
              >
                We help you grow your wealth through smart financial planning,
                investment advisory, insurance coverage, and mutual funds.
              </p>

              <button
                className="btn btn-primary btn-lg fade-in rounded-pill shadow px-4 py-3 home-btn"
                onClick={() => (window.location.href = "/contact")}
              >
                🚀 Get in Touch
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
