import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b9 from "../assets/b9.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button onClick={() => navigate("/blogs")} className="back-btn">
          ← Back to Blog
        </button>

        <h1>How to Start Investing in the Share Market</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-07">11/7/2025</time>
        </p>
      </header>
        <img
        src={b9}
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      <section className="mb-6">
        <p>
          Aaj kal har jagah ek hi baat hoti hai “Share market me paisa lagao, returns kamao!” 
          Lekin jab koi middle-class insaan sochta hai shuru karne ka, to pehla sawal aata hai:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>“Kahan se start karun?”</li>
          <li>“Safe hai kya?”</li>
          <li>“Kisi broker ke bina kar sakta hu?”</li>
        </ul>
        <p>To chalo, aaj hum simple language me samjhte hain ki share market me investment kaise start karein — bina confusion aur bina fear ke.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Understand What Is Share Market</h2>
        <p>
          Share market wo jagah hai jahan companies apna ownership ka chhota hissa (share) public ko deti hain.
          Jab aap koi company ka share kharidte ho, to aap us company ke chhote malik ban jaate ho.
        </p>
        <p>
          For example: Agar aap Tata Motors ka 1 share kharidte ho, to aap Tata Motors ke ek tiny shareholder ban jaate ho.
          Company profit karti hai to aapko bhi fayda milta hai — share price badhne se ya dividend ke form me.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Clear Your Basics</h2>
        <ul className="list-disc list-inside ml-5">
          <li><strong>Equity:</strong> Company ka ownership (share)</li>
          <li><strong>Stock Exchange:</strong> Jahan shares buy/sell hote hain (like NSE, BSE)</li>
          <li><strong>Demat Account:</strong> Jahan aapke shares digitally store hote hain</li>
          <li><strong>Broker:</strong> Platform jahan se aap trading/investing karte ho (like Zerodha, Groww, AngelOne)</li>
        </ul>
        <p>Without a Demat + Trading account, you cannot buy shares.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: Open Your Demat & Trading Account</h2>
        <p>
          This is your entry gate to the stock market. Aap online 10 minutes me account khol sakte ho.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>PAN card</li>
          <li>Aadhaar card</li>
          <li>Bank account</li>
          <li>Selfie and signature</li>
        </ul>
        <p>Once verified, your account gets activated within 24 hours.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Start Small and Learn</h2>
        <p>Don’t try to become rich overnight. Start with ₹500–₹1000 — bas seekhne ke liye.</p>
        <p>
          Pick strong companies that you already know — like HDFC Bank, ITC, Infosys, or Reliance.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Rule No.1: Invest in companies whose products you use or understand.</li>
          <li>Rule No.2: Don’t follow rumors or tips — follow logic and charts.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Choose Between Trading and Investing</h2>
        <table className="info-table border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Duration</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Trading</td>
              <td className="border border-gray-300 p-2">Short-term</td>
              <td className="border border-gray-300 p-2">Buy/sell daily or weekly for profit</td>
              <td className="border border-gray-300 p-2">High</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Investing</td>
              <td className="border border-gray-300 p-2">Long-term</td>
              <td className="border border-gray-300 p-2">Buy strong companies & hold for years</td>
              <td className="border border-gray-300 p-2">Low</td>
            </tr>
          </tbody>
        </table>
        <p>If you’re a beginner or salaried person, start with long-term investing — it’s safer and more rewarding.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Start With SIP in Stocks or Mutual Funds</h2>
        <p>
          If you don’t want to track daily ups and downs — start a Stock SIP or Mutual Fund SIP.
          Every month fixed amount invest hota rahega automatically.
        </p>
        <p>
          Example: Invest ₹2000/month in Nifty 50 Index Fund for 10 years → ₹4.6 lakh (12% return).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 7: Learn Continuously</h2>
        <p>Share market me knowledge sabse bada weapon hai. Seekho har din:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Company ka balance sheet kaise padhe</li>
          <li>Chart patterns kya hote hain</li>
          <li>Economic news ka impact kaise samjhe</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 8: Avoid These Common Mistakes</h2>
        <ul className="list-disc list-inside ml-5">
          <li>❌ Don’t invest all your money at once</li>
          <li>❌ Don’t panic when the market falls</li>
          <li>❌ Don’t buy unknown penny stocks for “quick profit”</li>
          <li>✅ Always research before investing</li>
          <li>✅ Think long-term</li>
        </ul>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2>Conclusion</h2>
        <p>Investment ka main rule simple hai — “Start early, start small, but start now.”</p>
        <p>
          Aaj ₹500 se start karoge to kal wo ₹5 lakh ban sakta hai — sirf patience aur discipline ke saath.
        </p>
        <p>Middle-class families ke liye share market ek golden opportunity hai — bas dar ko door karo aur learning ke saath grow karo.</p>
        <p>🔗 My Recommended Broker: Open Your Free Demat & Trading Account</p>
      </footer>
    </article>
  );
}
