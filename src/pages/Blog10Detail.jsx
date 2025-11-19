import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b10 from "../assets/b10.png";

export default function Blog10Detail() {
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

        <h1>How to Manage Debt While Investing (A Middle-Class Reality Check)</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-07">11/7/2025</time>
        </p>
      </header>
        <img
        src={b10}
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      {/* Blog content */}
      <section className="mb-6">
        <p>
          Aaj ke time me har middle-class family ke paas kuch na kuch karz (debt) hota hi hai — 
          home loan, personal loan, credit card bill, ya education loan.
          Aur uske saath hi hum sabko yeh bhi lagta hai ke “investment bhi zaroori hai”.
        </p>
        <p>
          Lekin sawal yeh uthta hai — Jab loan chuka rahe ho, tab invest karna sahi hai kya?
          Agar haan, to kaise balance karein dono cheezein?
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Know Your Financial Reality</h2>
        <p>Sabse pehle apni current situation samjho. Ek simple list banao:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Aapki total income (monthly)</li>
          <li>Total expenses (rent, EMI, food, bills)</li>
          <li>Bacha hua paisa kitna hota hai</li>
        </ul>
        <p>Example:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Income: ₹50,000</li>
          <li>Expenses + EMI: ₹35,000</li>
          <li>Balance: ₹15,000</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Identify “Good Debt” vs “Bad Debt”</h2>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Example</th>
              <th>Why It’s Okay / Issue</th>
              <th>What to Do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>✅ Good Debt</td>
              <td>Home loan, education loan</td>
              <td>Helps build assets or skills</td>
              <td>Continue EMIs, invest small</td>
            </tr>
            <tr>
              <td>❌ Bad Debt</td>
              <td>Credit card, personal loan for luxury</td>
              <td>High interest, no asset creation</td>
              <td>Pay off as soon as possible</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: 50-30-20 Formula</h2>
        <p>Use this golden rule for balance:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>50% → Essentials (EMI, rent, food)</li>
          <li>30% → Lifestyle (family, entertainment, etc.)</li>
          <li>20% → Investment / Savings</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Automate & Separate Accounts</h2>
        <p>
          Create separate accounts for expenses and investment. Set auto-debit for SIPs just after salary credit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Start Small, But Be Consistent</h2>
        <p>
          Start with ₹500–₹1000 SIP. Regular investment builds wealth without financial stress.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Don’t Use Investment to Pay Debt</h2>
        <p>
          Avoid breaking long-term investments for short-term relief. Refinance loans or cut lifestyle expenses instead.
        </p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <p className="mb-2">❤️ Conclusion</p>
        <p className="mb-4">
          Debt hona koi burai nahi hai. Balance karo dono — EMI aur investment. Smart decisions aur discipline se paisa aapke liye kaam karega. 🚀
        </p>
      </footer>
    </article>
  );
}
