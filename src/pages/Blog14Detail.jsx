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
        style={{ height: "auto", width: "100%" }}

      />

      <section className="mb-6"><hr />
        <h2 className="text-xl font-semibold mb-2">
          Which One Is Right for You? (A Complete Guide for Middle-Class Families)
        </h2><hr />
        <h1 className="text-xxxl">Introduction</h1>
        <p>
          When people hear the word investment, many think it’s only for rich people or experts.<br />
          But the truth is — investment is for everyone, especially for middle-class families who want to secure their future.
        </p>
        <p>
          Today, let’s understand the different types of investments available in India and how to choose the right one based on your income, goals, and comfort level.
        </p>
      </section><hr />

      {/* 1. FD */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Bank Fixed Deposit (FD)</h2>
        <p>
          <strong>What it is:</strong><br />
          A Fixed Deposit means keeping your money in the bank for a fixed period and earning a fixed interest rate.
        </p>
        <p>
          <strong>Example:</strong><br />
          You deposit ₹1 lakh in an FD for 5 years at 7% interest → you’ll get around ₹1.4 lakh at maturity.
        </p>
        <h2 className="font-semibold mt-2">Why people like it:</h2>
        <ul className="list-disc ml-5">
          <li>Safe and guaranteed returns</li>
          <li>Easy to open in any bank</li>
          <li>Good for short-term goals</li>
        </ul>
        <h2 className="font-semibold mt-2">But be careful::</h2>
        <p>FD interest is often lower than inflation, so your money may not grow much in the long run.</p>
        <p><strong>Best for:</strong> People who want safety more than high returns (like retired persons or beginners).3r</p>
      </section><hr />

      {/* 2. Mutual Funds */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Mutual Funds (SIP – Systematic Investment Plan)
        </h2>
        <p>
          <strong>What it is:<br /></strong>
          In a mutual fund, your money is invested in a mix of shares, bonds, and other assets.
          A SIP lets you invest small amounts (₹500 or ₹1000 monthly).
        </p>
        <p className="font-semibold mt-2">Why people like it:</p>
        <ul className="list-disc ml-5">
          <li>SAnyone can start with a small amount</li>
          <li>Helps you beat inflation over time</li>
          <li>Gives you higher returns than FD if you stay invested long term</li>
        </ul>
        <p>
          <strong>Example:</strong><br />
          Investing ₹2000/month for 15 years can grow to nearly ₹10 lakh (at 12% return rate).
        </p>
        <p><strong>Best for:</strong> Salaried people, beginners, and those who want to build wealth slowly and safely.</p>
      </section><hr />

      {/* 3. PPF */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Public Provident Fund (PPF)</h2>
        <p>
          <strong>What it is:</strong><br />
          A government-backed saving scheme with tax benefits and safe returns.
          You can invest from ₹500 to ₹1.5 lakh per year for 15 years.
        </p>

        <p className="font-semibold mt-2">Why people like it:</p>
        <ul className="list-disc ml-5">
          <li>Totally risk-free</li>
          <li>Tax-free returnss</li>
          <li>Great for retirement planning</li>
        </ul>

        <p><strong>But Remember:</strong> Money gets locked for 15 years, so it’s not for short-term needs.</p>
        <p><strong>Best for:</strong> Long-term, safe, and tax-saving investment plans.</p>
      </section><hr />

      {/* 4. Gold */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Gold (Physical or Digital)</h2>
        <p>
          What it is:<br />
          Indians love gold not just for jewellery, but also as an investment.
          Now you can invest in Digital Gold or Gold ETFs without actually buying jewellery.
        </p>

        <h2 className="font-semibold mt-2">Why people like it:</h2>
        <ul className="list-disc ml-5">
          <li>Protects your money during economic uncertainty</li>
          <li>Easy to buy and sell</li>
          <li>Works as a “safety net” in your portfolio</li>
        </ul>

        <p><strong>But Remember:</strong> Gold doesn’t give monthly income; it’s mainly for long-term wealth protection.</p>
        <p><strong>Best for:</strong> People who want stability and diversification.</p>
      </section><hr />

      {/* 5. Real Estate */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Real Estate (Property Investment)</h2>
        <p>What it is:<br />
          Buying land, flats, or houses for rent or resale.
        </p>

        <h2 className="font-semibold mt-2">Why people like it:</h2>
        <ul className="list-disc ml-5">
          <li>Gives rental income</li>
          <li>Value increases over time</li>
          <li>Tangible and emotionally satisfying</li>
        </ul>

        <h2 className="font-semibold mt-2">But Remember:</h2>
        <ul className="list-disc ml-5">
          <li>Requires big capital</li>
          <li>Less liquid can’t sell quickly if you need cash</li>
        </ul>

        <p><strong>Best for:</strong>Long-term investors or families looking for steady asset growth.</p>
      </section><hr />

      {/* 6. Stock Market */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Stock Market (Shares/Equities)</h2>
        <p>
          What it is:<br />
          When you buy a share, you own a small part of that company.
          If the company grows, your share value increases that’s your profit.
        </p>

        <h4 className="font-semibold mt-2">Why people like it:</h4>
        <ul className="list-disc ml-5">
          <li>High return potential</li>
          <li>Dividend income</li>
          <li>Helps beat inflation by a large margin</li>
        </ul>

        <p><strong>But Remember:</strong> The stock market has risk — prices go up and down.<br />
          So you must invest only after learning or with guidance.</p>
        <p><strong>Best for:</strong> People who can take some risk and want to grow wealth faster.</p>
      </section><hr />

      {/* 7. Insurance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Insurance (Life + Health)</h2>
        <p>
          What it is:<br />
          Insurance is not a direct investment, but it protects your family’s financial future.<br />
          Life insurance secures your family if something happens to you;<br />
          Health insurance saves you from medical emergencies.
        </p>
        <p><strong>Best for:</strong>Every earning person because protection is the foundation of financial planning.</p>
      </section><hr />

      {/* Table */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">How to Choose the Right Investment</h2>
        <p>Choosing the right investment depends on 3 simple things:</p>
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
      <section>
        <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">❤️Conclusion: Don’t Just Save, Grow Your Money</h2>
        <p>Saving is the first step but investment is the journey to your dreams.
          Even if you start small, start now.<br />
          Because time is your biggest ally in growing wealth.<br />

          Remember:<br />

          “Don’t let your money sleep in a bank account —<br />
          wake it up and make it work for your future.”<br />

          Start with one simple investment today.
          Your future self will thank you for it.</p>
      
    </footer>
      </section>
      

    </article >
  );
}
