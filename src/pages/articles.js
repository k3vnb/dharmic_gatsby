import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Blog Home" />
    <ArticleList />
  </Layout>
);

export default SecondPage;