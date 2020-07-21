import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './ImageHero.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      strapiMainPageSubtitle {
        content
      }
      cosmic: file(relativePath: { eq: "greg-rakozy-cosmic.jpg" }) {
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
    <section
      className="hero-container"
      style={{
        backgroundImage: `url(${data.cosmic.childImageSharp.fluid.src})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <h2 className="cinzel hero-text hero-title">Dharmic Astrology</h2>
      <h3 className="tangerine hero-text hero-subtitle">
        {data.strapiMainPageSubtitle.content}
      </h3>
    </section>
  );
};
