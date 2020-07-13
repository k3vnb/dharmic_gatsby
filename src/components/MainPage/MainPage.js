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
      <h3
        className="cinzel"
        style={{
          textAlign: 'center',
          color: '#b04200',
          textShadow: '.5px .5px 1px orange, -.5px -.5px 1px black',
        }}
      >
        About
      </h3>
      <ReactMarkdown
        source={data.allStrapiMainPageDescription.nodes[0].content}
      />
    </div>
  );
};
