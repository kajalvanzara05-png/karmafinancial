import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b8 from "../assets/b8.png";

export default function Blog1Detail() {
  const navigate = useNavigate();

  return (
    <article className="blog-article">
      <header>
        <button onClick={() => navigate("/blogs")} className="back-btn">
          ← Back to Blog
        </button>

        <h1>The Power of Compounding — How Time Can Make You Rich</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-08">11/8/2025</time>
        </p>
      </header>
      <img
        src={b8}
        className="blog-detail-img"
        style={{height:"auto",width:"100%"}}

      />

      <section className="mb-6">
        <p>Middle-class log aksar kehte hain — “Mere paas itna paisa kaha hai invest karne ke liye?”</p>
        <p>
          Lekin sach yeh hai, aapko zyada paisa nahi, zyada time aur patience chahiye. Share market ya mutual funds me
          chhoti chhoti rakam bhi agar time ke saath invest ki jaye, to wo ek din bada paisa ban jaati hai. 💥
        </p>
        <p>
          Aaj hum samjhenge, compounding kya hoti hai aur kaise ye aapke paisa ko double, triple, aur multiple times badha sakti hai — bina kisi magic ke.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Exactly Is Compounding?</h2>
        <p>
          Compounding ka matlab hota hai — “Aapke paise ke upar bhi paisa kamaana.”
        </p>
        <p>
          Agar aap ₹1,000 invest karte ho aur uspar 10% return milta hai, to ek saal baad wo ₹1,100 ho jaata hai.
          Agla saal, aapko 10% sirf ₹1,000 par nahi — ₹1,100 par milta hai. Yani interest par bhi interest!
        </p>
        <p>Yehi chhoti si baat time ke saath wealth explosion ban jaati hai.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Example: The ₹500 Miracle</h2>
        <p>Socho aap har mahine ₹500 SIP karte ho, 12% annual return ke saath.</p>
        <table className="info-table border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Time Period</th>
              <th className="border border-gray-300 p-2">Total Invested</th>
              <th className="border border-gray-300 p-2">Value (Approx)</th>
              <th className="border border-gray-300 p-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">5 years</td>
              <td className="border border-gray-300 p-2">₹30,000</td>
              <td className="border border-gray-300 p-2">₹40,800</td>
              <td className="border border-gray-300 p-2">₹10,800</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">10 years</td>
              <td className="border border-gray-300 p-2">₹60,000</td>
              <td className="border border-gray-300 p-2">₹1.15 lakh</td>
              <td className="border border-gray-300 p-2">₹55,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">20 years</td>
              <td className="border border-gray-300 p-2">₹1.2 lakh</td>
              <td className="border border-gray-300 p-2">₹4.9 lakh</td>
              <td className="border border-gray-300 p-2">₹3.7 lakh</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">30 years</td>
              <td className="border border-gray-300 p-2">₹1.8 lakh</td>
              <td className="border border-gray-300 p-2">₹14.7 lakh</td>
              <td className="border border-gray-300 p-2">₹12.9 lakh</td>
            </tr>
          </tbody>
        </table>
        <p>Sirf ₹500 per month → 30 saal me ₹14 lakh+! That’s the power of time and patience.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why Compounding Works Best for Middle-Class Investors</h2>
        <p>
          Middle-class log ke paas ek advantage hoti hai — regular income aur long working years. Agar aap 25 saal ki age me shuru karte ho
          aur 55 tak invest karte ho, to aapko 30 saal ka compounding advantage milta hai. Wo hi agar koi 35 me shuru kare,
          to usse 10 saal kam milte hain — aur result me wealth difference 3x tak ho sakta hai!
        </p>
        <p>👉 Compounding rewards those who start early and stay invested long-term.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">The 3 Golden Rules of Compounding</h2>
        <ul className="list-disc list-inside ml-5">
          <li>Start Early: Time is your best friend. Ek saal late start karna matlab lakhon ka loss future me.</li>
          <li>Stay Consistent: Matlab har month SIP chalu rakho — market upar ho ya neeche.</li>
          <li>Reinvest Your Earnings: Jo profit milta hai, wo nikaalo mat. Usko dubara invest karo — wahi compounding ka real game hai.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Real-Life Example: Two Friends</h2>
        <table className="info-table border-collapse border border-gray-300 w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Person</th>
              <th className="border border-gray-300 p-2">Total Invested</th>
              <th className="border border-gray-300 p-2">Value at 55</th>
              <th className="border border-gray-300 p-2">Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Ravi (25–55 yrs)</td>
              <td className="border border-gray-300 p-2">₹7.2 lakh</td>
              <td className="border border-gray-300 p-2">₹70 lakh</td>
              <td className="border border-gray-300 p-2">—</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Suresh (35–55 yrs)</td>
              <td className="border border-gray-300 p-2">₹4.8 lakh</td>
              <td className="border border-gray-300 p-2">₹24 lakh</td>
              <td className="border border-gray-300 p-2">₹46 lakh less!</td>
            </tr>
          </tbody>
        </table>
        <p>Ravi ne sirf 10 saal pehle start kiya, aur 46 lakh ka difference bana liya! Yehi hota hai “Time is money” ka asli matlab.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Middle-Class Mindset Shift</h2>
        <p>
          Hamare society me log sochte hain: “Pehle badi income ho jaaye, fir invest karenge.” Lekin sach yeh hai — badi income investment se aati hai, na ki uske baad.
        </p>
        <p>Start small, but start early. Aapka ₹500 bhi ek din aapka retirement fund ban sakta hai — agar aap consistent ho.</p>
      </section>

      <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
        <h2>Conclusion</h2>
        <p>Compounding ek aisi cheez hai jisme “Magic” nahi, “Mathematics” chhupi hai. Time + Discipline = Wealth</p>
        <p>“Jo log compounding samajhte hain, wo usse kamaate hain. Jo nahi samajhte, wo dusron ke liye kaam karte hain.”</p>
        <p>
          Aaj se apna first SIP start karo — chahe ₹500 se hi. Future me ye decision aapko financially free bana dega. 🚀
        </p>
        <p>🔗 Start Your SIP or Stock Investment Today: Open account on Groww or Zerodha.</p>
      </footer>
    </article>
  );
}
