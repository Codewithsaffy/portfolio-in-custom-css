import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { SocialIcons } from "../smallComp/FooterItons";
import Link from "next/link";
import "@/styles/ContactUsSec.css"

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">
          Ready to take <span className="highlight-text">your</span> digital
          presence to the next level?
        </h2>
        <p className="contact-description">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals
        </p>
        <Link href="/contact" className="contact-button">
          Contact Me Now
          <FaArrowRight className="button-icon" />
        </Link>
      </div>
      <div className="footer-content">
        <p className="footer-text">
          Copyright ©2024 Muhammad Yousuf
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default ContactUs;
