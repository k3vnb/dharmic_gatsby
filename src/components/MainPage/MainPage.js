import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import PackageItemList from './PackageItemList';
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
      <h3 className="cinzel main-page__title">About</h3>
      <ReactMarkdown
        source={data.allStrapiMainPageDescription.nodes[0].content}
      />
      <PackageItemList />
    </div>
  );
};
