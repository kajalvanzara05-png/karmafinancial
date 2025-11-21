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
      /><hr/><br/>

      {/* INTRO */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Why Do We Need to Invest? (A Reality Check for Middle-Class Families)
        </h2><hr/>
        <h1 text-xxl>Introduction</h1>
        <p>
          Every middle-class person dreams of a better tomorrow a good education for children, a comfortable home, and a peaceful retirement.
          But between EMIs, rent, and monthly bills, it often feels impossible to think about the future.
          Still, the truth is simple<br />if you don’t invest your money today, your future will always remain uncertain.
        </p>
        <p>
          Let’s understand why investment is not just a choice, but a necessity.
        </p>
      </section><hr />

      {/* 1. Savings Are Not Enough */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Savings Are Not Enough Anymore</h2>
        <p>Most of us think saving money in a bank account is enough.<br />
          But let’s face the truth the world has changed, and so has the value of money.</p>

        <p>Prices of everything from vegetables to school fees are increasing every year.<br />
          This rise in prices is called inflation.<br />
          If your money is lying idle in a savings account, earning 3–4% interest, but inflation is 7–8%,<br />
          then in reality, your money is losing its value every year.</p>

        <p>Example:<br />
          In 2010, you could buy a 25 kg rice bag for ₹700.<br />
          In 2025, the same bag costs over ₹1,300.<br />
          That’s inflation in action and that’s why saving alone can’t secure your future.</p>
      </section><hr />

      {/* 2. Helps Money Grow */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Investment Helps Your Money Grow</h2>
        <p>Investment means making your money work for you.<br />
          When you invest, you give your money a chance to grow faster than inflation.</p>
        <p>Let’s understand this with a real-life example:</p>
        <p>Ramesh, a 30-year-old employee, starts investing ₹2,000 per month in a mutual fund SIP that gives 12% annual returns.</p>

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
      </section><hr />

      {/* 3. Financial Security */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Financial Security for Your Family
        </h2>
        <p>
          mergencies never come with a warning<br />
          job loss, medical expenses, or family needs can come anytime.
        </p>
        <p>Investment builds a financial cushion that helps you stay strong during tough times.<br />
          Whether it’s your child’s education, your parents’ health, or your retirement plan investments ensure your family’s stability, even when income stops.</p>
      </section><hr />

      {/* 4. Freedom */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Freedom and Peace of Mind</h2>
        <p>
          When you have investments working for you, you’re not just earning you’re buying peace of mind.
        </p>
        <p>Imagine the confidence of knowing:</p>
        <p>That’s the real power of investing freedom.
          <br />Freedom from stress, from constant worry, and from financial dependence.

        </p>
      </section><hr />

      {/* 5. Achieve Life Goals */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Achieve Your Life Goals on Time
        </h2>
        <p>
          Everyone has dreams<br />
          buying a car, owning a house, starting a business, or travelling the world.
        </p>
        <p>Investment helps you turn these dreams into reality, step by step.<br />
          You don’t need to invest lakhs start small.<br />
          Even ₹500 a month can grow into something meaningful over time if you stay consistent.

        </p>
      </section>

      {/* Conclusion */}
      <section>
        <footer className="mt-6 border-t pt-6">
        <h2 className="text-lg font-semibold">❤️Conclusion: Start Today, Not Someday</h2>
        <p>Investment is not only for rich people it’s for everyone who wants a better future.<br/>
          Middle-class families can change their financial destiny with small, regular investments.</p>
        <p>Remember this simple rule:</p>
        <p>“Don’t wait to have more money to invest<br/>
          start investing so that you can have more money.”</p>
        <p>Start with what you can. Stay consistent.<br/>
          Because the sooner you start, the stronger your future becomes.</p>
      </footer>
      </section><hr/>
      

    </article>
  );
}
