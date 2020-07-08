import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allStrapiArticle.nodes.map(article => (
      <Link key={article.id} to={`articles/strapi/${article.id}`}>
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      </Link>
    ))}
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
      }
    }
  }
`;
