import React from 'react';
import Img from 'gatsby-image';
import './MainPage.css';

const PackageItem = ({ itemDetails: { title, description, price }, image }) => {
  return (
    <article className="package-item__card">
      <Img
        fluid={image}
        alt={`${title} representation`}
        style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }}
        imgStyle={{ height: '70vh', objectPosition: 'center' }}
      />
      <h5 className="package-item__card-title">{title}</h5>
      <p className="package-item__card-description">{description}</p>
    </article>
  );
};

export default PackageItem;
