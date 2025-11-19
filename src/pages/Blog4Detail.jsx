import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b4 from "../assets/b4.png"; // Add blog4 image

export default function Blog4Detail() {
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
        <h1>Panth Infinity Ltd — Is It a Potential Multibagger?</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-13">11/13/2025</time>
        </p>
      </header>

      {/* Blog image */}
      <img
        src={b4}
        alt="Panth Infinity Ltd"
        className="blog-detail-img"
        style={{  }}
      />

      {/* Company Snapshot */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Snapshot</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Incorporated:</strong> 1993, listed on BSE (formerly Synergy Bizcon Ltd).</li>
          <li><strong>Business Shift:</strong> From diamond & precious stone trading to digital business services, e-commerce & brand-support platforms.</li>
          <li><strong>Source:</strong> Company website (panthinfi.com).</li>
        </ul>
      </section>

      {/* Recent Facts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Recent Facts</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Q2 FY 2025 Net Sales:</strong> ₹145.59 crore (vs ~₹1.65 crore in Q2 FY 2024) — up ~8,750%.</li>
          <li><strong>Net Profit:</strong> ₹7.65 crore (vs ₹0.32 crore a year ago).</li>
          <li><strong>Market Cap:</strong> Approximately ₹23-25 crore — very small, highly volatile.</li>
          <li><strong>Sources:</strong> Moneycontrol, The Economic Times.</li>
        </ul>
      </section>

      {/* Positive Signals */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ What Are the Positive Signals?</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Strong Growth:</strong> Sharp rise in sales & profits indicates major business impact.</li>
          <li><strong>Small Base, Large Upside:</strong> Microcap companies can scale fast if execution succeeds.</li>
          <li><strong>Pivot to Digital:</strong> Digital services & e-commerce create scalable revenue potential.</li>
        </ul>
      </section>

      {/* Risks & Red Flags */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Risks & Red Flags</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Tiny Market Cap:</strong> Low liquidity may lead to extreme price volatility.</li>
          <li><strong>Growth Sustainability:</strong> Extremely high growth is often hard to maintain.</li>
          <li><strong>Recent Pivot:</strong> Limited proven track record in the new digital business model.</li>
          <li><strong>High Risk-Reward:</strong> Many microcaps show promise but fail to execute sustained growth.</li>
        </ul>
      </section>

      {/* My View */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: What to Watch If You’re Considering It</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Are quarterly sales & profits continuing the strong trend?</li>
          <li>Is the company expanding into scalable digital markets?</li>
          <li>Have debt levels, promoter shareholding & governance improved?</li>
          <li>Is the market recognizing the shift (price/volume trends)?</li>
          <li>Is liquidity improving for easier entry/exit?</li>
        </ul>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
          Panth Infinity shows some ingredients of a possible multibagger: a small base,
          rapid visible growth, and a pivot toward higher-growth digital business lines.
          However — the key word is <strong>"possible"</strong>. Until growth is sustained,
          business execution is proven, and risks reduce, it remains a high-risk/high-potential stock.
        </p>
        <p className="mb-2">
          If investing, consider a long-term view (5–10 years), keep position size small, and
          ensure it's only a part of a diversified portfolio.
        </p>
      </footer>
    </article>
  );
}