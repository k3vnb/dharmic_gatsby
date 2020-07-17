import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/seo';

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactForm />
  </Layout>
);

export default ContactPage;
