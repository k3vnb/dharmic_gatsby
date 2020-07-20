import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import FormPageLayout from '../formPageLayout';
import './Cart.css';

const CartContainer = ({ cart }) => {
  const cartItemList = cart.map(itemDetails => (
    <CartItem key={itemDetails.id} itemDetails={itemDetails} />
  ));
  return (
    <FormPageLayout>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          {!cart.length && <span className="empty-cart-message">Your cart is currently empty</span>}
        </div>
        {!!cart.length && (
          <table className="cart__item-list">
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost (each)</th>
                <th>Quantity</th>
                <th>Add / Subtract</th>
              </tr>
            </thead>
            <tbody>
              {cartItemList}
            </tbody>
          </table>
        )}
        <hr />
        <span>Total: ${cart.reduce((accumulator, item) => item.price + accumulator, 0)}</span>
        <div className="cart__button-container">
          <button className="cart__btn--clear">Clear Cart</button>
          <button className="cart__btn--checkout">Checkout</button>
        </div>
      </div>
    </FormPageLayout>
  )
}

const mapStateToProps = ({app}) => ({
  cart: app.cart,
});

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(CartContainer);
