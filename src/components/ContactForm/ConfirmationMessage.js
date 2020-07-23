import React from 'react';
import FormPageLayout from '../formPageLayout';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => {
  return (
    <FormPageLayout>
      <div className="confirmation-message-container">
        <p>
          Thank you for reaching out! We have received your submission and we
          will reply shortly.
        </p>
        <AniLink fade="true" duration={0.25} to="/">
          <button type="button" className="link-to-home-btn">
            Return Home
          </button>
        </AniLink>
      </div>
    </FormPageLayout>
  );
};
