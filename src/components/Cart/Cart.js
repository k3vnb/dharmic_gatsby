import React from 'react';
import CartItem from './CartItem';
import SEO from '../seo';

const Cart = ({ cart, clearCart, setShowCheckout, cartPriceTotal }) => {
  const cartItemList = cart
    .sort((a, b) => a.id - b.id)
    .map(itemDetails => (
      <CartItem key={itemDetails.id} itemDetails={itemDetails} />
    ));
  return (
    <>
      <SEO title="Cart" />
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          {!cart.length && (
            <span className="empty-cart-message">
              Your cart is currently empty
            </span>
          )}
        </div>
        {!!cart.length && (
          <table className="cart__item-list">
            <thead>
              <tr>
                <th>Item</th>
                <th>
                  Cost <span className="table-header__subtext">(each)</span>
                </th>
                <th>Qty</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{cartItemList}</tbody>
          </table>
        )}
        {!!cart.length && (
          <>
            <p className="cart-total">
              Total: ${cartPriceTotal}{' '}
              <span className="cart-total__subtext">USD</span>
            </p>
            <div className="cart__btn-container">
              <button
                type="reset"
                className="btn cart__btn cart__btn--clear"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
              <button
                type="button"
                disabled={!cart.length}
                onClick={() => setShowCheckout(true)}
                aria-label="checkout"
                className="btn cart__btn cart__btn--checkout"
              >
                Initiate Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
