import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../state/actions/actions';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import './PackageItemPage.css';

const PackageItemPage = ({ strapiId, title, description, price, picture, addToCart, isModalShown }) => {
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
          <button type="button" onClick={() => addToCart({id: strapiId, title, description, price})}>Add to Cart</button>
          <p className="package-item-page__subtext">*ask about special sliding scale rates for those that have restricted income. </p>
        </div>
      </article>
      <div className="package-item__modal">
        <button>Close</button>
        Thank you, you have added this item to the cart.
        <button>Go to Cart</button>
      </div>
    </section>
  );
};

const mapStateToProps = ({ app }) => ({
  isCartShown: app.isCartShown,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PackageItemPage);
