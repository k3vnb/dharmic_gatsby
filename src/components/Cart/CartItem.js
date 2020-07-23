import React from 'react';
import CartItemControls from './CartItemControls';

const CartItem = ({ itemDetails }) => {
  const { price, qty, details, id } = itemDetails;

  return (
    <tr>
      <td className="cart-item-container" style={{ fontSize: '.7rem' }}>
        <strong>{details.title}</strong>
      </td>
      <td>${price}</td>
      <td>{qty}</td>
      <td>
        <CartItemControls
          id={id}
        />
      </td>
    </tr>
  );
};

export default CartItem;
