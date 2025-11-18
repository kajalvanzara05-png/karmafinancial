import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import financial_Planning from "../assets/financial_Planning.jpg";
import Investment_Advisory from "../assets/Investment_Advisory.jpg";
import Insurance_Coverage from "../assets/Insurance_Coverage.jpg";
import Mutual_Funds from "../assets/Mutual_Funds.png";


function Services() {
  const navigate = useNavigate();

  const items = [
  { img: financial_Planning, title: "Financial Planning" },
  { img: Investment_Advisory, title: "Investment Advisory" },
  { img: Insurance_Coverage, title: "Insurance Coverage" },
  { img: Mutual_Funds, title: "Mutual Funds" },
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
            <div className="service-img">
              <img src={item.img} alt={item.title} />
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
