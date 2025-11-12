import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaEllipsisV } from "react-icons/fa";
import "./Testimonial_slider.css";

const Testimonial_slider = () => {
  const [reviews, setReviews] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleDelete = (id) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setOpenMenu(null);
    showMessage("Review deleted!");
  };

  const handleEdit = (review) => {
    const newFeedback = prompt("Edit review:", review.feedback);
    if (newFeedback && newFeedback.trim() !== "") {
      const updated = reviews.map((r) =>
        r.id === review.id ? { ...r, feedback: newFeedback } : r
      );
      setReviews(updated);
      localStorage.setItem("reviews", JSON.stringify(updated));
      setOpenMenu(null);
      showMessage("Review edited!");
    }
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="testimonial-container">
      {message && <div className="message-toast">{message}</div>}

      <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  slidesPerView={3}
  spaceBetween={20}
  loop={true}
  centeredSlides={true}
  autoplay={{ delay: 4000 }}
  className="testimonial-swiper"
>
  {reviews.map((review, index) => (
    <SwiperSlide key={review.id}>
      {({ isActive, isPrev }) => (   // check previous slide
        <div
          className={`testimonial-card ${
            isActive ? "active-card" : isPrev ? "left-blur-card" : "right-blur-card"
          }`}
        >
          <p className="feedback">“{review.feedback}”</p>
          <h3>{review.name}</h3>
          <p className="company">{review.company}</p>
          <div className="rating">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} color="#f4b400" />
            ))}
          </div>

          {isActive && (
            <div className="menu-container">
              <FaEllipsisV
                className="menu-icon"
                onClick={() => toggleMenu(index)}
              />
              {openMenu === index && (
                <div className="menu-dropdown">
                  <button onClick={() => handleEdit(review)}>Edit</button>
                  <button onClick={() => handleDelete(review.id)}>Delete</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
};

export default Testimonial_slider;
