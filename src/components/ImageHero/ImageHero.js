import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './ImageHero.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "andreas-haslinger-dandelion.jpg" }) {
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
    <Fragment>
      <Img fluid={data.file.childImageSharp.fluid} alt="A peaceful dandelion" />
    </Fragment>
  );
};
