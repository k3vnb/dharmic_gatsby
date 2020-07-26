import React from 'react';
import './MailingListForm.css';

const MailingListForm = () => {
  // console.log('maillinglistform')
  return (
    <form
      method="post"
      action="/confirmation"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="mailingList"
      className="join-mailing-list-form"
    >
      <h4 className="join-mailing-list__title">Sign up for our Mailing List</h4>
      <h5 className="join-mailing-list__subtitle tangerine">
        Receive news, offers, &amp; updates...
      </h5>
      <div className="join-mailing-list__form-field-container">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="mailingList" />
        <label htmlFor="email" className="join-mailing-list-form__label">
          <span className="sr-only">Enter Your Email: </span>
          <input
            className="join-mailing-list-form__input"
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            required
          />
        </label>
        <button className="btn join-mailing-list-form__btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MailingListForm;
