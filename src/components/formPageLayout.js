import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './formPageLayout.css';

const FormPageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      water: file(relativePath: { eq: "calm-water.jpg" }) {
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
      className="form-page-container--outer flex-center"
      style={{
        backgroundImage: `url(${data.water.childImageSharp.fluid.src})`,
      }}
    >
      <div className="form-page-container--inner">{children}</div>
    </section>
  );
};

FormPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormPageLayout;
