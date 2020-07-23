import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default ({ message }) => (
  <>
    <p className="error-message">Oops! Error: {message}</p>
    <p className="error-message">
      Try again later or{' '}
      <AniLink fade="true" to="/contact">
        Contact Us
      </AniLink>
      .
    </p>
  </>
);
