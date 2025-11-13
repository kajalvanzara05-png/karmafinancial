import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaEllipsisV } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Testimonial_slider.css";

const Testimonial_slider = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  const [menuOpen, setMenuOpen] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
      localStorage.setItem("reviews", JSON.stringify(updated));
      setMenuOpen(null);
      setMessage("✅ Review deleted successfully");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleEdit = (review) => {
    localStorage.setItem("editReviewId", review.id);
    setMessage("✏ You can edit this review in Contact page");
    setTimeout(() => setMessage(""), 3000);
    navigate("/contact");
  };

  return (
    <div className="testimonial-section">
      <h2 className="glow-title">✨ What Our Clients Say ✨</h2>

      {message && <div className="message">{message}</div>}

      <Swiper
        effect={reviews.length > 1 ? "coverflow" : undefined}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={reviews.length > 1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="testimonial-swiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card glow-card">
              <p className="feedback">“{item.feedback}”</p>
              <h3>{item.name}</h3>
              <p className="company">{item.company}</p>
              <div className="rating">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} color="#f4b400" />
                ))}
              </div>

              {/* 3-dot Menu */}
              <div className="menu-container" onClick={(e) => e.stopPropagation()}>
                <FaEllipsisV
                  className="menu-icon"
                  onClick={() => setMenuOpen(menuOpen === item.id ? null : item.id)}
                />
                {menuOpen === item.id && (
                  <div className="menu-dropdown">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial_slider;
