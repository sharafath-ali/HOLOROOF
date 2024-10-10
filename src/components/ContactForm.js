// src/components/ContactForm.js
import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <section className="contact-form" style={{ backgroundColor: 'green', height: '100vh', width: '100vw' }}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
