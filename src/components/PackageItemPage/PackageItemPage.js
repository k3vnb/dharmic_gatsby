import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { connect } from 'react-redux';
import { addToCart } from '../../state/actions/actions';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import './PackageItemPage.css';

const PackageItemPage = ({
  strapiId,
  title,
  description,
  price,
  picture,
  addToCart,
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const handleAddToCartClick = () => {
    addToCart({ id: strapiId, title, description, price });
    toggleModal();
  };
  return (
    <section className="page package-item-page">
      <Img
        fluid={picture.childImageSharp.fluid}
        alt={`${title} representation`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '105vh',
          width: '100vw',
        }}
      />
      <article className="package-item-page__main-content--outer flex-center">
        <div className="package-item-page__main-content--inner">
          <h2 className="package-item-page__title">{title}</h2>
          <div className="package-item-page__description">
            <ReactMarkdown source={description} />
            <p className="package-item-page__price">Price: ${price} USD</p>
            <p className="package-item-page__subtext">
              *ask about special sliding scale rates for those that have
              restricted income.{' '}
            </p>
            <button
              type="button"
              className="package-item-page__btn--add-to-cart btn"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
      {showModal && (
        <div className="package-item__modal--outer flex-center">
          <div className="package-item__modal--inner">
            <button type="button" aria-label="close" className="package-item__modal-close-btn btn" onClick={toggleModal}>
              &times;
            </button>
            Thank you, you have added this item to the cart.
            <AniLink to="/cart">
              <button type="button" className="package-item__modal-redirect-btn btn">Go to Cart</button>
            </AniLink>
          </div>
        </div>
      )}
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(PackageItemPage);
