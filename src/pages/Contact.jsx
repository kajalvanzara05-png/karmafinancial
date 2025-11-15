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

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // form clear ho jayega
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>

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
