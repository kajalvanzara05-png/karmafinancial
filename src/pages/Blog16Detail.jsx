import { useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import b16 from "../assets/b16.png"; // replace with correct image if needed

export default function BlogWhatIsInvestment() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
        <header>
 
      <button className="back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blog
      </button>

      <h1>What is Investment</h1>

      <p className="blog-date">
        Published on <time dateTime="2025-11-03">11/3/2025</time>
      </p>

      </header>
      <img
        src={b16}
        className="blog-detail-img"
        style={{ height: "auto", width: "100%" }}
      /><hr/>

      {/* INTRO */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
        What Is Investment? (A Simple Guide for Middle-Class People)
        </h2>
        <h1  className="text-xxl"></h1>

        <p>
          Every middle-class family dreams of a bette future a home, good education for kids, and a peaceful retirement. But dreams alone don’t make the future secure.
<strong>Money saved is good, but money invested is powerful.</strong>
        </p>

        <p className="mt-2">
         So, what exactly is investment? Let’s understand it in a simple way.
        </p>
      </section><hr/>

      {/* What is Investment */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Does “Investment” Mean?</h2>

        <p>
         Investment means putting your money somewhere so that it grows over time.
Instead of keeping all your money in a savings account, you make your money work for you.
        </p>
      <p>Think of it like this:</p>
        <p className="mt-2">
        If you plant a mango seed today, it won’t give fruit tomorrow but after a few years, you’ll have a tree full of mangoes.
Similarly, when you invest, your small amount of money grows slowly and gives you returns later.
        </p>
      </section><hr/>

      {/* Why it matters */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Why Investment Matters for Middle-Class Families
        </h2>

        <p>
          Middle-class life is full of responsibilities rent, EMIs, groceries, school fees, and sometimes medical expenses.
With so many expenses, it’s easy to think “How can I invest when there’s nothing left to save?”
        </p>
      <p>But here’s the truth:</p>
        <p className="mt-2">
         Even ₹500 or ₹1,000 invested every month can become lakhs in a few years if you start early and stay consistent.
        </p>

        <h2 className="font-semibold mt-2">Investment helps you:</h2>
        <ul className="list-disc ml-5">
          <li>Beat inflation (because prices keep rising)</li>
          <li>Build wealth for your future</li>
          <li>Handle emergencies confidently</li>
          <li>Achieve dreams like buying a home, car, or your child’s higher education</li>
        </ul>
      </section><hr/>

      {/* Types of Investments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Types of Investments</h2>

        <p>You don’t need to be an expert to start investing.<br/>
Here are some common and simple options:</p>

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
      </section><hr/>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Example for Better Understanding
        </h2>

        <p>
         Let’s say Ramesh, a 32-year-old salaried employee, invests ₹2,000 every month in a mutual fund SIP.</p>
         <p>If the fund gives an average 12% annual return:</p>

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
          That’s the power of compounding — your money earns returns, and those returns also earn returns!
        </p>
      </section><hr/>

      {/* How to start */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Start Investing (Simple Steps)</h2>
        <p>
        <ol className="list-disc ml-5">
        <li>Understand your goal — Why are you investing? (education, retirement, etc.)</li> 
        <li>Fix a small monthly amount — even ₹500 is fine to start.</li>
        <li>Choose the right tool — SIPs or PPF for beginners.</li>
        <li>Be consistent — Don’t stop investing when the market goes down.</li>
        <li>Track and learn — Review your investments every 6 months.</li>
        </ol></p>
      </section>

      {/* Conclusion */}
      <section>
        <footer className="mt-6 border-t pt-6">
          <h2 className="text-lg font-semibold">Final Thoughts</h2>
          <p>Investment is not about getting rich overnight.<br />
            It’s about building a peaceful, confident, and financially secure life for your family.<br />
            Remember:<br />
</p>            <p>“Don’t wait to invest invest, and then wait.”</p>
            <p>Start small, stay regular, and let time do its magic.</p>
        </footer>
      </section>

    </article>
  );
}
