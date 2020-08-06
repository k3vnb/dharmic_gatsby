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
          title
          strapiId
          img_url
        }
      }
    }
  `);
  return (
    <div className="amazon-link-section">
      <h3 className="cinzel main-page__title">Recommended Reading</h3>
      <div className="amazon-book-list">
        {data.allStrapiAmazonLink.nodes.map(book => (
          <AmazonBook
            key={book.strapiId}
            srcUrl={book.srcUrl}
            title={book.title}
            imgUrl={book.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default AmazonBookList;
