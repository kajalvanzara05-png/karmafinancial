import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b14 from "../assets/b14.jpg";

export default function BlogTypesOfInvestments() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">

      <button className="back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blog
      </button>

      <h1>Types of Investments</h1>
      <p className="blog-date">
        Published on <time dateTime="2025-11-04">11/4/2025</time>
      </p>
       <img
        src={b14}
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Which One Is Right for You? (A Complete Guide for Middle-Class Families)
        </h2>
        <p>
          When people hear the word investment, many think it’s only for rich people
          or experts. But the truth is — investment is for everyone, especially
          middle-class families who want to secure their future.
        </p>
        <p>
          Today, let’s understand the different types of investments available in India
          and how to choose the right one based on your income, goals, and comfort level.
        </p>
      </section>

      {/* 1. FD */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Bank Fixed Deposit (FD)</h2>
        <p>
          A Fixed Deposit means keeping your money in the bank for a fixed period
          and earning a fixed interest rate.
        </p>
        <p>
          Example: Deposit ₹1 lakh for 5 years at 7% → maturity approx. ₹1.4 lakh.
        </p>
        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>Safe and guaranteed returns</li>
          <li>Easy to open in any bank</li>
          <li>Good for short-term goals</li>
        </ul>
        <h4 className="font-semibold mt-2">Be careful:</h4>
        <p>FD interest is often lower than inflation.</p>
        <p><strong>Best for:</strong> People wanting safety over returns.</p>
      </section>

      {/* 2. Mutual Funds */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Mutual Funds (SIP – Systematic Investment Plan)
        </h2>
        <p>
          In mutual funds, your money is invested in shares, bonds, and more.
          SIP allows small monthly investments like ₹500 or ₹1000.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>Start with small amount</li>
          <li>Beats inflation</li>
          <li>Higher returns long-term</li>
        </ul>

        <p>
          Example: ₹2000/month for 15 years → nearly ₹10 lakh (12% returns).
        </p>

        <p><strong>Best for:</strong> Salaried people and beginners.</p>
      </section>

      {/* 3. PPF */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Public Provident Fund (PPF)</h2>
        <p>
          A government-backed saving scheme with tax benefits.
          You can invest ₹500–₹1.5 lakh yearly for 15 years.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>Risk-free</li>
          <li>Tax-free returns</li>
          <li>Great for retirement</li>
        </ul>

        <p><strong>Remember:</strong> Money locked for 15 years.</p>
        <p><strong>Best for:</strong> Long-term, safe investment plans.</p>
      </section>

      {/* 4. Gold */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Gold (Physical or Digital)</h2>
        <p>
          You can invest in jewellery, Digital Gold, or Gold ETFs.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>Safe during economic uncertainty</li>
          <li>Easy to buy and sell</li>
          <li>Acts as a safety net</li>
        </ul>

        <p><strong>Remember:</strong> Gold doesn't give monthly income.</p>
        <p><strong>Best for:</strong> Stability and diversification.</p>
      </section>

      {/* 5. Real Estate */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Real Estate</h2>
        <p>
          Buying property for rent or resale.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>Rental income</li>
          <li>Value appreciation</li>
          <li>Tangible asset</li>
        </ul>

        <h4 className="font-semibold mt-2">Remember:</h4>
        <ul className="list-disc ml-5">
          <li>Requires big capital</li>
          <li>Not easy to sell quickly</li>
        </ul>

        <p><strong>Best for:</strong> Long-term asset growth.</p>
      </section>

      {/* 6. Stock Market */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Stock Market (Shares/Equities)</h2>
        <p>
          Buying shares means owning part of a company.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>High return potential</li>
          <li>Dividend income</li>
          <li>Beats inflation</li>
        </ul>

        <p><strong>Remember:</strong> Requires knowledge and carries risk.</p>
        <p><strong>Best for:</strong> People who can take some risk.</p>
      </section>

      {/* 7. Insurance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Insurance (Life + Health)</h2>
        <p>
          Not an investment, but protects your family financially.
        </p>
        <p><strong>Best for:</strong> Every earning person.</p>
      </section>

      {/* Table */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">How to Choose the Right Investment</h2>

        <table className="info-table">
          <thead>
            <tr>
              <th>Goal Type</th>
              <th>Example</th>
              <th>Best Investment Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Short-Term (1–3 years)</td>
              <td>Vacation, bike, emergency fund</td>
              <td>FD, Liquid Mutual Fund</td>
            </tr>

            <tr>
              <td>Medium-Term (3–7 years)</td>
              <td>Car, education, house down payment</td>
              <td>Balanced Mutual Fund, Gold</td>
            </tr>

            <tr>
              <td>Long-Term (7+ years)</td>
              <td>Retirement, children’s marriage</td>
              <td>Equity SIPs, PPF, Real Estate</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">Conclusion: Don’t Just Save, Grow Your Money</h2>
        <p>
          Saving is the first step, but investment is the journey to your dreams.
          Start small, start now — time is your biggest wealth builder.
        </p>
        <blockquote className="italic mt-2">
          “Don’t let your money sleep in a bank account — wake it up and make it work for your future.”
        </blockquote>
      </footer>

    </article>
  );
}
