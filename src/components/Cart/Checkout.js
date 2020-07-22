import React from 'react';
import SEO from '../seo';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const Checkout = ({ setShowCheckout }) => {
  return (
    <>
      <SEO title="checkout" />
      <div>Checkout</div>
      <div className="cart__btn-container">
              <button
                type="reset"
                className="btn cart__btn cart__btn--clear"
                onClick={() => setShowCheckout(false)}
              >
                Go Back to Cart
              </button>
              <button
                type="button"
                // disabled={!cart.length}
                onClick={() => alert('click')}
                aria-label="checkout"
                className="btn cart__btn cart__btn--checkout"
              >
                Checkout
              </button>
            </div>
    </>
  )
}

export default Checkout;
