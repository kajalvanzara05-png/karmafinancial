import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";


import { 
  FaChartLine, FaWallet, FaLightbulb, FaFileAlt, FaRobot, 
  FaFileInvoiceDollar, FaHome, FaHeartbeat, FaUsers, FaClipboardList, FaPiggyBank 
} from "react-icons/fa";

const services = [
  { id: 1, title: "Intraday & Swing Trade", description: "Expert recommendations for short-term trades.", icon: <FaChartLine />, color: "#F79D11" },
  { id: 2, title: "Portfolio Restructuring", description: "Rebalance your portfolio for better performance.", icon: <FaWallet/>, color: "#dd2f2fff" },
  { id: 3, title: "Multibagger Stock Picks", description: "High-potential stock suggestions for long-term growth.", icon: <FaLightbulb />, color: "#3acdf5ff" },
  { id: 4, title: "Investment Research", description: "Market reports and research analysis.", icon: <FaFileAlt />, color: "#e41963ff" },
  { id: 5, title: "Algo Trading Setup", description: "Automated strategy deployment and setup help.", icon: <FaRobot/>, color: "#1DA2C1" },
  { id: 6, title: "Tax Planning & Filing", description: "Smart tax saving and ITR submission.", icon: <FaFileInvoiceDollar />, color: "#35A940" },
  { id: 7, title: "Mutual Fund & SIP", description: "Custom mutual fund & SIP investment plans.", icon: <FaPiggyBank />, color: "#d7af35ff" },
  { id: 8, title: "Insurance Advisory", description: "Health & life coverage consultation.", icon: <FaHeartbeat/>, color: "#7d106bff" },
  { id: 9, title: "Retirement Planning", description: "Plan your retirement wealth and security.", icon: <FaUsers />, color: "#5a4747ff" },
  { id: 10, title: "Loan Consultation", description: "Get guidance for home and business loans.", icon: <FaHome/>, color: "#1c246cff" },
  { id: 11, title: "Financial Planning", description: "Complete future financial roadmap planning.", icon: <FaClipboardList />, color: "#e2497eff" },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="finance-wrapper">
      <h1 className="finance-title">Our Services</h1>

      <div className="finance-grid">
        {services.map((s) => (
          <div
            key={s.id}
            className="finance-card"
            onClick={() => navigate(`/services/${s.id}`)}
          >
            {/* Full card with icon + text inside */}
            <div className="finance-body">
              <div className="finance-icon" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="finance-content">
                <h3 className="finance-text">{s.title}</h3>
                <p className="finance-description">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
