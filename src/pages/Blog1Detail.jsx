import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b1 from "../assets/b1.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>← Back to Blog</button>

      {/* Blog Title */}
      <h1>🏢 KRBL Ltd — Can It Become a Multibagger?</h1>
      <p className="published-date">Published on 11/15/2025</p>
      <img
        src={b1}
        alt="Ramsons Projects Ltd"
        className="blog-detail-img"
        style={{ width: "100%", height: "auto" }}
      />
      {/* Company Overview */}
      <section>
        <h2>Company Overview</h2>
        <p><strong>Business:</strong> KRBL is one of India’s leading basmati rice producers and exporters (GuruFocus)</p>
        <p><strong>Key Strength:</strong> Strong global presence (exports), established brand, and good capacity for processing and packaging. (Krblrice)</p>
        <p><strong>Recent Strategy:</strong>Focus on export growth and cost efficiencies to improve margins. (Angel One)</p>
      </section>
      <hr />
      {/* Recent Financial Performance & Metrics */}
      <section>
        <h2>📊 Recent Financial Performance & Metrics</h2>
        <ul>
          <li><strong>Revenue Trend:</strong>: According to Screener, KRBL’s consolidated sales are growing. (Screener.)</li>
          <li><strong>Profit:</strong> Latest quarters reported net profit of ~₹151–154 Cr. (Screener)</li>
          <li><strong>Margins:</strong> Improved operating margin in recent quarters. (Screener)</li>
          <li><strong>Q1 FY26 Growth:</strong>As per Angel One, revenue grew 32% YoY in Q1 FY26, export revenue surged, and PAT was ₹151 Cr. (Angel One)</li>
          <li><strong>Cash & Inventory:</strong> According to its Q1 FY25 investor presentation, KRBL had significant cash balance and inventory. (Krblrice)

          </li>
          <li><strong>Return Ratios:</strong> Over the years, KRBL has shown moderate return on equity (ROE). Screener shows long-term ROE around ~15% (10-yr) but recent may be lower. (Screener.)

          </li>
          <li><strong>Guidance / Ambition:</strong> : According to Bajaj Broking, KRBL is targeting ₹6,000 Cr revenue in FY26, backed by strong export demand. (Bajaj Broking)</li>
        </ul>
      </section>
      <hr />
      {/* Why It Could Be a Multibagger */}
      <section>
        <h2>✅ Why It Could Be a Multibagger</h2>
        <ol>
          <li><strong>Export Potential:</strong> <br />KRBL is leveraging its export business strongly. Given global demand for premium basmati rice, export growth may drive future revenues. (GuruFocus)</li>
          <li><strong>Cost Efficiency:</strong> <br />With lower cost of goods sold (COGS) and operational improvements, KRBL can protect margins, especially when procurement costs are managed well. (Angel One)</li>
          <li><strong>Strong Cash Position:</strong><br /> As per its investor presentation, KRBL has a healthy cash balance, which could be used for expansion, capacity addition, or debt reduction. (Krblrice)</li>
          <li><strong>Scale-Up Opportunity:</strong> <br />If KRBL can continue to grow its packaged basmati business (domestic + international), it can scale significantly over a 5–7 years horizon.</li>
          <li><strong>Valuation Edge  (if Execution Is Right):</strong><br />The multibagger potential is tied to its ability to grow revenue, maintain margins, and scale exports. If assumptions play out, there could be a strong re-rating.</li>
        </ol>
      </section>
      <hr />

      {/* Key Risks */}
      <section>
        <h2>⚠️ Key Risks to Consider</h2>
        <ul>
          <li><strong>Commodity Risk:</strong> Rice procurement costs and raw material fluctuations can hurt margins.</li>
          <li><strong>Export Dependency:</strong>Heavy reliance on export markets; any global slowdown or trade policy risk can damage growth. </li>
          <li><strong>Inventory Risk:</strong> Large inventory (as per latest presentation) could lead to capital being blocked or risk of obsolescence. (Krblrice) </li>
          <li><strong>Profit Volatility:</strong> While recent quarters are strong, past performance shows fluctuations. (Equitymaster)</li>
          <li><strong>Governance / Execution Risk:</strong>Scaling export business requires very good management execution, and any slip can derail projections. </li>
        </ul>
      </section>
      <hr />
      {/* Author View */}
      <section>
        <h2>🧭 My View: Is KRBL a Real Multibagger?</h2>
        <ul>
          <li> <p><strong>Yes, there is potential —</strong>  KRBL has a strong business, cash strength, and real growth levers (especially exports).</p></li>
          <li><strong>But It’s Not Risk-Free</strong> This is not a “safe large-cap multibagger”; it’s more of a <strong>growth + mid-to-large export play.

          </strong></li>
          <li><p><strong>Suggested Strategy:</strong></p></li>
        </ul>


        <ul>
          <li>Use a small-to-medium allocation in your portfolio.</li>
          <li>Track quarterly performance: export growth, margins, and inventory.</li>
          <li>Be ready to hold for 5–7+ years to realize potential.</li>
        </ul>
      </section><hr />

      {/* Conclusion */}
      <section>
        <h2>❤️ Conclusion</h2>
        <p>KRBL Ltd has many ingredients to become a multibagger long-term, especially with its export-led strategy and improving cost structure. Risks are real, and success depends on execution, global demand, and consistent performance.</p>
        <p>Use it as a strategic part of a diversified growth portfolio, but don’t put all your eggs in one basket.</p>
      </section>

    </article>
  );
}
