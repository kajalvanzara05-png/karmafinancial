import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const text = "Welcome to KarmaFinancial";
  const [letters, setLetters] = useState([]);
  const homeRef = useRef(null);

  useEffect(() => setLetters(text.split("")), []);

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
            fadeEls.forEach((el) => {
              el.style.animation = "fadeInUp 0.8s forwards";
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
    return () => { if (homeRef.current) observer.unobserve(homeRef.current); };
  }, [letters]);

  return (
    <section className="home" ref={homeRef}>
      <h2>
        {letters.map((char, i) => (
          <span key={i} className="rs-letter">{char === " " ? "\u00A0" : char}</span>
        ))}
      </h2>

      {letters.length > 0 && (
        <>
          <p className="fade-in">
            We help you grow your wealth through smart financial planning,
            investment advisory, insurance coverage, and mutual funds.
          </p>
          <button className="fade-in" onClick={() => navigate("/contact")}>
            🚀 Get in Touch
          </button>
        </>
      )}
    </section>
  );
}

export default Home;
