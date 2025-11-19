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
        style={{height:"auto",width:"100%"}}

      />
      <section className="mb-6">
        <p>
          For most middle-class families, every month starts with hope and ends with calculations — rent, EMIs, groceries, fees, and bills. Whatever remains is your “savings,” but savings are not investments.
        </p>
        <p>
          If you truly want your money to work for you, you need a plan — one that fits your real-life financial situation. Let’s break it down step-by-step.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Understand Where You Stand Financially</h2>
        <p>Write down:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Your monthly income</li>
          <li>Fixed expenses (rent, EMIs, bills)</li>
          <li>Variable expenses (food, travel, shopping)</li>
          <li>What’s left for saving</li>
        </ul>
        <p>Example: If you earn ₹40,000 and spend ₹28,000 → ₹12,000 left. Don’t invest all — divide wisely.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Create an Emergency Fund First</h2>
        <p>
          Investment without safety is like driving without a seatbelt. Build an emergency fund:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Keep 3–6 months of expenses aside</li>
          <li>Use a liquid mutual fund or savings account</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: Secure Yourself with Insurance</h2>
        <p>
          Protect yourself before investing. Insurance ensures family safety if anything unexpected happens.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Take health insurance even if your company provides one</li>
          <li>Take term life insurance (not endowment or money-back)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Set Clear and Realistic Financial Goals</h2>
        <p>Investing without goals is like traveling without a destination. Examples:</p>
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
              <td>Vacation, vehicle</td>
              <td>1–3 years</td>
              <td>FD, Liquid Fund</td>
            </tr>
            <tr>
              <td>Medium-Term</td>
              <td>Child’s education, house down payment</td>
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
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Follow the 50-30-20 Rule</h2>
        <ul className="list-disc list-inside ml-5">
          <li>50% – Needs: Rent, EMIs, groceries, education</li>
          <li>30% – Wants: Shopping, dining, movies, travel</li>
          <li>20% – Investments/Savings: SIPs, insurance, goals</li>
        </ul>
        <p>If 20% is hard, start with 10% — consistency matters more than amount.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Diversify Your Investments</h2>
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
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 7: Automate and Review Regularly</h2>
        <ul className="list-disc list-inside ml-5">
          <li>Automate SIPs through auto-debit</li>
          <li>Review portfolio every 6–12 months</li>
          <li>Increase SIP if salary rises</li>
          <li>Move to safer options when nearing goals</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 8: Start Small, But Start Early</h2>
        <p>
          Even ₹500–₹1000 monthly SIP can grow big in the long run.
        </p>
        <p>
          Example: ₹1,000/month for 25 years at 12% returns → ₹14 lakh from ₹3 lakh invested. That’s compounding magic.
        </p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2>Conclusion: Your Money Should Work as Hard as You Do</h2>
        <p>
          Investment planning is not about becoming rich overnight. It’s about creating financial peace and letting your money grow with you.
        </p>
        <blockquote className="ml-5 italic">
          “People who plan their money, control their life. People who don’t, get controlled by money.”
        </blockquote>
      </footer>
    </article>
  );
}
