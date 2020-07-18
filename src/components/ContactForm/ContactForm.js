import React from 'react';
import FormPageLayout from '../formPageLayout';
import './ContactForm.css';

export default () => {
  return (
    <FormPageLayout>
      <form
        className="form-page contact-form"
        method="post"
        action="/confirmation"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}
      >
        <h2>Contact Us</h2>
        <span>
          We are happy to hear from you with any questions or comments.
        </span>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name *
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Email *
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Subject *
          <input type="text" name="subject" id="subject" required />
        </label>
        <label>
          Message *
          <textarea name="message" id="message" rows="5" required />
        </label>
        <div className="contact-form__btn-container">
          <input
            type="reset"
            value="Clear"
            className="contact-form__btn contact-form__btn--clear"
          />
          <button
            type="submit"
            className="contact-form__btn contact-form__btn--submit"
          >
            Send
          </button>
        </div>
      </form>
    </FormPageLayout>
  );
};
