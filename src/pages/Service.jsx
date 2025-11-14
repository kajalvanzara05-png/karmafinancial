import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { useNavigate } from "react-router-dom";


import { 
  FaChartLine, FaWallet, FaLightbulb, FaFileAlt, FaRobot, 
  FaMoneyCheckAlt, FaPiggyBank, FaHeartbeat, FaShieldAlt, 
  FaHome, FaClipboardList 
} from "react-icons/fa";

const services = [
  { id: 1, title: "Intraday & Swing Trade", short: "Expert recommendations for short-term trades.", icon: <FaChartLine /> },
  { id: 2, title: "Portfolio Restructuring", short: "Rebalance your portfolio for better performance.", icon: <FaWallet /> },
  { id: 3, title: "Multibagger Stock Picks", short: "High-potential stock suggestions for long-term growth.", icon: <FaLightbulb /> },
  { id: 4, title: "Investment Research", short: "Market reports and research analysis.", icon: <FaFileAlt /> },
  { id: 5, title: "Algo Trading Setup", short: "Automated strategy deployment and setup help.", icon: <FaRobot /> },
  { id: 6, title: "Tax Planning & Filing", short: "Smart tax saving and ITR submission.", icon: <FaMoneyCheckAlt /> },
  { id: 7, title: "Mutual Fund & SIP", short: "Custom mutual fund & SIP investment plans.", icon: <FaPiggyBank /> },
  { id: 8, title: "Insurance Advisory", short: "Health & life coverage consultation.", icon: <FaHeartbeat /> },
  { id: 9, title: "Retirement Planning", short: "Plan your retirement wealth and security.", icon: <FaShieldAlt /> },
  { id: 10, title: "Loan Consultation", short: "Get guidance for home and business loans.", icon: <FaHome /> },
  { id: 11, title: "Financial Planning", short: "Complete future financial roadmap planning.", icon: <FaClipboardList /> },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {services.map((s) => (
          <Link to={`/services/${s.id}`} key={s.id} className="service-link">
            
            <div className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h2 className="service-name">{s.title}</h2>
              <p className="service-short">{s.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
