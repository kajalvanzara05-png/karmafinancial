import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtext">
       Whether you have questions, need assistance, or want to explore your financial future — we’re here to help.
      </p>

      {submitted ? (
        <p className="success-message">
          Thank you! Your message has been sent successfully.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
           <label htmlFor="name" className="contact-label">Name</label>
           
        <input

            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
          <label htmlFor="Email" className="contact-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
          <label htmlFor="Masesage" className="contact-label">Masesage</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="contact-textarea"
          ></textarea>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
