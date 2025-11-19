import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b6 from "../assets/b6.png"; // replace with actual image

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

        <h1>How to Find Multibagger Stocks in the Indian Stock Market</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-12">11/12/2025</time>
        </p>
      </header>

      <img
        src={b6}
        alt="Multibagger Stocks"
        className="blog-detail-img"s
        style={{width:"100%",height:"auto"}}
      />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💬 Introduction</h2>
        <p className="text-gray-800">
          Every investor dreams of finding that one stock which can multiply their money — turning ₹10,000 into ₹1 lakh or even ₹5 lakh.  
          These are called Multibagger Stocks — the real wealth creators of the stock market. 💰
        </p>
        <p className="text-gray-800">
          But the big question is — How do you actually find multibagger stocks? Is there any formula or secret strategy?  
          In this blog, we’ll break it down step-by-step — how a middle-class investor can realistically find potential multibagger stocks and build wealth over time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Step 1: Understand What a Multibagger Stock Is</h2>
        <p className="text-gray-800">
          The term “Multibagger” was introduced by famous investor Peter Lynch. It simply means a stock that multiplies your investment more than once.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 ml-5">
          <li>₹100 → ₹200 = 2x (2-bagger)</li>
          <li>₹100 → ₹500 = 5x (5-bagger)</li>
          <li>₹100 → ₹1,000 = 10x (10-bagger)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📈 Step 2: Look for Companies with Strong Growth Potential</h2>
        <p className="text-gray-800">
          The first quality of a multibagger stock is growth — in business, profit, and demand. Look for companies that:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 ml-5">
          <li>Operate in a fast-growing sector (EVs, renewable energy, defence, fintech, AI, etc.)</li>
          <li>Have consistent sales and profit growth of 15–20%+</li>
          <li>Are expanding into new markets</li>
          <li>Have visionary management</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Step 3: Focus on Small and Mid-Cap Companies</h2>
        <p className="text-gray-800">
          Most multibaggers start small. Large caps are already established, so 10x returns are harder.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💰 Step 4: Focus on Strong Fundamentals</h2>
        <table className="table-auto text-gray-800 border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Factor</th>
              <th className="border border-gray-300 p-2">Ideal Value</th>
              <th className="border border-gray-300 p-2">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Revenue Growth</td>
              <td className="border border-gray-300 p-2">15–20% yearly</td>
              <td className="border border-gray-300 p-2">Shows business expansion</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Profit Growth</td>
              <td className="border border-gray-300 p-2">15–20% yearly</td>
              <td className="border border-gray-300 p-2">Indicates efficiency</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Debt-to-Equity</td>
              <td className="border border-gray-300 p-2">Below 0.5</td>
              <td className="border border-gray-300 p-2">Lower financial risk</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">ROE</td>
              <td className="border border-gray-300 p-2">Above 15%</td>
              <td className="border border-gray-300 p-2">Good use of investor money</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Promoter Holding</td>
              <td className="border border-gray-300 p-2">50%+</td>
              <td className="border border-gray-300 p-2">Promoter confidence</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧱 Step 5: Find Companies with a Competitive Edge (Moat)</h2>
        <p className="text-gray-800">
          A competitive advantage protects a company from competition.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Step 6: Strong Management = Strong Future</h2>
        <p className="text-gray-800">
          Look for transparent leadership and ethical governance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⏳ Step 7: Time + Patience = Multibagger</h2>
        <p className="text-gray-800">
          Multibaggers grow slowly but significantly over years.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚠️ Step 8: Avoid the Traps</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800 ml-5">
          <li>Avoid penny stock hype</li>
          <li>Avoid high-debt companies</li>
          <li>Avoid social media tip stocks</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📁 Step 9: Build a Diversified Multibagger Portfolio</h2>
        <p className="text-gray-800">
          Diversify across 5–8 companies and hold for 5–10 years.
        </p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4 text-gray-800">
          Finding a multibagger is not about luck — it’s about research, conviction, and patience.
        </p>
        <p className="text-gray-800">
          Invest regularly, stay consistent, and let time create wealth for you.
        </p>
        <p className="mt-2 text-gray-800 font-semibold">
          🔗 Start Your Multibagger Journey Today — Ready to start investing in potential multibaggers? Start with Angel One – Simple & Free
        </p>
      </footer>
    </article>
  );
}
