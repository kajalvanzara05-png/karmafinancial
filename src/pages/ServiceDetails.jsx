
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceDetails.css";

const servicesData = {
  1: {
    title: "Intraday & Swing Trade",
    intro: `Our Intraday & Swing Trading service provides high-accuracy buy/sell recommendations 
    designed for traders who want consistent profits with low risk.`,
    features: [
      "Daily Intraday Calls with Entry, Target & Stop-loss",
      "Swing Trades (2–10 days) based on strong breakouts",
      "1:2 or better risk-reward on every trade",
      "Volume & trend-based stock selection",
      "Positional breakout scanning",
    ],
    process: [
      "Market trend analysis",
      "Chart pattern & price action study",
      "Volume surge identification",
      "Indicator confirmation (RSI, MACD, VWAP)",
      "Trade execution & live updates",
    ],
    whoNeeds: [
      "New traders needing guidance",
      "Working professionals",
      "Active intraday & swing traders",
    ],
    result:
      "Average 3–7% intraday moves & 8–18% swing returns monthly (market dependent).",
  },

  2: {
    title: "Portfolio Restructuring",
    intro: `We analyze your entire portfolio and restructure it to improve returns, reduce risk 
    and eliminate non-performing assets.`,
    features: [
      "Portfolio health check-up",
      "Risk-based allocation strategy",
      "Sell/hold/buy recommendations",
      "Sector diversification",
      "Tax-efficient planning",
    ],
    process: [
      "Portfolio analysis",
      "Identify weak assets",
      "Remove loss-making stocks",
      "Add high-potential sectors",
      "Periodic review",
    ],
    whoNeeds: ["Investors facing losses", "Old unmanaged portfolio holders", "Long-term growth investors"],
    result: "Better CAGR returns, reduced volatility, long-term compounding improvement.",
  },

  3: {
    title: "Multibagger Stock Picks",
    intro: `We provide fundamentally strong companies capable of exponential long-term growth.`,
    features: [
      "High-growth small & mid-cap analysis",
      "Balance sheet & cashflow screening",
      "Sector rotation research",
      "Institutional buying detection",
    ],
    process: [
      "Fundamental screening",
      "Growth projection analysis",
      "Industry & economic study",
      "Management quality check",
    ],
    whoNeeds: ["Long-term investors", "Wealth creators", "Retirement planners"],
    result: "3X to 10X potential over 2–5 years (market dependent).",
  },

  4: {
    title: "Investment Research",
    intro: `We analyze industries, financials, and economic trends to give long-term investment insights.`,
    features: [
      "Fundamental analysis",
      "Quarterly results study",
      "Industry & competitor research",
      "Economic trend analysis",
      "Valuation modeling",
    ],
    whoNeeds: ["Serious investors", "Business owners", "Wealth managers"],
    result: "Informed decisions & consistent long-term compounding.",
  },

  5: {
    title: "Algo Trading Setup",
    intro: `We build automated trading systems that execute trades without emotions.`,
    features: [
      "Algo strategy development",
      "Backtesting with 10-year data",
      "TradingView + Python integration",
      "Full automation setup",
      "Risk and position sizing",
    ],
    whoNeeds: ["Busy traders", "Scalpers", "High-frequency traders"],
    result: "Emotion-free trading with consistent execution.",
  },

  6: {
    title: "Tax Planning & Filing",
    intro: `Save maximum tax legally with our professional tax planning.`,
    features: [
      "ITR filing",
      "Capital gains tax planning",
      "Investment-based tax savings",
      "Income tax documentation",
    ],
    whoNeeds: ["Salaried individuals", "Investors", "Business owners"],
    result: "Reduced tax liability & penalty-free compliance.",
  },

  7: {
    title: "Mutual Fund & SIP",
    intro: `We design smart mutual fund portfolios for long-term wealth building.`,
    features: [
      "Goal-based SIP planning",
      "Best fund selection",
      "Equity/Debt/Hybrid allocation",
      "Review updates",
    ],
    whoNeeds: ["Beginners", "Working professionals", "Long-term investors"],
    result: "Stable long-term wealth with 12–18% average returns historically.",
  },

  8: {
    title: "Insurance Advisory",
    intro: `Choose the right insurance plan for complete financial protection.`,
    features: [
      "Life insurance guidance",
      "Health policy comparison",
      "Term insurance planning",
      "Risk coverage analysis",
    ],
    whoNeeds: ["Families", "Individuals", "Business owners"],
    result: "Better security & reduced financial risk.",
  },

  9: {
    title: "Retirement Planning",
    intro: `A complete retirement plan to secure your future lifestyle.`,
    features: [
      "Retirement corpus calculation",
      "SIP + FD + MF strategy",
      "Pension & income plan",
      "Risk-free asset allocation",
    ],
    whoNeeds: ["Middle-aged individuals", "Working professionals", "Senior citizens"],
    result: "Stress-free retirement with stable income.",
  },

  10: {
    title: "Loan Consultation",
    intro: `Get the best loan options with low interest & fast approval.`,
    features: [
      "Home/Business/Personal loan support",
      "Interest rate comparison",
      "EMI planning",
      "Credit score improvement",
    ],
    whoNeeds: ["Home buyers", "Business owners", "Emergency loan seekers"],
    result: "Lower EMI burden & faster approval.",
  },

  11: {
    title: "Financial Planning",
    intro: `A complete financial roadmap for wealth creation & security.`,
    features: [
      "Goal-based planning",
      "Investment roadmap",
      "Risk management",
      "Tax saving strategy",
      "Retirement planning",
    ],
    whoNeeds: ["Families", "Professionals", "Investors"],
    result: "Financial clarity, stability, and long-term independence.",
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData[id];

  if (!service) {
    return <h2 className="text-center text-danger">Service Not Found</h2>;
  }

  return (
    <div className="details-container container">

      <h1 className="details-title">{service.title}</h1>
      <p className="details-intro">{service.intro}</p>

      <div className="row">
        <div className="col-12">
          {service.features && (
            <div className="details-section">
              <h2>✨ Key Features</h2>
              <ul>
                {service.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {service.process && (
            <div className="details-section">
              <h2>🛠 Our Process</h2>
              <ul>
                {service.process.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {service.whoNeeds && (
            <div className="details-section">
              <h2>👤 Who Needs This?</h2>
              <ul>
                {service.whoNeeds.map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="details-section">
            <h2>📈 Final Outcome</h2>
            <p>{service.result}</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="back-btn" onClick={() => navigate("/service")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
