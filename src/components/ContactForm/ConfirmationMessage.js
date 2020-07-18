import React from 'react';
import FormPageLayout from '../formPageLayout';

import { Link } from 'gatsby';

export default () => {
  return (
    <FormPageLayout>
      Thank you for reaching out! We have received your submission and we will
      reply shortly.
      <Link to="/">Return Home</Link>
    </FormPageLayout>
  );
};
