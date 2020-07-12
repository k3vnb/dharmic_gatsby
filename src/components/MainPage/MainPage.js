import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import './MainPage.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiMainPageDescription {
        nodes {
          content
        }
      }
    }
  `);

  return (
    <div className="main-page-description">
      <ReactMarkdown source={data.allStrapiMainPageDescription.nodes[0].content} />
    </div>
  );
};
