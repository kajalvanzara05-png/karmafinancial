import React, { useState } from "react";
import "./home.css";
import Contact from "./Contact";


 function Home() {
  const[page,setPage]=useState("Home");

  const renderPage = () => {
    if (page === "Contact") {
      return <Contact />;
    }
  return (
    <section className="home">
      <h2>Welcome to KarmaFinancial</h2>
      <p>
        We help you grow your wealth through smart financial planning,
        investment advisory, insurance coverage, and mutual funds.
      </p>
      
      <button onClick={() => setPage("Contact")}>🚀 Get in Touch</button>
      
      
    </section>
   
  );
}
return renderPage();
}
export default Home;
