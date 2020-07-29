import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { clearCart } from '../../state/actions/actions';
import Cart from './Cart';
import Checkout from './Checkout';
import FormPageLayout from '../formPageLayout';
import './Cart.css';

const CartContainer = ({ cart = [], clearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const toggleShowCheckout = () => setShowCheckout(!showCheckout);
  const cartPriceTotal = cart.reduce(
    (accumulator, item) => item.qty * item.price + accumulator,
    0
  );

  return (
    <FormPageLayout>
      {!showCheckout && (
        <Cart
          cart={cart}
          clearCart={clearCart}
          toggleShowCheckout={toggleShowCheckout}
          cartPriceTotal={cartPriceTotal}
        />
      )}
      {showCheckout && (
        <Elements
          stripe={loadStripe(
            'pk_test_51H7WKdLSCTbrWtlC7Iuw65Pqax1PqK9hxZEsaSvSyeiwuxCdTChpvP68PUcyeN6rDdEu8kFJvlajMGpGDaIN55jD00DB7YSpGk'
          )}
        >
          <Checkout toggleShowCheckout={toggleShowCheckout} cart={cart} clearCart={clearCart} />
        </Elements>
      )}
    </FormPageLayout>
  );
};

const mapStateToProps = ({ app }) => ({
  cart: app.cart,
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
