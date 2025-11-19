import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Footer from "./component/Footer";
import Partners from "./pages/Partner";
import MarketAnalysis from "./pages/MarketAnalysis";
import Service from "./pages/Service";
import TestimonialSlider from "./pages/Testimonial_slider";
import TestimonialForm from "./pages/Testimonial_form";
import ServiceDetails from "./pages/ServiceDetails";
import Blog1detail from "./pages/Blog1Detail";
import Blog2detail from "./pages/Blog2Detail";
import Blog3detail from "./pages/Blog3Detail";
import Blog4detail from "./pages/Blog4Detail";
import Blog5detail from "./pages/Blog5Detail";
import Blog6detail from "./pages/Blog6Detail";
import Blog7detail from "./pages/Blog7Detail";
import Blog8detail from "./pages/Blog8Detail";
import Blog9detail from "./pages/Blog9Detail";
import Blog10detail from "./pages/Blog10Detail";
import Blog11detail from "./pages/Blog11Detail";
import Blog12detail from "./pages/Blog12Detail";
import Blog13detail from "./pages/Blog13Detail";
import Blog14detail from "./pages/Blog14Detail";
import Blog15detail from "./pages/Blog15Detail";
import Blog16detail from "./pages/Blog16Detail";
import Blog17detail from "./pages/Blog17Detail";
import ScrollToTop from "./pages/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Header />   {/* Header Module */}

        <main className="min-vh-70 text-center py-4 bg-light ">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <MarketAnalysis />
                  <Partners />
                  <About />
                  <Contact />
                  <TestimonialSlider />
                </>
              }
            />

            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blogs" element={<Blog />} />
          </Routes>
          <Routes>
            <Route path="/Contact" element={<TestimonialForm />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
          <Routes>


            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<Services />} />
          </Routes>
          <Routes>
            <Route path="/blog/1" element={<Blog1detail />} />
            <Route path="/blog/2" element={<Blog2detail />} />
            <Route path="/blog/3" element={<Blog3detail />} />
            <Route path="/blog/4" element={<Blog4detail />} />
            <Route path="/blog/5" element={<Blog5detail />} />
            <Route path="/blog/6" element={<Blog6detail />} />
            <Route path="/blog/7" element={<Blog7detail />} />
            <Route path="/blog/8" element={<Blog8detail />} />
            <Route path="/blog/9" element={<Blog9detail />} />
            <Route path="/blog/10" element={<Blog10detail />} />
            <Route path="/blog/11" element={<Blog11detail />} />
            <Route path="/blog/12" element={<Blog12detail />} />
            <Route path="/blog/13" element={<Blog13detail />} />
              <Route path="/blog/14" element={<Blog14detail />} />
              <Route path="/blog/15" element={<Blog15detail />} />
              <Route path="/blog/16" element={<Blog16detail />} />
              <Route path="/blog/17" element={<Blog17detail />} />
            

          </Routes>


        </main>


      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
