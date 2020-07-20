import React from 'react';
import CartItem from './CartItem';

const CartContainer = ({ cart = []}) => {
  const cartItemList = cart.map(cartItem => (
    <CartItem />
  ))
  return (
    <section className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        {!cart.length && <span className="empty-cart-message">You cart is currently empty</span>}
      </div>
      {!!cart.length && (
        <article>
          {cartItemList}
        </article>
      )}
    </section>
  )
}

export default CartContainer;
