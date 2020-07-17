import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import MainPage from '../components/MainPage/MainPage';
import ImageHero from '../components/ImageHero/ImageHero';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Dharmic Astrology" />
    <ImageHero />
    <MainPage />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      nodes {
        id
        title
        content
        updated_at
      }
    }
    strapiMainPageDescription {
      content
    }
  }
`;
