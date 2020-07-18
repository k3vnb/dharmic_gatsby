import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList';

import Layout from '../components/layout';
import SEO from '../components/seo';

const articlesList = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog Home" />
    <ArticleList />
  </Layout>
);

export default articlesList;