import {
  TOGGLE_MODAL,
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
    case TOGGLE_MODAL:
      return { ...state, isModalShown: payload };
    case ADD_TO_CART:
      let newCartWithAddition;
      const currentCartItem = state.cart.find(({ id }) => id === payload.id);
      if (!currentCartItem) {
        newCartWithAddition = [
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
        newCartWithAddition = [
          ...state.cart.filter(({ id }) => id !== currentCartItem.id),
          currentCartItem,
        ];
      }
      return { ...state, cart: newCartWithAddition };
    case DECREASE_FROM_CART:
      return state;
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
