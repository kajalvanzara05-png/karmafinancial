import React from "react";
import "./MarketAnalysis.css";

 function MarketAnalysis() {
  return (
    <section className="market">
          <div className="analysis-left">
          <figure className="analysis-figure">
            <img
              src="/images/analytics.png"
          alt="analytics" /* check filename in /public/images */
              className="analysis-img"
            />
          </figure>
          <div className="analysis-right">
          <h3>📊We Analyze Markets For You</h3>
          <p>
            Our team of experts stays on top of market trends and provides insights
            to help you make the best investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
export default MarketAnalysis;
