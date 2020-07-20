import {
  TOGGLE_CART,
  ADD_TO_CART,
  DECREASE_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from './constants/types';

const initialState = {
  isCartShown: false,
  cart: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return { ...state, isCartShown: payload };
    case ADD_TO_CART:
      let newCartWithAdd;
      const currentCartItem = state.cart.find(({ id }) => id === payload.id);
      if (!currentCartItem) {
        newCartWithAdd = [
          ...state.cart,
          {
            id: payload.id,
            details: payload,
            price: payload.price,
            quantity: 1,
          },
        ];
      } else {
        currentCartItem.quantity = currentCartItem.quantity += 1;
        newCartWithAdd = [
          ...state.cart.filter(({ id }) => id !== currentCartItem.id),
          currentCartItem,
        ];
      }
      return { ...state, cart: newCartWithAdd };
    case REMOVE_FROM_CART:
      const newCartWithRemove = state.cart.filter(
        item => item.id !== payload.id
      );
      return { ...state, cart: newCartWithRemove };
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
