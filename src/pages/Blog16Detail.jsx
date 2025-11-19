import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b16 from "../assets/b16.png"; // replace with correct image if needed

export default function BlogWhatIsInvestment() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">

      <button className="back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blog
      </button>

      <h1>What is Investment</h1>

      <p className="blog-date">
        Published on <time dateTime="2025-11-03">11/3/2025</time>
      </p>

      <img
        src={b16}
        className="blog-detail-img"
        style={{ height: "auto", width: "100%" }}
      />

      {/* INTRO */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          What Is Investment? (A Simple Guide for Middle-Class People)
        </h2>

        <p>
          Every middle-class family dreams of a better future — a home, good education
          for kids, and a peaceful retirement. But dreams alone don’t secure your future.
          Saving money is good, but investing money is powerful.
        </p>

        <p className="mt-2">
          So, what exactly is investment? Let’s understand it in a simple way.
        </p>
      </section>

      {/* What is Investment */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Does “Investment” Mean?</h2>

        <p>
          Investment means putting your money somewhere so that it grows over time.
          Instead of keeping all your money in a savings account, you make your money 
          work for you.
        </p>

        <p className="mt-2">
          Think of it like this:  
          If you plant a mango seed today, it won’t give fruit tomorrow — but after some
          years, you’ll get a tree full of mangoes.  
          Similarly, when you invest, your small amount grows slowly and gives returns later.
        </p>
      </section>

      {/* Why it matters */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Why Investment Matters for Middle-Class Families
        </h2>

        <p>
          Middle-class life comes with responsibilities — rent, EMIs, groceries, school 
          fees, and medical expenses. Often we think, “How can I invest when nothing is left?”
        </p>

        <p className="mt-2">
          But even ₹500 or ₹1,000 invested every month can turn into lakhs with consistency.
        </p>

        <h4 className="font-semibold mt-2">Investment helps you:</h4>
        <ul className="list-disc ml-5">
          <li>Beat inflation</li>
          <li>Build long-term wealth</li>
          <li>Handle emergencies confidently</li>
          <li>Achieve goals like a home, car, or child’s education</li>
        </ul>
      </section>

      {/* Types of Investments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Types of Investments</h2>

        <p>You don’t need to be an expert to start investing. Here are some simple options:</p>

        <table className="info-table mt-4">
          <thead>
            <tr>
              <th>Type of Investment</th>
              <th>Description</th>
              <th>Risk Level</th>
              <th>Ideal For</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Bank FD</td>
              <td>Fixed return, safe but low growth</td>
              <td>Low</td>
              <td>Short-term savings</td>
            </tr>

            <tr>
              <td>Mutual Funds (SIP)</td>
              <td>Invest small monthly amounts in the market</td>
              <td>Medium</td>
              <td>Long-term goals</td>
            </tr>

            <tr>
              <td>Stock Market</td>
              <td>Buy shares of companies</td>
              <td>High</td>
              <td>Long-term high growth</td>
            </tr>

            <tr>
              <td>Gold / Digital Gold</td>
              <td>Traditional and trusted</td>
              <td>Medium</td>
              <td>Hedge against inflation</td>
            </tr>

            <tr>
              <td>Real Estate</td>
              <td>Buy property for rent or resale</td>
              <td>Medium–High</td>
              <td>Long-term wealth</td>
            </tr>

            <tr>
              <td>PPF / EPF</td>
              <td>Government-backed schemes</td>
              <td>Low</td>
              <td>Retirement savings</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Example for Better Understanding
        </h2>

        <p>
          Ramesh, a 32-year-old salaried employee, invests ₹2,000 every month in a mutual
          fund SIP. If the fund gives an average 12% return:
        </p>

        <table className="info-table mt-4">
          <thead>
            <tr>
              <th>Duration</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>10 years</td>
              <td>₹4.6 lakh</td>
            </tr>

            <tr>
              <td>20 years</td>
              <td>₹19.8 lakh</td>
            </tr>

            <tr>
              <td>30 years</td>
              <td>₹59 lakh</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          This is the power of compounding — your money earns returns, and those returns
          also earn returns!
        </p>
      </section>

      {/* How to start */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Start Investing (Simple Steps)</h2>

        <ul className="list-disc ml-5">
          <li>Understand your goal — education, retirement, etc.</li>
          <li>Fix a small monthly amount — even ₹500 is enough.</li>
          <li>Choose the right tool — SIPs or PPF are good for beginners.</li>
          <li>Be consistent — don’t stop during market ups & downs.</li>
          <li>Review investments every 6 months.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">Final Thoughts</h2>

        <p>
          Investment is not about getting rich overnight. It's about creating a peaceful,
          confident, and financially secure life for your family.
        </p>

        <blockquote className="italic mt-2">
          “Don’t wait to invest — invest, and then wait.”
        </blockquote>
      </footer>

    </article>
  );
}
