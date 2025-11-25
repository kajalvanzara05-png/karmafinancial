import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonial_form.css";

const Testimonial_form = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    company: "",
    feedback: "",
    rating: 0,
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const editId = localStorage.getItem("editReviewId");
    if (editId) {
      const reviewToEdit = reviews.find(r => r.id === parseInt(editId));
      if (reviewToEdit) {
        setFormData(reviewToEdit);
        setEditing(true);
      }
      localStorage.removeItem("editReviewId");
    }
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRating = (value) =>
    setFormData({ ...formData, rating: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) {
      alert("Please fill required fields!");
      return;
    }

    if (editing) {
      setReviews(reviews.map((r) => (r.id === formData.id ? formData : r)));
      setMessage("✏️ Review updated successfully");
      setEditing(false);
    } else {
      setReviews([...reviews, { ...formData, id: Date.now() }]);
      setMessage("✅ Review added successfully");
    }

    setFormData({ id: null, name: "", company: "", feedback: "", rating: 0 });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="review-form">
      <h3>{editing ? "✏️ Edit Review" : "💬 Add Review"}</h3>

      {message && <div className="message">{message}</div>}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder=" "       // <-- empty placeholder required
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Your Name *</label>
        </div>

        {/* Company */}
        <div className="input-group">
          <input
            type="text"
            name="company"
            placeholder=" "
            value={formData.company}
            onChange={handleChange}
          />
          <label>Company / Designation</label>
        </div>

        {/* Feedback */}
        <div className="input-group">
          <textarea
            name="feedback"
            placeholder=" "
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <label>Write your feedback *</label>
        </div>

        {/* Rating */}
        <div className="rating-input">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={22}
              color={i < formData.rating ? "#f4b400" : "#ccc"}
              onClick={() => handleRating(i + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <button type="submit" className="submit-btn">
          {editing ? "Update Review" : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default Testimonial_form;
