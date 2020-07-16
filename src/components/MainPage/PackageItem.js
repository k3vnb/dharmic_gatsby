import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './MainPage.css';

const PackageItem = ({ itemDetails: { title, description, price, strapiId, picture }, image }) => {
  return (
    <article className="package-item__card">
      <Img
        fluid={picture.childImageSharp.fluid}
        alt={`${title} representation`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '200px',
          width: '100%',
          borderRadius: '8px 8px 0 0'
        }}
      />
      <h5 className="package-item__card-title">{title}</h5>
      <p className="package-item__card-description">{description}</p>
      <Link to={`/package/${strapiId}`}><button className="package-item__button">Find out more...</button></Link>
    </article>
  );
};

export default PackageItem;
