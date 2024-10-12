"use client";

import { useState } from "react";
import axios from "axios";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import "@/styles/ContactUSPage.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      errors.name = "Name is required.";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Valid email is required.";
      valid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.log(error);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  return (
    <div className="contact-form-container">
      <Link href={"/"} className="back-button z-10">
        <FaArrowLeft />
      </Link>
      <BackgroundBeams />

      <div className="contact-form-wrapper z-10">
        <h1 className="form-heading">Contact Us</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`input ${errors.name ? "input-error" : ""}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`input ${errors.email ? "input-error" : ""}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="label">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className={`textarea ${errors.message ? "input-error" : ""}`}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-button ${isSubmitting ? "button-disabled" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p className={`status-message ${statusMessage.includes("successfully") ? "status-success" : "status-failure"}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
