import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import FormPageLayout from '../formPageLayout';

const CartContainer = ({ cart }) => {
  console.log(cart)
  const cartItemList = cart.map(itemDetails => (
    <CartItem key={itemDetails.id} itemDetails={itemDetails} />
  ));
  return (
    <FormPageLayout>
      <div className="cart-header">
        <h2>Your Cart</h2>
        {!cart.length && <span className="empty-cart-message">You cart is currently empty</span>}
      </div>
      {!!cart.length && (
        <article>
          {cartItemList}
        </article>
      )}
      <hr />
      <span>Total: ${cart.reduce((accumulator, item) => item.price + accumulator, 0)}</span>
    </FormPageLayout>
  )
}

const mapStateToProps = ({app}) => ({
  cart: app.cart,
});

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(CartContainer);
