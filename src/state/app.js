import {
  TOGGLE_MODAL,
  ADD_TO_CART,
  INCREASE_IN_CART,
  DECREASE_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from './constants/types';
import { setLocalStorageApp } from '../utils/localStorage';

export const initialState = {
  isCartShown: false,
  cart: [],
};

const getCurrentCartItem = (cart, id) =>
  cart.find(cartItem => cartItem.id === id);

const getNewCart = (cart, currentCartItem) => [
  ...cart.filter(({ id }) => id !== currentCartItem.id),
  currentCartItem,
];

const decreaseCartItemQuantity = (cart, currentCartItem) => {
  if (currentCartItem.quantity === 0) {
    return cart;
  }
  currentCartItem.quantity = currentCartItem.quantity -= 1;
  return getNewCart(cart, currentCartItem);
};

const increaseCartItemQuantity = (cart, currentCartItem) => {
  currentCartItem.quantity = currentCartItem.quantity += 1;
  return getNewCart(cart, currentCartItem);
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return { ...state, isModalShown: payload };
    case ADD_TO_CART:
      let newCartWithAddition;
      let currentCartItem = getCurrentCartItem(state.cart, payload.id);
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
        newCartWithAddition = increaseCartItemQuantity(
          state.cart,
          currentCartItem
        );
      }
      setLocalStorageApp({ ...state, cart: newCartWithAddition });
      return { ...state, cart: newCartWithAddition };
    case INCREASE_IN_CART:
      currentCartItem = getCurrentCartItem(state.cart, payload);
      if (!currentCartItem) return state;
      const newCartWithIncrease = increaseCartItemQuantity(
        state.cart,
        currentCartItem
      );
      return { ...state, cart: newCartWithIncrease };
    case DECREASE_FROM_CART:
      currentCartItem = getCurrentCartItem(state.cart, payload);
      if (!currentCartItem) return state;
      const newCartWithDecrease = decreaseCartItemQuantity(
        state.cart,
        currentCartItem
      );
      setLocalStorageApp({ ...state, cart: newCartWithDecrease });
      return { ...state, cart: newCartWithDecrease };
    case REMOVE_FROM_CART:
      const newCartWithRemove = state.cart.filter(
        item => item.id !== payload
      );
      setLocalStorageApp({ ...state, cart: newCartWithRemove });
      return { ...state, cart: newCartWithRemove };
    case CLEAR_CART:
      setLocalStorageApp({ ...state, cart: [] });
      return { ...state, cart: [] };
    default:
      return state;
  }
};
