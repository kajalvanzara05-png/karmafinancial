import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Services.css";
import { useNavigate } from "react-router-dom";


const serviceDetails = {
  1: {
    title: "Intraday & Swing Trade",
    detail:
      "We provide high-quality intraday and swing trade setups with precise buy–sell levels, stop-loss, and risk management. Our strategies help traders increase accuracy and profitability.",
  },
  2: {
    title: "Portfolio Restructuring",
    detail:
      "Improve your portfolio performance by reallocating assets based on risk profile, market conditions, and future goals.",
  },
  3: {
    title: "Multibagger Stock Picks",
    detail:
      "We research fundamentally strong companies with long-term growth potential to help you build wealth over time.",
  },
  4: {
    title: "Investment Research",
    detail:
      "We provide deep fundamental and technical research, sector analysis, market reports, and stock insights.",
  },
  5: {
    title: "Algo Trading Setup",
    detail:
      "Get your automated trading strategy fully built, backtested, and deployed with zero manual effort.",
  },
  6: {
    title: "Tax Planning & Filing",
    detail:
      "Complete tax-saving planning, deductions, filing ITR, income proof organization, and compliance guidance.",
  },
  7: {
    title: "Mutual Fund & SIP",
    detail:
      "We create custom SIP strategies for long-term wealth creation with optimized returns and minimum risk.",
  },
  8: {
    title: "Insurance Advisory",
    detail:
      "Health, life, term, and investment-linked insurance planning to protect your family and future.",
  },
  9: {
    title: "Retirement Planning",
    detail:
      "Plan your retirement corpus, pension flow, wealth safety, and long-term risk-adjusted returns.",
  },
  10: {
    title: "Loan Consultation",
    detail:
      "We guide you through home loans, business loans, personal loans, low-interest options, and paperwork.",
  },
  11: {
    title: "Financial Planning",
    detail:
      "A complete financial roadmap including budgeting, risk planning, investments, insurance & future goals.",
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceDetails[id];
    
    
    const navigate = useNavigate(); 

  if (!service) return <h2 className="not-found">Service Details Not Found</h2>;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/service")}>
  Back to Service
</button>


      <h1 className="details-title">{service.title}</h1>
      <p className="details-text">{service.detail}</p>
    </div>
  );
};

export default ServiceDetails;
