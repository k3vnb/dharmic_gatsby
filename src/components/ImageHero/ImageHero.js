import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
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
    // <div className="image-container">
    //   <Img
    //     fluid={data.cosmic.childImageSharp.fluid}
    //     alt="An image of the cosmos"
    //     imgStyle={{  maxHeight: '74vh', objectFit: 'cover', objectPosition: 'bottom' }}
    //   />
    //   <div className="hero-title">
    //     <h2 className="cinzel hero-title--top">Dharmic Astrology</h2>
    //   </div>
    //   <div className="hero-subtitle">
    //     <h3 className="italianno hero-title--bottom">
    //       {data.strapiMainPageSubtitle.content}
    //     </h3>
    //   </div>
    // </div>
    <section
      className="hero-container"
      style={{
        backgroundImage: `url(${data.cosmic.childImageSharp.fluid.src})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      {/* <div className="hero-title"> */}
        <h2 className="cinzel hero-text hero-title">Dharmic Astrology</h2>
      {/* </div> */}
      <h3 className="italianno hero-text hero-subtitle">
          {data.strapiMainPageSubtitle.content}
       </h3>
    </section>
  );
};
