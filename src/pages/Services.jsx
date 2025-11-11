import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";


function Services() {
  const navigate = useNavigate();

  const items = [
    { icon: "💡", title: "Financial Planning" },
    { icon: "📊", title: "Investment Advisory" },
    { icon: "🛡️", title: "Insurance Coverage" },
    { icon: "👥", title: "Mutual Funds" },
  ];

  const handleServiceClick = () => {
    navigate("/Service");
  };

  return (
    <section className="services">
      <h3>Our Core Services</h3>
      <div className="service-grid">
        {items.map((item) => (
          <div className="service-card" key={item.title} onClick={handleServiceClick} style={{ cursor: "pointer" }}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>

    </section>
  );
}
export default Services;
