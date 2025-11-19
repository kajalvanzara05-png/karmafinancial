import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b5 from "../assets/b5.png"; // Add your blog5 image

export default function Blog5Detail() {
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
        <h1>Chandni Machines Ltd — Is This a Multibagger in the Making?</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-13">11/13/2025</time>
        </p>
      </header>

      {/* Blog image */}
      <img
        src={b5}
        alt="Chandni Machines Ltd"
        className="blog-detail-img"
        style={{height:"200px" }}
      />

      {/* Blog content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Overview</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Company:</strong> Chandni Machines Ltd, based in Mumbai, incorporated on 12 April 2016 and listed on BSE (Code: 542627).</li>
          <li><strong>Business Model:</strong> Imports used but in-condition injection-molding machines, machine tools & material-handling equipment, and provides servicing.</li>
          <li><strong>Operations:</strong> Serves multiple industries including automobiles, textiles, and more.</li>
          <li><strong>Financials (FY2022):</strong> Revenue of approx ₹149.27 crore, paid-up capital about ₹3.23 crore.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Key Metrics & Recent Performance</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Share Price:</strong> ~₹115.88 as of 12 Nov 2025.</li>
          <li><strong>52-week Range:</strong> Low ~₹31 / High ~₹115.88.</li>
          <li><strong>P/E Ratio:</strong> ~28–30×, <strong>P/B:</strong> ~3.4×.</li>
          <li><strong>ROE:</strong> ~15%, <strong>ROCE:</strong> ~21% (respectable for small company).</li>
          <li><strong>Recent Quarter (Q1 FY2025):</strong> Sales down ~58.41% YoY, net profit down ~22.68%.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Why It Could Have Multibagger Potential</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Low Base & Small Market Cap:</strong> If growth sustains, upside may be large.</li>
          <li><strong>Niche Model:</strong> Serving used machinery + service needs across multiple sectors.</li>
          <li><strong>Efficiency Metrics:</strong> ROCE 21% and ROE 15% show good capital allocation.</li>
          <li><strong>Strong Stock Momentum:</strong> From ~₹31 to ~₹115 in under one year.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Why You Should Be Cautious</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Weak Recent Quarter:</strong> Sharp sales decline raises concerns.</li>
          <li><strong>Valuation Risk:</strong> ~28× P/E is steep for a small-risk business.</li>
          <li><strong>Industry Risks:</strong> Demand volatility, global import dependency, competition.</li>
          <li><strong>Liquidity Concerns:</strong> Small-cap stocks can be highly volatile.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: What to Watch</h2>
        <p className="text-gray-800">Key factors to observe for long-term potential:</p>
        <ul className="list-disc list-inside ml-5 text-gray-800">
          <li>Recovery in quarterly sales & profit margins.</li>
          <li>Expansion into new markets or export opportunities.</li>
          <li>Strong promoter commitment and smart capital allocation.</li>
          <li>Improved liquidity and lower exit risk.</li>
          <li>Valuation sustainability with business improvement.</li>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">📌 Conclusion</p>
        <p className="mb-4">
          Chandni Machines Ltd offers interesting potential for investors willing to take
          risks in a small-cap, niche industrial segment. It has some key ingredients of
          a long-term multibagger candidate, but risks remain significant and recent
          performance has shown weakness.
        </p>
        <p>
          If investing, think long-term (5–10 years), expect volatility, and keep it a
          small part of a diversified portfolio.
        </p>
      </footer>
    </article>
  );
}