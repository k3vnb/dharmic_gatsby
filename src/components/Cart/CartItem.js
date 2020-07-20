import React from 'react';

const CartItem = ({ itemDetails }) => {
  const { price, quantity, details } = itemDetails;
  return (
    <div className="cart-item-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '.7rem' }}><strong>{details.title}</strong></div>
      <div>Price: ${price} each</div>
      <div>Quantity: {quantity}</div>
    </div>
  );
};

export default CartItem;
