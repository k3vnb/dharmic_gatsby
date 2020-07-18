import React from 'react';
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './MainPage.css';

const PackageItem = ({ itemDetails: { title, description, price, strapiId, picture }, patternImage }) => {
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
      <h5 className="package-item__card-title" style={{ backgroundImage: `url(${patternImage})`, backgroundSize: '15%' }}>{title}</h5>
      <p className="package-item__card-description">{description}</p>
      <AniLink fade duration={0.25} to={`/package/${strapiId}`}><button className="package-item__button">Find out more...</button></AniLink>
    </article>
  );
};

export default PackageItem;
