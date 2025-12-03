import React, { useState, useEffect } from "react";
import { FaStar, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Testimonial_slider.css";

const Testimonial_slider = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  const [index, setIndex] = useState(0);
 
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Auto next review
  useEffect(() => {
    if (reviews.length > 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [reviews]);

  const current = reviews[index];

  // Delete review
 

  return (
    <div className="testimonial-section">
      <h2 className="glow-title">✨ What Our Clients Say ✨</h2>

      {message && <div className="message">{message}</div>}

      {current && (
        <div key={current.id} className="testimonial-card morph">
         

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < current.rating ? "#f4b400" : "#ddd"} // yellow if rated, gray if not
              />
            ))}
          </div>



          {/* Edit/Delete menu */}
         
          {/* Feedback message */}
          <p className="feedback">“{current.feedback}”</p>

          <hr />

          {/* Client name */}
          <div className="client-name">{current.name}</div>

          {/* Rating below client name */}

        </div>
      )}

      {/* Dots */}
      <div className="testimonial-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial_slider;
