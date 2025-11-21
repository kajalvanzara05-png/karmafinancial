// Contact.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Enter your full name";

    if (!formData.email.trim()) err.email = "Enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Invalid email";

    if (!formData.phone.trim()) err.phone = "Enter phone number";
    else if (!/^\d{10}$/.test(formData.phone)) err.phone = "Phone must be 10 digits";

    if (!formData.message.trim()) err.message = "Enter your message";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Form Submitted Successfully!");
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">

        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Whether you have questions or need assistance — we’re here to help.
        </p>

        <form onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <div className="form-control">
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className={errors.name ? "is-invalid" : ""}
            />
            <label>Full Name</label>
            {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
          </div>

          {/* EMAIL */}
          <div className="form-control">
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className={errors.email ? "is-invalid" : ""}
            />
            <label>Email Address</label>
            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
          </div>

          {/* PHONE */}
          <div className="form-control">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
              className={errors.phone ? "is-invalid" : ""}
            />
            <label>Mobile Number</label>
            {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
          </div>

          {/* MESSAGE */}
          <div className="form-control textarea-control">
            <textarea
              name="message"
              value={formData.message}
              required
              rows="3"
              onChange={handleChange}
              className={errors.message ? "is-invalid" : ""}
            ></textarea>
            <label>Message</label>
            {errors.message && (
              <div className="invalid-feedback d-block">{errors.message}</div>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
