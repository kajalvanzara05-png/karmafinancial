import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <h2>Welcome to KarmaFinancial</h2>
      <p>
        We help you grow your wealth through smart financial planning,
        investment advisory, insurance coverage, and mutual funds.
      </p>

      <button onClick={() => navigate("/contact")}>🚀 Get in Touch</button>
    </section>
  );
}

export default Home;
