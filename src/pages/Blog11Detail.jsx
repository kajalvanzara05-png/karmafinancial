import React from "react";
import "./BlogDetail.css";
import { useNavigate } from "react-router-dom";
import b11 from "../assets/b11.png"; // replace with actual image

export default function Blog11detail() {
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

        <h1>How to Stay Consistent in Your Investment Journey — Especially for Middle-Class People</h1>
        <p className="blog-date">
          Published on <time dateTime="2025-11-06">11/6/2025</time>
        </p>
      </header>

      <img
        src={b11}
        style={{ width: "100%", height: "450px" }}
        className="blog-detail-img"
      />

      <section className="mb-6">
        <h1 className="text-xxl" >Introduction</h1>
        <p className="text-gray-800">
          Investment shuru karna asaan hota hai, lekin usme consistent rehna sabse mushkil kaam hota hai — khaaskar un logon ke liye jo middle-class background se belong karte hain.
          Kabhi emergency aa jaati hai, kabhi koi personal expense, aur kabhi motivation hi khatam ho jaata hai.
          Lekin doston, agar aap long-term wealth banana chahte ho, to consistency hi sabse bada secret weapon hai.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📈 Why Consistency Matters in Investment</h2>
        <p className="text-gray-800">
          Investment ek plant jaisa hota hai —
          jab tak aap usse regular paani doge, wo badhega aur ek din shade aur fruits dega.
          Lekin agar beech beech me paani dena band kar doge, wo sukh jaayega.
        </p>
        <p className="text-gray-800">
          Bilkul waise hi, agar aap SIPs ya regular investment ko beech me rok doge,
          to compounding ka magic toot jaata hai.
        </p>
        <p className="text-gray-800 font-semibold">
          Albert Einstein ne kaha tha:<br />“Compounding is the 8th wonder of the world — he who understands it, earns it; he who doesn’t, pays it.”
        </p>
        <p className="text-gray-800">Aur consistency hi compounding ka base hai.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧮 A Real-Life Example</h2>
        <p className="text-gray-800">
          Maan lijiye do friends hain — Ravi aur Suresh. <br />Dono har mahine ₹3,000 SIP me lagate hain.<br /> Ravi 10 saal tak lagata rehta hai, bina break ke.<br /> Suresh bhi lagata hai, lekin beech me 2 saal ke liye SIP band kar deta hai.
        </p>
        <p className="text-gray-800">
          10 saal baad:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 ml-5">
          <li>Ravi ka paisa ₹7 lakh ban jaata hai</li>
          <li>Suresh ka paisa sirf ₹5 lakh hota hai</li>
        </ul>
        <p className="text-gray-800">Sirf 2 saal consistency na rakhne ki wajah se ₹2 lakh ka farak aa gaya. Yahi hai consistency ka power!</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧭 How to Stay Consistent in Your Investment Journey</h2>
        <p> Middle-class investors ke liye kuch simple habits bahut help kar sakti hain:</p>
        <p>1️⃣ Automate Your Investments:
          Salary aate hi SIP auto-deduct ho jaaye — taaki decision lene ka pressure hi na ho.</p>
        <p> 2️⃣ Emergency Fund Banao:
          3-6 months ka expense bank me rakho, taaki zarurat ke time investment todna na pade.</p>
        <p>3️⃣ Small Start, Big Impact:
          Agar aap ₹500 se bhi start karte ho, to wo bhi ek habit builder hota hai.
          Consistency habit se aati hai, amount se nahi.</p>
        <p> 4️⃣ Avoid Overthinking:
          Market upar neeche hota rahega — har dip pe darna nahi, long-term soch rakho.</p>
        <p>5️⃣ Remind Yourself of the Goal:
          Apna investment goal likh kar rakho — jaise “Mujhe apne bacche ki education ke liye paisa banana hai”</p>
        <p>Har baar jab temptation aaye, ye yaad rakhna.</p>
      </section><hr />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Mindset Shift for Middle-Class Investors</h2>
        <p className="text-gray-800">
          Middle-class logon ke liye investment koi luxury nahi — ye zarurat hai.<br /> Kyuki humare paas paisa ka fallback option nahi hota. <br />Agar hum consistent nahi rahe, to financial freedom sirf ek sapna ban ke reh jaayega.
        </p>
        <p className="text-gray-800">
          Investment me consistency ka matlab hai —<br /> har market fall, har salary issue, aur har distraction ke bawajood<br /> apne goal ke saath jude rehna.
        </p>
      </section>

      <section>
        <footer className="mt-6 border-t pt-6 text-sm text-gray-700">
          <p className="mb-2">❤️ Conclusion</p>
          <p className="mb-4 text-gray-800">
            Dosto, chhoti chhoti investments se hi bade dreams pure hote hain.<br /> Aap ₹500 lagao ya ₹5,000 — farak nahi padta, jab tak aap regular aur disciplined ho.
          </p>
          <p className="text-gray-800">
            Ek din aap khud dekhenge ki ye consistency aapke liye kitni badi power ban gayi hai.<br /> To apni journey me patience rakho, faith rakho — aur consistency ko apna rule banao.
          </p>
          <p className="mt-2 text-gray-800 font-semibold">
            Remember: “Success in investment doesn’t come from timing the market,<br /> but from time in the market — with consistency.”
          </p>
        </footer>
      </section><hr/>

    </article>
  );
}
