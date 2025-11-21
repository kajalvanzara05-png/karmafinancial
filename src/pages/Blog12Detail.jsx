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
        style={{ height: "auto", width: "100%" }}

      />

      <section className="mb-6">
        <h1 className="text-xxl" >Introduction</h1>
        <p>
          Let’s be honest most of us start investing without any real plan. We hear someone made money in the stock market or mutual funds, and we jump in thinking:
        </p>
        <p className="ml-5 italic">“Main bhi try karta hoon!”</p>
        <p> But soon, many people lose money and confidence not because the market is wrong, but because their approach is wrong.</p>
        <p>If you’re new to investing, this blog will save you from the most common and costly mistakes that beginners make.
        </p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1️⃣ Investing Without a Goal</h2>
        <p>
          The biggest mistake is investing just for the sake of it. Before you invest, ask yourself why am I investing?
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Is it for your child’s education?</li>
          <li>A home?</li>
          <li>Retirement?</li>
          <li>Or just to grow wealth?</li>
        </ul>
        <p>When your goal is clear, you automatically know where to invest and for how long.<br />
          No goal = No direction = No result.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2️⃣ Expecting Quick Returns</h2>
        <p>Many beginners believe investment is a shortcut to becoming rich.They invest today and expect double returns in a year.</p>

        <p>But real investing doesn’t work like that.
          The stock market and mutual funds reward patience — not greed.</p>
        <ul>
          <li> 👉 If you want quick profits, that’s trading.</li>
          <li> 👉 If you want wealth, that’s investing.</li>
        </ul>
        <p>Remember:</p>

        <p> “The market is a machine that transfers money from the impatient to the patient.”</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3️⃣ Ignoring Risk and Diversification</h2>
        <p>Putting all your money in one stock, one fund, or one asset is dangerous.
          Even great companies face bad times.</p>
        <p>Always diversify your portfolio
          some in mutual funds, some in fixed deposits, some in PPF or gold.</p>
        <p>That way, even if one area performs poorly, the others balance it out.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4️⃣ Investing Without Emergency Fund</h2>
        <p> Many middle-class investors skip this step but it’s one of the most important.</p>
        <p>Imagine this:
          You invested all your savings in mutual funds, and suddenly there’s a medical emergency.
          You’re forced to withdraw early losing profits and peace of mind.</p>
        <p>To avoid this, always keep 3–6 months of expenses as an emergency fund before investing.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5️⃣ Following Tips Without Research</h2>
        <p>We all have that one friend or relative who gives “hot stock tips.”
          But most of the time, they’re just guesses, not research.</p>

        <p>Never invest based on WhatsApp messages, Telegram groups, or rumours.
          If you don’t understand where your money is going don’t invest there.</p>

        <p>Golden rule:

          “If you don’t know how it makes money, you shouldn’t invest your money.”</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6️⃣ Not Starting Early</h2>
        <p>Many people think,</p>

        <p>“I’ll start investing when I earn more.”
          But that “when” never comes.</p>
        <p>The earlier you start, the more your money grows — thanks to the power of compounding.</p>
        <p>Example:</p>
        <p>If Rohan starts investing ₹2,000/month at 25 years, and Suresh starts at 35 years,
          both stop at 55 years with the same 12% return —
        </p>
        <p>Rohan gets ₹23.5 lakh, while Suresh gets only ₹7.7 lakh.
          👉 Same investment, different timing — huge difference!</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7️⃣ Not Reviewing Investments Regularly</h2>
        <p>Investing is not a one-time task.</p>
        <p>Markets, goals, and your life — all change with time.</p>
        <p>If you don’t review your portfolio every 6–12 months, you might be stuck in low-performing assets.</p>
        <p>✅ Check if your mutual funds are performing.<br />
          ✅Adjust your SIPs when your income increases.<br />
          ✅ Shift from risky to safe options as you near your goal.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8️⃣ Emotional Investing</h2>
        <p>
          When markets fall, people panic and sell everything.
          When markets rise, they buy blindly.
          This emotional roller-coaster causes loss.
        </p>
        <p>The best investors stay calm — they <strong>don’t fear short-term noise,</strong> they <strong>focus on long-term growth.</strong></p>
        <p><strong>Tip:</strong></p>
        <p>If you feel scared when markets drop — that’s normal.<br />
          Just don’t let fear make your financial decisions.</p>
      </section>
         <section>
      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">    
             <h2>❤️Conclusion: Be Smart, Not Fast</h2>
        <p>Everyone wants to earn more — but successful investors earn wisely, not quickly.</p>
        <p>Avoiding these beginner mistakes can save you from years of regret and help you build wealth peacefully.</p>
         <p> Start small, stay consistent, and keep learning.
          Because in investing,</p>
          <p>“It’s not about timing the market — it’s about time in the market.”
          Stay patient, stay smart, and let your money grow while you live your life stress-free.</p>
      </footer>
      </section><hr/>
    </article>
  );
}
