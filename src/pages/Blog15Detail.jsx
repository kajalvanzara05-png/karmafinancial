import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b15 from "../assets/b15.png"; // Change image if needed

export default function BlogWhyWeNeedToInvest() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">

      <button className="back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blog
      </button>

      <h1>Why We Need to Invest</h1>
      <p className="blog-date">
        Published on <time dateTime="2025-11-03">11/3/2025</time>
      </p>

      <img
        src={b15}
        className="blog-detail-img"
        style={{ height: "auto", width: "100%" }}
      />

      {/* INTRO */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Why Do We Need to Invest? (A Reality Check for Middle-Class Families)
        </h2>
        <p>
          Every middle-class person dreams of a better tomorrow — a good education for
          children, a comfortable home, and a peaceful retirement. But with EMIs, rent,
          and bills, thinking about the future feels impossible.
        </p>
        <p>
          Still, one truth remains — if you don’t invest today, your future will always
          remain uncertain. Here’s why investment is a necessity, not a choice.
        </p>
      </section>

      {/* 1. Savings Are Not Enough */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Savings Are Not Enough Anymore</h2>
        <p>
          Most people believe saving in a bank account is enough. But inflation reduces
          your money’s value every year.
        </p>

        <p className="mt-2">
          Example:  
          In 2010, 25 kg rice cost ₹700.  
          In 2025, the same bag costs ₹1,300+.  
          That’s inflation — your money buys less over time.
        </p>

        <p>
          Savings at 3–4% interest cannot beat inflation at 7–8%.
        </p>
      </section>

      {/* 2. Helps Money Grow */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Investment Helps Your Money Grow</h2>
        <p>Investment allows your money to grow faster than inflation.</p>

        <p className="mt-2 font-semibold">Real example:</p>
        <p>
          Ramesh, age 30, invests ₹2,000/month with 12% returns.
        </p>

        <table className="info-table mt-3">
          <thead>
            <tr>
              <th>Duration</th>
              <th>Total Invested</th>
              <th>Value Grows To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 years</td>
              <td>₹2.4 lakh</td>
              <td>₹4.6 lakh</td>
            </tr>
            <tr>
              <td>20 years</td>
              <td>₹4.8 lakh</td>
              <td>₹19.8 lakh</td>
            </tr>
            <tr>
              <td>30 years</td>
              <td>₹7.2 lakh</td>
              <td>₹59 lakh</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          This is the power of compounding—your returns earn returns.
        </p>
      </section>

      {/* 3. Financial Security */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Financial Security for Your Family
        </h2>
        <p>
          Emergencies like job loss or medical needs come without warning. Investments
          create a financial safety cushion that protects your family during tough times.
        </p>
      </section>

      {/* 4. Freedom */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Freedom and Peace of Mind</h2>
        <p>
          When your investments grow, you gain freedom and confidence:
        </p>
        <blockquote className="italic mt-2">
          “Even if I stop working tomorrow, my money will take care of me.”
        </blockquote>
      </section>

      {/* 5. Achieve Life Goals */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Achieve Your Life Goals on Time
        </h2>
        <p>
          Investments help you achieve dreams like a car, house, or travel. You don’t
          need lakhs—start with ₹500 per month and grow consistently.
        </p>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">Conclusion: Start Today, Not Someday</h2>
        <p>
          Investment isn’t for the rich—it’s for anyone who wants a better tomorrow.
          Start with whatever you can and stay consistent. Time will multiply your money.
        </p>

        <blockquote className="italic mt-2">
          “Don’t wait to have more money to invest — start investing so you can have more money.”
        </blockquote>
      </footer>

    </article>
  );
}
