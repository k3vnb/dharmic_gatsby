import React from 'react';
import './ContactForm.css';

export default () => {
  console.log('contact form loaded');
  return (
    <form
      method="post"
      action="/confirmation"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" required />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" required />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  );
};
