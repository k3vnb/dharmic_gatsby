import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../state/actions/actions';
import Cart from './Cart';
import Checkout from './Checkout';
import FormPageLayout from '../formPageLayout';
import './Cart.css';

const CartContainer = ({ cart = [], clearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartPriceTotal = cart.reduce(
    (accumulator, item) => item.quantity * item.price + accumulator,
    0
  );

  return (
    <FormPageLayout>
      {!showCheckout && (
        <Cart
          cart={cart}
          clearCart={clearCart}
          setShowCheckout={setShowCheckout}
          cartPriceTotal={cartPriceTotal}
        />
      )}
      {showCheckout && <Checkout setShowCheckout={setShowCheckout} />}
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
