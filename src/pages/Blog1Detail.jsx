import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b1 from "../assets/b1.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button
          onClick={() => navigate("/blogs")}
          className="back-btn"
        >
          ← Back to Blog
        </button>

        <h1>Ramsons Projects Ltd — Can It Become a Multibagger?</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-15">11/15/2025</time>
        </p>
      </header>

      {/* Blog image */}
      <img
        src={b1}
        alt="Ramsons Projects Ltd"
        className="blog-detail-img"
      />

      {/* Blog content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Overview</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Business Model:</strong> Ramsons Projects Ltd is an NBFC (Non-Banking Financial Company), providing services like personal loans and corporate financing.</li>
          <li><strong>Industry:</strong> Financial services — NBFCs are part of India’s credit ecosystem.</li>
          <li><strong>Promoter / Background:</strong> Part of Ramsons Group, which has other businesses in steel and real estate.</li>
          <li><strong>Recent Price Movement:</strong> Share price has been volatile and recently hit high levels.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Key Financials & Metrics</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>EPS (Trailing):</strong> ~9.02 ₹</li>
          <li><strong>Book Value / Share:</strong> ~₹44.20</li>
          <li><strong>ROE / ROCE:</strong> ROCE ~14.99%, ROE ~14.85%</li>
          <li><strong>Annual Performance:</strong> Small loss in 2022-23 of ₹5.30 lakh</li>
          <li><strong>Revenue from Operations:</strong> Very small reported operational income</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Why Some Investors Might See Potential</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Strong Recent Price Momentum:</strong> Significant buying activity; 299%+ annual gain at some point.</li>
          <li><strong>NBFC Exposure:</strong> Can benefit from financial inclusion and credit demand growth.</li>
          <li><strong>Promoter Strength / Group Synergy:</strong> Access to capital, network, and group synergies.</li>
          <li><strong>Relatively Low Valuation Metric:</strong> Modest P/E ratio.</li>
          <li><strong>Clean Balance Sheet:</strong> Low interest cost, possibly low leverage.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Key Risks & Challenges</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Highly Volatile / Microcap Risk:</strong> Small NBFCs can be very volatile with limited liquidity.</li>
          <li><strong>Business Risk:</strong> Credit risk from loan book management.</li>
          <li><strong>Financial Performance Uncertain:</strong> Low operational revenue raises sustainability questions.</li>
          <li><strong>Profitability Fluctuations:</strong> Past small loss, inconsistent earnings.</li>
          <li><strong>Dependence on Macro Credit Conditions:</strong> Interest rates and credit environment affect performance.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: Is It a Potential Multibagger?</h2>
        <p className="text-gray-800">
          Yes, there is potential, but only if things go very well:
          <ul className="list-disc list-inside ml-5">
            <li>NBFC business scales up.</li>
            <li>Loan book grows with quality.</li>
            <li>Management leverages the Ramsons Group network.</li>
          </ul>
          But it’s not a “sure multibagger” — financials are modest and risky.
        </p>

        <h3 className="font-semibold mt-4">Suggested Strategy</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Allocate a small portion of your portfolio.</li>
          <li>Keep a close watch on quarterly financials.</li>
          <li>Be ready for volatility; expect non-linear growth.</li>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
          Ramsons Projects Ltd could be a disciplined-and-lucky microcap bet, but it’s not low-risk. Only invest what you can afford to keep aside for a few years.
        </p>
      </footer>
    </article>
  );
}
