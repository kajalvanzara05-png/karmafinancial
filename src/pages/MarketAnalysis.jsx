import React from "react";
import { motion } from "framer-motion";
import "./MarketAnalysis.css";

function MarketAnalysis() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="container py-5"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
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
          <p className="lead">
            Our team of experts stays on top of market trends and provides insights
            to help you make the best investment decisions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default MarketAnalysis;
