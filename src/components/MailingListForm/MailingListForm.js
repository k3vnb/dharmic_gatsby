import React, { useState } from 'react';
import { API_URL } from '../../utils/url';
import './MailingListForm.css';

const MailingListForm = () => {
  const [email, setEmail] = useState('');
  const [spam, setSpam] = useState({ name: '', email: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = e => setEmail(e.target.value);

  const handleSpamChange = e =>
    setSpam({ ...spam, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (spam.name.length || spam.email.length) {
      return;
    }
    const response = await fetch(`${API_URL}/contact-emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: email,
      }),
    });
    if (response.status === 202) {
      setEmail('');
      return setConfirmationMessage(
        'Thank you! You have been added to the mailing list'
      );
    }
    return setConfirmationMessage('Oops, there was a problem!');
  };

  return (
    <form
      method="post"
      name="join-mailing-list"
      className="join-mailing-list-form"
      onSubmit={handleSubmit}
    >
      <h4 className="join-mailing-list__title">Sign up for our Mailing List</h4>
      <h5 className="join-mailing-list__subtitle tangerine">
        Receive news, offers, &amp; updates...
      </h5>
      {!confirmationMessage && (
        <div className="join-mailing-list__form-field-container">
          <label
            htmlFor="emailsendthis"
            className="join-mailing-list-form__label"
          >
            <span className="sr-only">Enter Your Email: </span>
            <input
              className="join-mailing-list-form__input"
              placeholder="Enter your email"
              type="email"
              name="emailsendthis"
              id="emailsendthis"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          {/* h o n e y p o t */}
          <label htmlFor="email" className="hunneepawt">
            Email
            <input
              autoComplete="turnOff"
              type="email"
              name="email"
              id="email"
              value={spam.email}
              onChange={handleSpamChange}
            />
          </label>
          <label htmlFor="name" className="hunneepawt">
            Name
            <input
              autoComplete="turnOff"
              type="text"
              name="name"
              id="name"
              value={spam.name}
              onChange={handleSpamChange}
            />
          </label>
          <button className="btn join-mailing-list-form__btn" type="submit">
            Submit
          </button>
        </div>
      )}
      {!!confirmationMessage && (
        <div>
          <span role="img" aria-label="moon emoji">
            &#127773;
          </span>{' '}
          {confirmationMessage}{' '}
          <span role="img" aria-label="sun emoji">
            &#127774;
          </span>
        </div>
      )}
    </form>
  );
};

export default MailingListForm;
