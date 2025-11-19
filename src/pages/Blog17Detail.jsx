import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b17 from "../assets/b17.png"; // replace with actual image if needed

export default function BlogGrowwMultibagger() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blog
      </button>

      {/* Title */}
      <h1>🚀 Billionbrains Garage Ventures Ltd (Groww) — Can It Become a Multibagger?</h1>

      {/* Date */}
      <p className="blog-date">
        Published on <time dateTime="2025-11-17">11/17/2025</time>
      </p>

      {/* Image */}
      <img
        src={b17}
        className="blog-detail-img"
        style={{ height: "auto", width: "100%" }}
      />

      {/* Company Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Company Overview</h2>

        <p>
          <strong>Business Model:</strong> Billionbrains Garage Ventures Ltd is the
          parent company of Groww, a digital investment platform. (Arihant Capital)
        </p>

        <p className="mt-2">
          <strong>What It Does:</strong> Through Groww, they offer stock broking,
          derivatives, mutual funds, bonds, margin trading facility (MTF), and personal
          loans. (Bajaj Broking)
        </p>

        <p className="mt-2">
          <strong>IPO Story:</strong> IPO size ~₹6,632.3 crore, price band ₹95–₹100 per
          share. (Multibagg AI)
        </p>

        <p className="mt-2">
          <strong>Financial Scale:</strong> Revenue rose from ~₹2,609 crore (FY24) →
          ~₹3,901 crore (FY25). (Trade Brains)
        </p>
      </section>

      {/* Financials */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">📊 Key Financials & Metrics</h2>

        <ul className="list-disc ml-5">
          <li>
            <strong>Revenue (FY25):</strong> ~₹39,017 million. (India Infoline)
          </li>
          <li>
            <strong>Profit:</strong> FY25 shows positive PAT after earlier losses.
            (Trade Brains)
          </li>
          <li>
            <strong>Adjusted EBITDA Margin:</strong> 59.11% per IPO filing.
            (India Infoline)
          </li>
          <li>
            <strong>P/E:</strong> ~50.3× (Screener)
          </li>
          <li>
            <strong>Business Strength:</strong> Tech-first model via Groww, per ICRA.
          </li>
        </ul>
      </section>

      {/* Why Multibagger */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">✅ Why It Could Be a Multibagger</h2>

        <h4 className="font-semibold mt-2">Massive Digital Investing Tailwind</h4>
        <p>
          Groww is riding India’s retail investing boom, gaining huge new users every
          year. (India Infoline)
        </p>

        <h4 className="font-semibold mt-3">Strong Monetization & Product Diversification</h4>
        <p>
          Groww is expanding into loans, MTF, and more revenue streams. (Trade Brains)
        </p>

        <h4 className="font-semibold mt-3">Efficient Use of Funds</h4>
        <p>
          IPO proceeds are for cloud infrastructure, brand building, and lending/MTF
          expansion. (Trade Brains)
        </p>

        <h4 className="font-semibold mt-3">User Scale Advantage</h4>
        <p>
          Groww has strong brand dominance in retail investing. (Arihant Capital)
        </p>

        <h4 className="font-semibold mt-3">Backed by Big Investors</h4>
        <p>
          Strong institutional backing improves execution potential. (Trade Brains)
        </p>
      </section>

      {/* Risks */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">⚠️ Key Risks & Challenges</h2>

        <h4 className="font-semibold mt-2">High Valuation</h4>
        <p>P/E ~50× means growth must justify valuation. (Screener)</p>

        <h4 className="font-semibold mt-3">Regulatory Risk</h4>
        <p>Fintech + broking face margin rules & policy changes.</p>

        <h4 className="font-semibold mt-3">Execution Risk in New Verticals</h4>
        <p>
          Loans & MTF need strong risk management; missteps hurt profits.
        </p>

        <h4 className="font-semibold mt-3">High Competition</h4>
        <p>
          Broking & fintech space is crowded—costs may rise.
        </p>

        <h4 className="font-semibold mt-3">Tech Infrastructure Risk</h4>
        <p>
          Scaling cloud + app performance is challenging; downtime could harm growth.
        </p>
      </section>

      {/* My View */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">🧭 My View: Is It a Potential Multibagger?</h2>

        <p>
          <strong>Yes, long-term:</strong> Groww’s strong product ecosystem, user base,
          and technology-driven scaling make Billionbrains a potential multibagger.
        </p>

        <p className="mt-2">
          <strong>But high risk:</strong> Valuation and execution challenges make it
          unsuitable for ultra-conservative investors.
        </p>

        <h4 className="font-semibold mt-3">Suggested Strategy:</h4>
        <ul className="list-disc ml-5">
          <li>5–7+ year investment horizon</li>
          <li>Allocate small portion (growth/fintech bucket)</li>
          <li>Track quarterly performance of new income streams</li>
        </ul>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">❤️ Conclusion</h2>
        <p>
          Billionbrains Garage Ventures (Groww) has a powerful digital investing story.
          If growth continues and execution remains strong, it can create significant
          long-term wealth. But it requires patience and monitoring.
        </p>

        <blockquote className="italic mt-2">
          “If you believe in India’s retail-investor future and trust Groww’s
          execution — this is a long-term play worth watching.”
        </blockquote>
      </footer>

    </article>
  );
}
