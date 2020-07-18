import React from 'react';
import Layout from '../components/layout';
import ConfirmationMessage from '../components/ContactForm/ConfirmationMessage';
import SEO from '../components/seo';

const ConfirmationPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Confirmation Message" />
    <ConfirmationMessage />
  </Layout>
);

export default ConfirmationPage;
