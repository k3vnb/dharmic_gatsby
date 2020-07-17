import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './ImageHero.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      strapiMainPageSubtitle {
        content
      }
      # dandelion: file(relativePath: { eq: "andreas-haslinger-dandelion.jpg" }) {
      #   childImageSharp {
      #     fluid {
      #       base64
      #       aspectRatio
      #       sizes
      #       src
      #       srcSet
      #     }
      #   }
      # }
      # lily: file(relativePath: { eq: "gautam-krishnan-lily.jpg" }) {
      #   childImageSharp {
      #     fluid {
      #       base64
      #       aspectRatio
      #       sizes
      #       src
      #       srcSet
      #     }
      #   }
      # }
      # moon: file(relativePath: { eq: "gaurav-pikale-moon.jpg" }) {
      #   childImageSharp {
      #     fluid {
      #       base64
      #       aspectRatio
      #       sizes
      #       src
      #       srcSet
      #     }
      #   }
      # }
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
    <div className="image-container">
      <Img
        fluid={data.cosmic.childImageSharp.fluid}
        alt="An image of the cosmos"
        imgStyle={{  maxHeight: '74vh', objectFit: 'cover', objectPosition: 'bottom' }}
      />
      <div className="hero-title">
        <h2 className="cinzel hero-title--top">Dharmic Astrology</h2>
        <h3 className="italianno hero-title--bottom">
          {data.strapiMainPageSubtitle.content}
        </h3>
      </div>
    </div>
  );
};
