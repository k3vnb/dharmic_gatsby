import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './ImageHero.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      dandelion: file(relativePath: { eq: "andreas-haslinger-dandelion.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <div className="image-container">
      <Img fluid={data.dandelion.childImageSharp.fluid} alt="A peaceful dandelion" style={{  objectFit: 'cover', objectPosition: 'center' }} imgStyle={{ height: '70vh' }} />
    </div>
  );
};
