import React from 'react';

import Layout from '../components/layout';
import MainPage from '../components/MainPage/MainPage';
import ImageHero from '../components/ImageHero/ImageHero';
import SEO from '../components/seo';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Dharmic Astrology" />
      <ImageHero />
      <MainPage />
    </Layout>
  );
};

export default IndexPage;
