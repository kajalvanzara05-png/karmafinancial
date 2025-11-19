import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b12 from "../assets/b12.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button onClick={() => navigate("/blogs")} className="back-btn">
          ← Back to Blog
        </button>

        <h1>Mistakes Every Beginner Investor Should Avoid</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-06">11/6/2025</time>
        </p>
      </header>
       <img
        src={b12}
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      <section className="mb-6">
        <p>
          Let’s be honest most of us start investing without any real plan. We hear someone made money in the stock market or mutual funds, and we jump in thinking:
        </p>
        <blockquote className="ml-5 italic">“Main bhi try karta hoon!”</blockquote>
        <p>
          But soon, many people lose money and confidence not because the market is wrong, but because their approach is wrong. This blog will save you from the most common and costly mistakes that beginners make.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1️⃣ Investing Without a Goal</h2>
        <p>
          The biggest mistake is investing just for the sake of it. Before you invest, ask yourself why am I investing?
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Child’s education?</li>
          <li>A home?</li>
          <li>Retirement?</li>
          <li>Grow wealth?</li>
        </ul>
        <p>No goal = No direction = No result.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2️⃣ Expecting Quick Returns</h2>
        <p>
          Many beginners believe investment is a shortcut to becoming rich. But real investing doesn’t work like that. The stock market and mutual funds reward patience — not greed.
        </p>
        <p>
          👉 If you want quick profits, that’s trading.<br/>
          👉 If you want wealth, that’s investing.
        </p>
        <blockquote className="ml-5 italic">
          “The market is a machine that transfers money from the impatient to the patient.”
        </blockquote>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3️⃣ Ignoring Risk and Diversification</h2>
        <p>Putting all your money in one stock, one fund, or one asset is dangerous. Always diversify:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Mutual funds</li>
          <li>Fixed deposits</li>
          <li>PPF</li>
          <li>Gold</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4️⃣ Investing Without Emergency Fund</h2>
        <p>
          Imagine this: You invested all your savings and suddenly there’s a medical emergency. You’re forced to withdraw early losing profits and peace of mind.
        </p>
        <p>Always keep 3–6 months of expenses as an emergency fund before investing.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5️⃣ Following Tips Without Research</h2>
        <p>Never invest based on WhatsApp messages, Telegram groups, or rumours. Golden rule:</p>
        <blockquote className="ml-5 italic">
          “If you don’t know how it makes money, you shouldn’t invest your money.”
        </blockquote>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6️⃣ Not Starting Early</h2>
        <p>The earlier you start, the more your money grows — thanks to compounding.</p>
        <p>Example:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Rohan: ₹2,000/month from age 25 → ₹23.5 lakh at 55</li>
          <li>Suresh: ₹2,000/month from age 35 → ₹7.7 lakh at 55</li>
        </ul>
        <p>Same investment, different timing — huge difference!</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7️⃣ Not Reviewing Investments Regularly</h2>
        <ul className="list-disc list-inside ml-5">
          <li>Check mutual fund performance</li>
          <li>Adjust SIPs with income changes</li>
          <li>Shift from risky to safe options as you near your goal</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8️⃣ Emotional Investing</h2>
        <p>
          When markets fall, people panic and sell everything. When markets rise, they buy blindly. The best investors stay calm and focus on long-term growth.
        </p>
        <p>Tip: Feeling scared is normal. Just don’t let fear make your financial decisions.</p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2>Conclusion: Be Smart, Not Fast</h2>
        <p>
          Avoiding these beginner mistakes can save you from years of regret and help you build wealth peacefully.
        </p>
        <p>
          Start small, stay consistent, and keep learning. “It’s not about timing the market — it’s about time in the market.”
        </p>
        <p>Stay patient, stay smart, and let your money grow while you live your life stress-free.</p>
      </footer>
    </article>
  );
}
