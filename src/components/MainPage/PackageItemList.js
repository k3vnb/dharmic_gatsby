import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PackageItem from './PackageItem';
// import ReactMarkdown from 'react-markdown';
import './MainPage.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hexagon: file(relativePath: { eq: "hexagonalpattern.png" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            originalImg
          }
        }
      }
      allStrapiPackageItem {
        nodes {
          price
          title
          description
          id
          strapiId
          picture {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="main-page__section">
      <h3 className="cinzel main-page__title">Services</h3>
      <div className="main-page__package-item-list">
        {data.allStrapiPackageItem.nodes
          .sort((a, b) => a.strapiId - b.strapiId)
          .map(item => (
            <PackageItem
              key={item.id}
              itemDetails={item}
              strapiId={item.strapiId}
              patternImage={data.hexagon.childImageSharp.fluid.originalImg}
            />
          ))}
      </div>
    </section>
  );
};
