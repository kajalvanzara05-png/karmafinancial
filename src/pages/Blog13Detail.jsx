import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b13 from "../assets/b13.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button onClick={() => navigate("/blogs")} className="back-btn">
          ← Back to Blog
        </button>

        <h1>Investments Plan</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-06">11/6/2025</time>
        </p>
      </header>
      <img
        src={b13}
        className="blog-detail-img"
        style={{ height: "auto", width: "100%" }}

      />
      <section className="mb-6">
        <h3 >How to Plan Your Investments According to Your Financial Situation (A Realistic Guide for Middle-Class People)</h3><hr />
        <h1 className="text-xxl">Introduction</h1>
        <p>
          For most middle-class families, every month starts with hope and ends with calculations — rent, EMIs, groceries, fees, and bills. After all that, whatever remains, we call “savings.”
        </p>
        <p> But here’s the truth — savings are not investments.<br />
          If you truly want your money to work for you, you need a plan one that fits your real-life financial situation.
        </p>
        <p>Let’s break down how you can plan your investments step-by-step — practically, smartly, and without taking unnecessary risks.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Understand Where You Stand Financially</h2>
        <p>Before you invest, you need to understand your money flow.</p>
        <p>Write down:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Your monthly income</li>
          <li>Your fixed expenses (rent, EMIs, bills)</li>
          <li>Your variable expenses (food, travel, shopping)</li>
          <li>What’s left for saving</li>
        </ul>
        <p>Example 👇<br />
          If you earn ₹40,000 and spend ₹28,000 → you have ₹12,000 left.
          Now the smart move is not to invest all ₹12,000 but to divide it wisely.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Create an Emergency Fund First</h2>
        <p>Investment without safety is like driving without a seatbelt.<br />
          Before investing, build an emergency fund.</p>

        <p>✅ Keep 3–6 months of expenses aside in a liquid mutual fund or savings account.<br />
          If your monthly expenses are ₹25,000 → save ₹75,000 to ₹1,50,000.
        </p>
        <p>This fund acts like your financial shield helping you stay strong during medical issues, job loss, or family emergencies.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: Secure Yourself with Insurance</h2>
        <p>No investment plan is complete without protection.</p>

        <p>Think of it this way<br />  If something unexpected happens to you, your investments won’t help your family immediately, but insurance will.</p>


        <p>✔️ Take health insurance even if your company provides one.<br />
          ✔️ Take term life insurance (not endowment or money-back).</p>

        <p>Once your family is safe, you can invest without fear.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Set Clear and Realistic Financial Goals</h2>
        <p>Investing without goals is like traveling without a destination.<br />You must know why you’re investing.</p>
        <table className="info-table">
          <thead>
            <tr>
              <th>Goal Type</th>
              <th>Example</th>
              <th>Duration</th>
              <th>Ideal Investment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Short-Term</td>
              <td>Vacation,buying a vehicle</td>
              <td>1–3 years</td>
              <td>FD, Liquid Fund</td>
            </tr>
            <tr>
              <td>Medium-Term</td>
              <td>child’s education, house down payment</td>
              <td>3–7 years</td>
              <td>SIP in Hybrid Mutual Fund</td>
            </tr>
            <tr>
              <td>Long-Term</td>
              <td>Retirement, child’s marriage</td>
              <td>7+ years</td>
              <td>SIP in Equity Mutual Fund, PPF, Stocks</td>
            </tr>
          </tbody>
        </table>
        <p>Having clear goals helps you decide how much risk to take and where to invest.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Follow the 50-30-20 Rule (Your Budget Foundation)</h2>
        <ul className="list-disc list-inside ml-5">
          <li>50% – Needs: Rent, EMIs, groceries, education</li>
          <li>30% – Wants: Shopping, dining, movies, travel</li>
          <li>20% – Investments/Savings: SIPs, insurance, goals</li>
        </ul>
        <p>If saving 20% feels hard, start with 10%.<br />
          The key is consistency not the amount.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Diversify Your Investments (Don’t Put All Eggs in One Basket)</h2>
        <p>Every investment has its own risk and return level.<br />
          So, build a balanced mix that matches your comfort level.

        </p>
        <table className="info-table">
          <thead>
            <tr>
              <th>Investment Option</th>
              <th>Suggested Allocation</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mutual Funds (SIP)</td>
              <td>40%</td>
              <td>Long-term growth</td>
            </tr>
            <tr>
              <td>PPF / EPF</td>
              <td>20%</td>
              <td>Safe & tax-free savings</td>
            </tr>
            <tr>
              <td>FD / Liquid Fund</td>
              <td>20%</td>
              <td>Short-term or emergency</td>
            </tr>
            <tr>
              <td>Gold / Gold ETF</td>
              <td>10%</td>
              <td>Hedge against inflation</td>
            </tr>
            <tr>
              <td>Stocks</td>
              <td>10%</td>
              <td>Higher risk, higher return</td>
            </tr>
          </tbody>
        </table><br />
        <p>This diversification gives you stability and growth together.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 7: Automate and Review Regularly</h2>
        <p>The easiest way to stay consistent? Automate your SIPs.<br />
          Set up auto-debit from your bank so you invest before you spend.</p>
        <p>Review your portfolio every 6–12 months:</p>
        <ul>
          <li>If your salary increases → raise your SIP.</li>
          <li>If you’re nearing a goal → move to safer options like debt funds.</li>
        </ul>
        <p>Smart investors don’t check prices daily, they review plans yearly.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 8: Start Small, But Start Early</h2>
        <p>Many people wait for “the right time” to invest.<br />
          But in reality, the right time is today.</p>
        <p>Even ₹500–₹1000 monthly SIP can grow big in the long run.<br />
          Here’s proof:</p>
        <p>If you invest ₹1000 per month for 25 years with 12% returns →<br />
          you’ll get ₹14 lakh from an investment of just ₹3 lakh!</p>
        <p>That’s the magic of compounding.</p>
      </section>

      <section>
        <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
          <h2>Conclusion: Your Money Should Work as Hard as You Do</h2>
          <p>  Investment planning is not about becoming rich overnight.<br />
            It’s about creating financial peace so you can live freely without stress.</p>
          <p> No matter how small your income, planning makes it powerful.</p>
          <p>Remember:<br /> “People who plan their money, control their life.<br />
            People who don’t, get controlled by money.”</p>
          <p>Start today, plan smart, and let your money grow with you 🌱💰</p>


        </footer>
      </section><hr/>

    </article>
  );
}
