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
        style={{ height: "auto", width: "100%" }}

      />

      {/* Blog content */}
      <section className="mb-6">
        <h1 className="text-xxl" >Introduction</h1>
        <p>
          Aaj ke time me har middle-class family ke paas kuch na kuch karz (debt) hota hi hai —
          home loan, personal loan, credit card bill, ya education loan.
          Aur uske saath hi hum sabko yeh bhi lagta hai ke “investment bhi zaroori hai”.
        </p>
        <p>
          Lekin sawal yeh uthta hai — Jab loan chuka rahe ho, tab invest karna sahi hai kya?
          Agar haan, to kaise balance karein dono cheezein?
        </p>
        <p>Chalo aaj iss blog me bilkul ground reality ke saath samajhte hain 👇</p>
      </section><hr />
      <section>
        <h2 className="text-xl font-semibold mb-2">Why Debt and Investment Both Exist Together (Especially in Middle-Class Life)</h2>
        <p>Middle-class life ek tightrope walk jaisa hota hai.<br />
          Ek side par EMIs aur bills, aur doosri side par future security ki tension.<br />
          Hum savings karna chahte hain, par monthly obligations ke beech me wo possible nahi lagta.</p>
        <p>Lekin reality ye hai —<br />
          Debt aur Investment dono ko balance karna possible hai — bas smart planning chahiye.</p>
      </section><hr />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Know Your Financial Reality</h2>
        <p>Sabse pehle apni current situation samjho.<br /> Ek simple list banao:</p>
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
        <p>Ab yahi ₹15,000 ka proper use karna hi smart investing + debt control ka art hai.</p>
      </section><hr />

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
              <td>Continue EMIs,keep investing small</td>
            </tr>
            <tr>
              <td>❌ Bad Debt</td>
              <td>Credit card, personal loan for luxury</td>
              <td>High interest, no asset creation</td>
              <td>Pay off as soon as possible</td>
            </tr>
          </tbody>
        </table>
        <p>Simple rule:<br />
          Pehle high-interest loans chukao,<br />
          phir long-term investment start karo.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: 50-30-20 Formula</h2>
        <p>Use this golden rule for balance:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>50% → Essentials (EMI, rent, food)</li>
          <li>30% → Lifestyle (family, entertainment, etc.)</li>
          <li>20% → Investment / Savings</li>
        </ul>
        <p>Example:<br />
          If your monthly income is ₹50,000
          Invest at least ₹10,000 in SIPs, PPF, or mutual funds, even while paying EMIs.</p>

        <p> Investment doesn’t need to be huge — it needs to be regular.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Automate & Separate Accounts</h2>
        <p>
          Middle-class log ek galti karte hain — sab kuch ek hi account me rakhte hain.
          Result? Confusion, overspending, aur missed SIPs.</p>

        <p>Solution:
          <ul>
            <li>  Create two accounts one for expenses, one for investment.</li>
            <li> Set auto-debit for SIPs just after salary credit.</li>
          </ul>
          <p> Isse investment pehle hoga, baad me kharcha — aur yahi financial discipline ki pehli seed hai.</p>
        </p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Start Small, But Be Consistent</h2>

        <p>Agar EMI chal rahi hai, to koi problem nahi.
          Start with just ₹500 or ₹1000 SIP.</p>
        <p>Example:<br />
          Rahul earns ₹45,000 and pays ₹12,000 home loan EMI.
          He still invests ₹1,000 monthly in SIP.
          After 10 years, he builds over ₹2 lakh — bina pressure ke.</p>
        <p>Yaani, thoda thoda hi sahi, par rukna nahi chahiye.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 6: Don’t Use Investment to Pay Debt</h2>
        <p> Ye sabse common mistake hai —<br />
          jab loan ka pressure badhta hai, log apne mutual funds tod dete hain.</p>
        <p>Galat step!
          Kyuki short-term relief milega, par long-term loss hoga.</p>
        <p>Instead:</p>
        <ul>
          <li> Try to refinance your loan at lower interest.  </li>
          <li>Cut temporary lifestyle expenses.</li>
          <li>But don’t break your long-term investments.</li>
        </ul>

      </section>
      <section>
          <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2 className="mb-2">❤️ Final Words:</h2>
        <p className="mb-4">
          <p>Debt hona koi burai nahi hai har middle-class insaan us phase se guzarta hai.
            Lekin debt ke chakkar me apna future secure karna band mat karo.</p>
          <p>“EMI aaj ka burden hai,
            investment kal ka freedom.”</p>
          <p>Balance dono me rakho, smart decisions lo, aur apne goals ke saath steady raho.
            Aapka paisa aapke liye kaam karega — bas use direction sahi do. 🚀</p>
        </p>
      </footer><hr />
      </section>
    
    </article>
  );
}
