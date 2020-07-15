import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PackageItem from './PackageItem';
import ReactMarkdown from 'react-markdown';
import './MainPage.css';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPackageItem {
        nodes {
          price
          title
          description
          id
          strapiId
        }
      }
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
      water: file(relativePath: { eq: "beach-dawn-dusk.jpg" }) {
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
      sunTree: file(relativePath: { eq: "sun-through-tree.jpg" }) {
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
  const images = [data.dandelion, data.sunTree, data.water]
  return (
    <section className="main-page__section">
      <h3 className="cinzel main-page__title">Services</h3>
      <div className="main-page__package-item-list">
        {data.allStrapiPackageItem.nodes.sort((a, b) => a.strapiId - b.strapiId).map((item, index) => (
          <PackageItem key={item.id} itemDetails={item} image={images[index].childImageSharp.fluid} />
        ))}
      </div>
    </section>
  );
};
