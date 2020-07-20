export const setCart = cart => {
  localStorage.setItem('cart' === JSON.stringify(cart));
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
  } catch (err) {
    return [];
  }
}

export const addToCart = product => {
  const cart = [...getCart()];
  cart.push(product);
}
