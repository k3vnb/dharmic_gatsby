import React from 'react';
import { connect } from 'react-redux';
import { increaseInCart, decreaseFromCart, removeFromCart } from '../../state/actions/actions';

const CartItemControls = ({ id, increaseInCart, decreaseFromCart, removeFromCart }) => {
  return (
    <>
      <button
        className="cart-item-control-btn cart-item-control-btn--increase"
        type="button"
        aria-label="increase item"
        onClick={() => increaseInCart(id)}
      >
        +
      </button>
      <button
        className="cart-item-control-btn cart-item-control-btn--decrease"
        type="button"
        aria-label="decrease item"
        onClick={() => decreaseFromCart(id)}
      >
        -
      </button>
      <button
        className="cart-item-control-btn cart-item-control-btn--remove"
        type="button"
        aria-label="remove item"
        onClick={() => removeFromCart(id)}
      >
        Remove
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  increaseInCart: id => dispatch(increaseInCart(id)),
  decreaseFromCart: id => dispatch(decreaseFromCart(id)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CartItemControls);
