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

      {/* ⬇ GRID SYSTEM – LEFT FORM + RIGHT BLUE BOX */}
      <div className="contact-grid">

        {/* LEFT SIDE – YOUR ORIGINAL FORM (NO CHANGES) */}
        <div className="contact-card">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Whether you have questions or need assistance — we’re here to help.
          </p>

          <form onSubmit={handleSubmit}>
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

        {/* ➡ RIGHT SIDE BLUE BOX (Image Style Section) */}
        <div className="contact-info-box">
          <h3>Ready to Connect?</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>

          <div className="info-card">
            <h4>Visit Our Office</h4>
            <p>156, 1st Floor, C tower, K10 Atlantis, Near Genda Circle, opp. Honest Restaurant, Vadodara, Gujarat 390007</p>
          </div>

          <div className="info-card">
            <h4>Send Us a Message</h4>
            <p>info@karmafinancial.in</p>
          </div>

          <div className="info-card">
            <h4>Call Us Directly</h4>
            <p>+91 81600 72383</p>
              <p>+91 74050 65241</p>
          </div>

          <div className="info-card">
            <h4>Business Hours</h4>
            <p>Mon–Fri: 8AM–7PM<br/>Weekends: By Appointment</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
