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
import BlogDetail from "./pages/Blogdetail";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Header />

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />


          </Routes>


        </main>


      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
