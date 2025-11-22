import React from "react";
import { motion } from "framer-motion";
import "./MarketAnalysis.css";

function MarketAnalysis() {
 

  return (
    <section
      className="container py-5">
      
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/images/market_analysis.png"
            alt="analytics"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right: Text */}
        <div className="col-md-6">
          <h3 className="mb-3">📊 We Analyze Markets For You</h3>
          <p className="leads">
            Our team of experts stays on top of market trends and provides insights
            to help you make the best investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MarketAnalysis;
