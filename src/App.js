import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blogs";
import Footer from "./component/Footer";
import Partners from "./pages/Partner";
import MarketAnalysis from "./pages/MarketAnalysis";
import Service from "./pages/Service";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />   {/* Header Module */}

        <main style={{ minHeight: "70vh", textAlign: "center", padding: "20px" }}>
          <Routes>
            <Route
                   path="/"
                   element={
                     <>
                      <Home />
                      <Services/>
                      <MarketAnalysis />
                      <About />       
                      <Partners />
                      <Contact/>
                </>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Blogs" element={<Blog />} />
          </Routes>
        </main>

    
      </div>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
