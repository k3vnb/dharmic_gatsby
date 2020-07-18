import React from 'react';
import FormPageLayout from '../formPageLayout';
import { Link } from 'gatsby';

export default () => {
  return (
    <FormPageLayout>
      <div className="confirmation-message-container">
        <p>
          Thank you for reaching out! We have received your submission and we
          will reply shortly.
        </p>
        <Link to="/">
          <button type="button" className="link-to-home-btn">
            Return Home
          </button>
        </Link>
      </div>
    </FormPageLayout>
  );
};
