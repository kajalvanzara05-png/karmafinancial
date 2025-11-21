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
        style={{ width: "100%", height: "auto" }}
      />

      {/* Company Snapshot */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Snapshot</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <p>Panth Infinity Ltd (formerly Synergy Bizcon Ltd) is incorporated in 1993 and listed on the BSE. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.bseindia.com/xml-data/corpfiling/AttachHis/a4800de8-8ecd-472b-93d0-057b4a84eb16.pdf?utm_source=chatgpt.com">BSE India</a>)</p>
          <p>According to its website, it has moved from diamond & precious-stone trading into digital business services, e-commerce & brand-support platforms. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://panthinfi.com">panthinfi.com</a>)</p>
          <strong>Recent facts:</strong>
          <li>In Q2 September 2025, the company reported net sales of ₹145.59 crore, up ~8,750% year-on-year (from ~₹1.65 crore in Sep ’24) and net profit ₹7.65 crore (vs ₹0.32 crore a year ago). (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.moneycontrol.com/news/business/earnings/panth-infinity-standalone-september-2025-net-sales-at-rs-145-59-crore-up-8750-66-y-o-y-13666467.html/amp?utm_source=chatgpt.com">Moneycontrol</a>)</li>
          <li>Current market cap is very small — ~₹23-25 crore. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://economictimes.indiatimes.com/panth-infinity-ltd/stocks/companyid-5469.cms?utm_source=chatgpt.com">The Economic Times</a>)</li>
        </ul>
      </section><hr />


      {/* Positive Signals */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ What Are the Positive Signals?</h2>
        <ol className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Strong recent growth numbers:</strong>The huge jump in sales and profit is a strong indicator that something significant has changed.</li>
          <li><strong>Small base + low market cap:</strong> Because the company is small, the potential upside (if business scales) could be large — one of the conditions for a multibagger.</li>
          <li><strong>Pivoting business model:</strong> Moving to digital services/e-commerce could open up new growth avenues.</li>
        </ol>
      </section><hr/>

      {/* Risks & Red Flags */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Risks & Red Flags</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Tiny Market Cap:</strong> Low liquidity may lead to extreme price volatility.</li>
          <li><strong>Growth Sustainability:</strong> Extremely high growth is often hard to maintain.</li>
          <li><strong>Recent Pivot:</strong>  Limited proven track record in the new digital business model.</li>
          <li><strong>High Risk-Reward:</strong> Many microcaps show promise but fail to execute sustained growth.</li>
        </ul>
      </section><hr />

      {/* My View */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: What to Watch If You’re Considering It</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <p>If you want to keep Panth Infinity on your radar for multibagger potential, monitor these key metrics:</p>
          <li>Are quarterly sales & profits continuing the strong growth trend (especially in the digital/e-commerce segment)?</li>
          <li>Does the company expand its business into scalable, high-growth markets (beyond current niche)?</li>
          <li>Have debt levels, promoter shareholding, and governance improved/stabilized?</li>
          <li>Does the market start recognizing the business shift (reflected in price/volume)?</li>
          <li>Is liquidity improving (so that investors can enter/exit without large slippage)?</li>
        </ul>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
          Panth Infinity exhibits some ingredients of a possible multibagger: a small base, visible recent growth and a pivot into higher-growth business lines.
          However — the “possible” is important. Until the growth is sustained, business model proven and risk mitigated, it remains high risk/high potential rather than a sure “multibagger”.

        </p>
        <p className="mb-2">
          If you decide to invest, think long term (5-10 years), keep the size modest, and ensure it’s a small part of a diversified portfolio.
        </p>
      </footer>
    </article>
  );
}