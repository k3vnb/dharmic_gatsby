import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default ({ confirmationNumber }) => (
  <div className="success-message flex-center">
    <h3>Success!</h3>
    <h4>Your confirmation number is:</h4>
    <p className="success-confirmation-number">{confirmationNumber}</p>
    <p>
      Thank you for your order, someone will reach out to you to schedule an
      appointment and address any questions shortly.
    </p>
    <AniLink fade="true" to="/">Return Home</AniLink>
  </div>
);
