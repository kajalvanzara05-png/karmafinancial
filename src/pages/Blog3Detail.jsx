import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b3 from "../assets/b3.png"; // add blog3 image

export default function Blog3Detail() {
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

        <h1>Indian Phosphate Ltd — Can It Become a Multibagger?</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-14">11/14/2025</time>
        </p>
      </header>

      {/* Blog image */}
      <img
        src={b3}
        alt="Indian Phosphate Ltd"
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      {/* Blog content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Overview</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Business Model:</strong> Indian Phosphate Ltd (IPhL) manufactures Single Super Phosphate (SSP) fertilizer and LABSA-90% used in detergents.</li>
          <li><strong>Operations:</strong> Two SSP plants in Rajasthan producing both powder and granulated SSP.</li>
          <li><strong>Other Verticals:</strong> Also active in mining, logistics, education, and hospitality.</li>
          <li><strong>Backward Integration:</strong> LOI for Rock Phosphate mine that can reduce raw material dependency.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Financial Performance & Metrics</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Revenue (FY 2025):</strong> ₹884.03 Cr vs ₹714.87 Cr in FY 2024.</li>
          <li><strong>Net Profit (FY 2025):</strong> ₹8.69 Cr reported.</li>
          <li><strong>P/E Ratio:</strong> ~17–17.5× estimated.</li>
          <li><strong>Promoter Holding:</strong> ~72.77%.</li>
          <li><strong>ROCE / ROE:</strong> ROCE ~9.26%, ROE ~6.38%.</li>
          <li><strong>FY 23–24 Profit:</strong> About ₹1.649 Cr from continuing operations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Why Some Investors See Potential</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Essential Fertilizer Sector:</strong> Agriculture needs SSP fertilizer, especially in India.</li>
          <li><strong>Diversified Business:</strong> Fertilizer + LABSA chemicals offer revenue stability.</li>
          <li><strong>Backward Integration:</strong> Rock phosphate mine can reduce costs significantly.</li>
          <li><strong>Expansion Plans:</strong> New facility planned in Dhule, Maharashtra.</li>
          <li><strong>Reasonable Valuation:</strong> Moderate P/E leaves room for rerating.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Risks & Challenges</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Margin Pressure:</strong> Raw material price fluctuations affect profitability.</li>
          <li><strong>Moderate Return Ratios:</strong> ROCE ~9% and ROE ~6% are not strong yet.</li>
          <li><strong>Regulated Industry:</strong> Fertilizer industry depends on policy and subsidies.</li>
          <li><strong>Capex Execution Risk:</strong> Mine & plant expansion require heavy investment.</li>
          <li><strong>Microcap Volatility:</strong> Small market cap may cause liquidity issues.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: Multibagger Possibility?</h2>
        <p className="text-gray-800">
          Potential exists, but depends on execution:
          <ul className="list-disc list-inside ml-5">
            <li>Successful mine development and backward integration.</li>
            <li>Increased fertilizer & chemical production capacity.</li>
            <li>Better profitability and stronger return ratios.</li>
          </ul>
          Suitable only for investors okay with high-risk, long-term holding (5–7+ years).
        </p>

        <h3 className="font-semibold mt-4">Suggested Strategy</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Consider a small allocation (microcap exposure).</li>
          <li>Track quarterly margins, profit, and project updates.</li>
          <li>Expect volatility; avoid short-term expectations.</li>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
          Indian Phosphate could become a potential multibagger if execution is strong
          and backward integration succeeds—but the risk remains high. Invest only
          what you can hold for several years.
        </p>
      </footer>
    </article>
  );
}
