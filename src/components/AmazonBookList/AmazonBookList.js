import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AmazonBook from './AmazonBook';
import './AmazonBookList.css';

const AmazonBookList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAmazonLink {
        nodes {
          srcUrl
          strapiId
        }
      }
    }
  `);
  return (
    <>
      <h3 className="cinzel main-page__title">Recommended Reading</h3>
      <div className="amazon-book-list">
        {data.allStrapiAmazonLink.nodes.map(book => (
          <AmazonBook key={book.strapiId} srcUrl={book.srcUrl} />
        ))}
      </div>
    </>
  );
};

export default AmazonBookList;
