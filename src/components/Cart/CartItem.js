import React from 'react';

const CartItem = ({ itemDetails }) => {
  const { price, quantity, details } = itemDetails;
  return (
    // <div className="cart-item-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <tr>
      <td style={{ fontSize: '.7rem' }}><strong>{details.title}</strong></td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td><button>Buttons</button></td>
    </tr>
    // </div>
  );
};

export default CartItem;
