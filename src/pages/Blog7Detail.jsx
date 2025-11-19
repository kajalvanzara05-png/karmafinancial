import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b7 from "../assets/b7.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button onClick={() => navigate("/blogs")} className="back-btn">
          ← Back to Blog
        </button>

        <h1>How to Create a Perfect Stock Portfolio for Long-Term Wealth</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-10">11/10/2025</time>
        </p>
      </header>
       <img
        src={b7}
        className="blog-detail-img"
      />

      {/* Blog content */}
      <section className="mb-6">
        <p>Namaste doston 👋</p>
        <p>
          Aaj hum ek aise topic pe baat karne wale hain jisse aapka financial
          future puri tarah badal sakta hai — “How to Create a Perfect Stock
          Portfolio.”
        </p>
        <p>
          Dekho, stock market me paisa kamaana sirf “sahi stock chunna” nahi
          hota… balki sahi portfolio banana bhi utna hi important hai.
        </p>
        <p>
          Kyunki agar aapke portfolio me balance nahi hai, to ek galat stock pura
          return khatam kar sakta hai.
        </p>
        <p>
          Chalo, aaj step-by-step samajhte hain — ek middle-class investor ka
          ideal portfolio kaisa hona chahiye.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Understand What a Portfolio Is</h2>
        <p>Portfolio ka matlab hai — aapke saare investments ka collection.</p>
        <p>
          Matlab, agar aapke paas 5–6 alag-alag company ke shares hain, ye sab
          milke aapka stock portfolio kehlata hai.
        </p>
        <p>A good portfolio should be:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Balanced ✅</li>
          <li>Diversified ✅</li>
          <li>Long-term focused ✅</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Decide Your Investment Goal</h2>
        <p>Sabse pehle apna goal decide karo. Aap kis purpose ke liye invest kar rahe ho?</p>
        <ul className="list-disc list-inside ml-5">
          <li>📚 Child education ke liye?</li>
          <li>🏠 Ghar kharidne ke liye?</li>
          <li>👴 Retirement ke liye?</li>
          <li>💰 Wealth creation for long term?</li>
        </ul>
        <p>Goal clear hone ke baad hi aap decide kar paoge:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Kitna invest karna hai</li>
          <li>Kis type ke stock me paisa lagana hai</li>
          <li>Kitne saal tak hold karna hai</li>
        </ul>
        <p>👉 Short-term goal = safer stocks<br />👉 Long-term goal = growth stocks</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: Asset Allocation – The Secret of Stability</h2>
        <p>Aapka portfolio ek thali ki tarah hona chahiye — sab cheez ka thoda-thoda hona zaroori hai.</p>
        <table className="info-table border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Asset Type</th>
              <th className="border border-gray-300 p-2">Percentage</th>
              <th className="border border-gray-300 p-2">Example Stocks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Large Cap (Safe & Stable)</td>
              <td className="border border-gray-300 p-2">40%</td>
              <td className="border border-gray-300 p-2">HDFC Bank, Infosys, ITC</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Mid Cap (Growth Stocks)</td>
              <td className="border border-gray-300 p-2">30%</td>
              <td className="border border-gray-300 p-2">Tata Elxsi, Tube Investments, Polycab</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Small Cap (High Risk–High Return)</td>
              <td className="border border-gray-300 p-2">20%</td>
              <td className="border border-gray-300 p-2">MapmyIndia, IIFL Securities</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Cash or Gold</td>
              <td className="border border-gray-300 p-2">10%</td>
              <td className="border border-gray-300 p-2">Backup for market dips</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Diversify Across Sectors</h2>
        <p>Kabhi bhi ek sector me pura paisa mat lagao. Invest across 5–6 sectors:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Banking & Finance</li>
          <li>FMCG</li>
          <li>IT</li>
          <li>Pharma</li>
          <li>Manufacturing / Infra</li>
          <li>Energy / Auto</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Pick Quality Stocks Only</h2>
        <ul className="list-disc list-inside ml-5">
          <li>Consistent profit growth 📊</li>
          <li>Low debt company 💪</li>
          <li>Promoter holding &gt; 50% 🤝</li>
          <li>Positive cash flow 💰</li>
          <li>Good management reputation 🧑‍💼</li>
        </ul>
        <p>Examples: HDFC Bank, ITC, Infosys, Asian Paints, Tata Motors, Divi’s Labs</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Review & Rebalance Every 6 Months</h2>
        <p>
          Check performance, remove weak stocks, add new potential companies, and adjust allocation based on market trend.
        </p>
        <p>
          Example: Agar ek mid-cap stock grow hoke large-cap ban gaya, to uska exposure kam karke naye growth stock add karo.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 7: Be Patient and Consistent</h2>
        <p>
          Wealth creation koi “overnight process” nahi hoti. Time + discipline = long-term wealth.
        </p>
        <p>
          Example: ₹5,000/month SIP for 15 years → ₹25+ lakh possible<br />
          ₹10,000/month for 20 years → ₹1 crore+ potential
        </p>
        <p>Patience + Discipline = Freedom 💸</p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2>Conclusion</h2>
        <p>
          Perfect portfolio koi magic nahi hai — wo aapke clear goal, research, aur patience ka result hota hai.
        </p>
        <p>
          Agar aap regular investment karte ho, stocks ko samajh ke choose karte ho, aur diversification maintain rakhte ho, to ek middle-class investor bhi crorepati ban sakta hai.
        </p>
        <p>“Don’t look for a perfect stock. Build a perfect portfolio.” 💼</p>
      </footer>
    </article>
  );
}
