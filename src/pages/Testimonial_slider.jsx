import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaEllipsisV } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial_slider.css";

const Testimonial_slider = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeIndex, setActiveIndex] = useState(0);
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
      setMenuOpen(null);
      setMessage("✅ Review deleted successfully");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleEdit = (review) => {
    localStorage.setItem("editReviewId", review.id);
    setMessage("✏ You can edit this review in Contact page");
    setTimeout(() => setMessage("✏️ You can edit this review in Contact page"), 3000);
    navigate("/contact");
  };

  return (
    <div className="testimonial-section">
      <h2 className="glow-title">✨ What Our Clients Say ✨</h2>
      {message && <div className="message">{message}</div>}

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={reviews.length > 1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {reviews.map((item, index) => {
          let cardClass = "inactive-card"; // default: fully blurred

          if (index === activeIndex) cardClass = "active-card"; // center card: clear
          else if (index === activeIndex - 1 || (activeIndex === 0 && index === reviews.length - 1))
            cardClass = "left-blur-card"; // left slide blur
          else if (index === activeIndex + 1 || (activeIndex === reviews.length - 1 && index === 0))
            cardClass = "right-blur-card"; // right slide blur

          return (
            <SwiperSlide key={item.id} className={cardClass}>
              <div className="testimonial-card glow-card">
                <p className="feedback">“{item.feedback}”</p>
                <h3>{item.name}</h3>
                <p className="company">{item.company}</p>
                <div className="rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} color="#f4b400" />
                  ))}
                </div>

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
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial_slider;
