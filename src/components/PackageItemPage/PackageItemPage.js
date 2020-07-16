import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import './PackageItemPage.css';

const PackageItemPage = ({ title, description, price, picture }) => {
  return (
    <section className="page package-item-page">
      <Img
        fluid={picture.childImageSharp.fluid}
        alt={`${title} representation`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '80vh',
          width: '100%',
        }}
      />
      <article className="package-item-page__main-content">
        <h2 className="package-item-page__title">{title}</h2>
        <div className="package-item-page__description">
          <ReactMarkdown source={description} />
          <p>Price: ${price}</p>
        </div>
      </article>
    </section>
  );
};

export default PackageItemPage;
