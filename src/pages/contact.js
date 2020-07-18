import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/seo';

const ContactPage = ({ location }) => (
  <Layout location={location} >
    <SEO title="Contact Us" />
    <ContactForm />
  </Layout>
);

export default ContactPage;
