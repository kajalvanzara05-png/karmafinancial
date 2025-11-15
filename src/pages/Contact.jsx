import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  // Super Strict Email Check
  const strictEmail =
    /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9-]{3,}\.[A-Za-z]{2,}$/;

  // Super Strict Mobile Number (exact 10 digits)
  const strictPhone = /^[0-9]{10}$/;

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // form clear ho jayega
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <h5>Whether you have questions, need assistance, or want to explore your financial future — we’re here to help.</h5>

      {isSubmitSuccessful ? (
        <p className="success-message">
          Your message has been successfully sent!
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

          {/* NAME */}
          <label className="contact-label">Name</label>
          <input
            className="contact-input"
            placeholder="Enter Your Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && (
            <p className="error-text">{errors.name.message}</p>
          )}

          {/* MOBILE NUMBER */}
          <label className="contact-label">Mobile Number</label>
          <input
            className="contact-input"
            placeholder="Enter Your Mobile Number"
            {...register("phone", {
              required: "Mobile number is required",
              pattern: {
                value: strictPhone,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="error-text">{errors.phone.message}</p>
          )}

          {/* EMAIL */}
          <label className="contact-label">Email</label>
          <input
            className="contact-input"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: strictEmail,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="error-text">{errors.email.message}</p>
          )}

          {/* MESSAGE */}
          <label className="contact-label">Message</label>
          <textarea
            className="contact-textarea"
            rows="5"
            placeholder="Enter Your Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="error-text">{errors.message.message}</p>
          )}

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
