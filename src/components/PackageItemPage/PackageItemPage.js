import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../state/app';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import './PackageItemPage.css';
import state from '../../state';

const PackageItemPage = ({ title, description, price, picture, toggleCart, isCartShown }) => {
  return (
    <section className="page package-item-page">
      <Img
        fluid={picture.childImageSharp.fluid}
        alt={`${title} representation`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '80vh',
          width: '100%',
        }}
      />
      <article className="package-item-page__main-content">
        <h2 className="package-item-page__title">{title}</h2>
        <div className="package-item-page__description">
          <ReactMarkdown source={description} />
          <p>Price: ${price}</p>
          <button type="button" onClick={() => toggleCart(isCartShown)}>Add to Cart</button>
          <p className="package-item-page__subtext">*ask about special sliding scale rates for those that have restricted income. </p>
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = ({ app }) => ({
  isCartShown: app.isCartShown,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: (prevState) => dispatch(toggleCart(prevState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PackageItemPage);
