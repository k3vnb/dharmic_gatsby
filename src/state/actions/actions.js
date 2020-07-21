import * as types from '../constants/types'

export const toggleModal = prevState => ({ type: types.TOGGLE_MODAL, payload: !prevState });
export const addToCart = item => ({ type: types.ADD_TO_CART, payload: item });
export const increaseInCart = id => ({ type: types.INCREASE_IN_CART, payload: id });
export const decreaseFromCart = id => ({ type: types.DECREASE_FROM_CART, payload: id });
export const removeFromCart = id => ({ type: types.REMOVE_FROM_CART, payload: id });
export const clearCart = () => ({ type: types.CLEAR_CART, payload: null });
