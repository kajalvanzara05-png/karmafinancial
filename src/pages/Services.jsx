import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  const items = [
    { icon: "💡", title: "Financial Planning" },      
    { icon: "📈", title: "Investment Advisory" },     // Updated (icon #1)
    { icon: "🛡️", title: "Insurance Coverage" },
    { icon: "💰", title: "Mutual Funds" },
  ];

  const handleServiceClick = () => {
    navigate("/Service");
  };

  return (
    <section className="services">
      <h3>Our Core Services</h3>

      <div className="service-grid">
        {items.map((item, index) => (
          <div className="service-card" key={index} onClick={handleServiceClick}>

            <div className="service-img icon-box">
              <span className="emoji-icon">{item.icon}</span>
              <div className="overlay"></div>
            </div>

            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
