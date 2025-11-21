import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b2 from "../assets/b2.png"; // add blog2 image

export default function Blog2Detail() {
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
        src={b2}
        alt="Ramsons Projects Ltd"
        className="blog-detail-img"
      />

      {/* Blog content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏢 Company Overview</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Business Model:</strong>Ramsons Projects Ltd is an NBFC (Non-Banking Financial Company), providing services like personal loans and corporate financing. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://ramsonsprojects.com">ramsonsprojects.com</a>)

 </li>
          <li><strong>Industry:</strong>  Financial services — NBFCs are an important part of the credit ecosystem in India. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/ramsons-projects-ltd-share-price?utm_source=chatgpt.com">ICICI Direct</a>)</li>
          <li><strong>Promoter / Background:</strong>The company is part of the larger Ramsons Group, which has other businesses in steel and real estate. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://ldccbank.com">ldccbank.com</a>) </li>
          <li><strong>Recent Price Movement:</strong>According to Business Standard, the share price has been very volatile and recently hit high levels. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.business-standard.com/markets/ramsons-projects-ltd-share-price-5236.html?utm_source=chatgpt.com">Business Standard</a>)</li>
        </ul>
      </section>
    <hr/>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Key Financials & Metrics</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>EPS (Trailing):</strong> ~ 9.02 ₹ according to Moneycontrol. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.moneycontrol.com/financials/ramsonsprojects/ratiosVI/RP23?utm_source=chatgpt.com">Moneycontrol</a>)</li>
          <li><strong>Book Value / Share:</strong> ~₹44.20 according to Moneycontrol data. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.moneycontrol.com/financials/ramsonsprojects/ratiosVI/RP23?utm_source=chatgpt.com">Moneycontrol</a>)

</li>
          <li><strong>ROE / ROCE:</strong> According to ICICIdirect, ROCE ~14.99% and ROE ~14.85% as per their summary of the business. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.icicidirect.com/stocks/ramsons-projects-ltd-share-price?utm_source=chatgpt.com">ICICI Direct</a>)

</li>
          <li><strong>Annual Performance:</strong> From the annual report, Ramsons had a small loss in 2022-23 of ₹5.30 lakh. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://ramsonsprojects.com">ramsonsprojects.com</a>) </li>
          <li><strong>Revenue from Operations:</strong>Very small reported operational income according to its consolidated P&L (Moneycontrol). (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.moneycontrol.com/financials/ramsonsprojects/consolidated-profit-lossVI/RP23?utm_source=chatgpt.com">Moneycontrol</a>) </li>
        </ul>
      </section>
    <hr/>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Why Some Investors Might See Potential (Multibagger Case)</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Strong Recent Price Momentum:</strong>The stock has seen significant buying activity. MarketsMojo reports a 299%+ annual gain at some point, making it a microcap catching strong interest. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.marketsmojo.com/news/stocks-in-action/ramsons-projects-ltd-surges-29912-yearly-gains-7753-over-month-amid-market-decline-3172669?utm_source=chatgpt.com">Markets Mojo</a>)</li>
          <li><strong>NBFC Exposure:</strong>As an NBFC, Ramsons Projects can benefit from financial inclusion and credit demand growth. </li>
          <li><strong>Promoter Strength / Group Synergy:</strong> Being part of the Ramsons Group potentially gives it access to capital, business network, and group synergies.</li>
          <li><strong>Relatively Low Valuation Metric:</strong> Its P/E is modest according to some sources. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.business-standard.com/markets/ramsons-projects-ltd-share-price-5236.html?utm_source=chatgpt.com">Business Standard</a>)</li>
          <li><strong>Clean Balance Sheet:</strong> According to BlinkX data, interest cost is very low → possibly low leverage. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://blinkx.in/stocks/ramsons-projects-ltd-financials?utm_source=chatgpt.com">BlinkX</a>)</li>
        </ul>
      </section>
    <hr/>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Key Risks & Challenges to Consider</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li><strong>Highly Volatile / Microcap Risk:</strong>Such small NBFCs can be very volatile and may have limited liquidity, making entry and exit risky. .</li>
          <li><strong>Business Risk:</strong> NBFCs carry credit risk. If Ramsons Projects does not manage its loan book properly, defaults may hit profitability.

</li>
          <li><strong>Financial Performance Uncertain:</strong> While there’s good momentum, operational revenue is reported as very low in some sources, raising questions on the sustainability of core business. (<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.moneycontrol.com/financials/ramsonsprojects/consolidated-profit-lossVI/RP23?utm_source=chatgpt.com">Moneycontrol</a>)</li>
          <li><strong>Profitability Fluctuations:</strong>With a small past loss (per its FY23 annual report), the consistency of earnings is a concern. (<a target="_blank" rel="noopener noreferrer nofollow" href="http://ramsonsprojects.com">ramsonsprojects.com</a>)</li>
          <li><strong>Dependence on Macro Credit Conditions:</strong> As with many NBFCs, its future depends heavily on macroeconomic credit demand, interest rates, and lending environment liquidity. </li>
        </ul>
      </section><hr/>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 My View: Is It a Potential Multibagger?</h2>
        <p className="text-gray-800">
          Yes, there is potential, but only if things go very well:
          <ul className="list-disc list-inside ml-5">
           <li >If the NBFC business scales up.</li>
           <li >If the loan book grows with quality.</li>
           <li >If management continues to leverage the Ramsons Group network.</li>
          </ul>
        
        </p>
        <ul>
          <p>  But it’s not a “sure multibagger” —yet.</p>
          <li>The financials are modest and risky.</li>
         <li>the company is small, so any negative surprise could hurt. </li>
        <li>it’s suitable only for investors who are okay with high risk + high reward and can hold for at least 5+ years.</li>
        </ul>

        <p className="font-semibold mt-4">Suggested Strategy (if considering):</p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Allocate a small portion of your portfolio.</li>
          <li>Keep a close watch on quarterly financials.</li>
          <li>Be ready for volatility; expect non-linear growth.</li>
        </ul>
      </section>
<hr/>
      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
         Ramsons Projects Ltd could be one of those if-discsiplined-and-lucky microcap bets that multiplies several times — but it’s not a low-risk multibagger play.
If you believe in their NBFC expansion and the backing of the group, there might be opportunity.
But only invest what you can afford to keep aside for a few years and watch carefully.
        </p>
      </footer>
    </article>
  );
}
