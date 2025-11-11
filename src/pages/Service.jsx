import React from "react";
import { FaChartLine, FaWallet, FaLightbulb, FaFileAlt, FaRobot, FaFileInvoiceDollar, FaHome, FaHeartbeat, FaUsers, FaClipboardList , FaPiggyBank } from "react-icons/fa";
import "./Service.css";

const Service = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Intraday & Swing Trade",
      description: "Expert recommendations for short-term trades.",
    },
    {
      icon: <FaWallet />,
      title: "Portfolio Restructuring",
      description: "Rebalance your portfolio for better performance.",
    },
    {
      icon: <FaLightbulb />,
      title: "Multibagger Stock Picks",
      description: "High-potential stock suggestions for long-term growth.",
    },
    {
      icon: <FaFileAlt />,
      title: "Investment Research",
      description: "Market reports and research analysis.",
    },
    {
      icon: <FaRobot />,
      title: "Algo Trading Setup",
      description: "Automated strategy deployment and setup help.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Tax Planning & Filing",
      description: "Smart tax saving and ITR submission.",
    },
    {
      icon: < FaPiggyBank/>,
      title: "Mutual Fund & SIP",
      description: "Custom mutual fund & SIP investment plans.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Insurance Advisory",
      description: "Health & life coverage consultation.",
    },
    {
      icon: <FaUsers />,
      title: "Retirement Planning",
      description: "Plan your retirement wealth and security.",
    },
    {
      icon: <FaHome />,
      title: "Loan Consultation",
      description: "Get guidance for home and business loans.",
    },
    {
      icon: <FaClipboardList   />,
      title: "Financial Planning",
      description: "Complete future financial roadmap planning.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>💼 Our Services</h2>
        <p>
          At <strong>Karma Financial Solutions</strong>, we provide a wide range of
          professional financial services to help you plan, grow, and secure your wealth.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
