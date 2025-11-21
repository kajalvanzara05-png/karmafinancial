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
        style={{ height: "200px" }}
      />

      {/* Blog content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Overview</h2>
        <p>Chandni Machines Ltd is an engineering goods company based in Mumbai, 
          incorporated on 12 April 2016 and listed on the BSE under the code 542627. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.thecompanycheck.com/company/chandni-machines-limited/L74999MH2016PLC279940?utm_source=chatgpt.com">The Company Check</a>)</p>
        <p>It imports used but in-condition injection-moulding machines, machine tools and material-handling equipment, and provides after-sales servicing. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://cml.net.in">cml.net.in</a>)</p>
        <p>In FY2022 it reported a revenue of around ₹149.27 cr and has a paid-up capital of about ₹3.23 cr. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.thecompanycheck.com/company/chandni-machines-limited/L74999MH2016PLC279940?utm_source=chatgpt.com">The Company Check</a>)</p>
      </section><hr/>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Key Metrics & Recent Performance</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Current share‐price (approx): ₹115.88 on 12 Nov 2025. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/chandni-machines-share-price?utm_source=chatgpt.com">ICICI Direct</a>)</li>
          <li>52-week low: ~₹31; 52-week high: ~₹115.88. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/chandni-machines-share-price?utm_source=chatgpt.com">ICICI Direct</a>)</li>
          <li> P/E ratio: ~28–30×; P/B ratio ~3.4×. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/chandni-machines-share-price?utm_source=chatgpt.com">ICICI Direct</a>)</li>
          <li>ROE ~15%; ROCE ~21%. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/chandni-machines-share-price?utm_source=chatgpt.com">ICICI Direct</a>)</li>
          <li>The company showed revenue growth(3 - yr CAGR ~10.6 %) but recent quarter saw a sharp sales decline: For Q1 Jun - 2025, sales down ~58.41 % y - o - y and net profit down 22.68 %. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.business-standard.com/markets/capital-market-news/chandni-machines-standalone-net-profit-declines-22-68-in-the-june-2025-quarter-125081200602_1.html?utm_source=chatgpt.com">Business Standard</a>)</li >
        </ul >
      </section ><hr/>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Why It Could Have Multibagger Potential</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Low base & small market cap: </strong>With a relatively small paid-up capital and scale, if the business executes well, upside may be higher.</li>
          <li><strong> Niche business model: </strong>Imports used CNC/NC machines & tools, servicing a range of industries (automobile, textile, etc) - offering a service + supply pocket. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://cml.net.in">cml.net.in</a>)</li>
          <li><strong> Improving efficiency metrics:</strong> ROCE and ROE are respectable for a small company (21% ROCE, 15% ROE) which suggest efficient capital usage.</li>
          <li><strong>Price already risen significantly: </strong>From ~₹31 to ~₹115 in less than a year gives momentum and market interest.</li>
        </ul>
      </section><hr/>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Why You Should Be Cautious</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li><strong>Recent weak quarter:</strong> The sharp sales drop in Q1 2025 is a red flag. Business is cyclical and vulnerable. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.business-standard.com/markets/capital-market-news/chandni-machines-standalone-net-profit-declines-22-68-in-the-june-2025-quarter-125081200602_1.html?utm_source=chatgpt.com">Business Standard</a>)</li>
            <li><strong> High valuation for risk:</strong> For a small-company with business risk, a 28× P/E may be on the pricey side relative to peers.</li>
            <li><strong> Industry & business model risk: </strong>Importing used machines and service business has risks – demand fluctuations, global supply, competition.</li>
            <li><strong> Liquidity & small size concerns: </strong>Small-cap stocks often have higher volatility and limited coverage which means higher risk.</li>
          </ul>
      </section><hr/>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: What to Watch if You’re Interested</h2>
        <p className="text-gray-800">If you wish to consider this stock for a multibagger potential, keep an eye on:</p>
        <ul className="list-disc list-inside ml-5 text-gray-800">
          <li>Improvement in quarterly sales & margins — especially stabilising the cyclicality.</li>
          <li>Expansion in newer segments or export markets (so business growth accelerates).</li>
          <li>Sustained promoter / management commitment and capital allocation.</li>
          <li>Market cap and liquidity improvements (so exit risk is lower).</li>
          <li>Valuation — if business improves, valuation must reflect it; else risk remains.</li>
        </ul>
      </section><hr/>


      <section>
        <h2>❤️ Conclusion</h2>
        <p>Chandni Machines Ltd offers interesting potential for an investor willing to take risk in a small-cap, niche industrial business. 
          It has some important ingredients for a long-term “multibagger”-type scenario: low base, niche opportunity, decent ROCE.</p>
        <p>However — the business risk is significant, recent performance has been shaky, and valuation is already not extremely low.</p>
        <p> If you decide to invest, think long-term (5-10 years), expect volatility, and ensure your portfolio is diversified.</p>
      </section><hr/>
    </article >
  );
}