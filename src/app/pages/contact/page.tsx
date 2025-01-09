import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have a question or want to work with me? Feel free to drop a message below, and I’ll get back to you as soon as possible.
        </p>

        <form className="contact-form">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your name" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-textarea" placeholder="Enter your message" rows={5} required />
          </div>

          {/* Submit Button */}
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
