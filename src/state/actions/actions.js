

import * as types from '../constants/types'

export const toggleCart = prevState => ({ type: types.TOGGLE_CART, payload: !prevState });
export const addToCart = item => ({ type: types.ADD_TO_CART, payload: item });
export const decreaseFromCart = ({ id }) => ({ type: types.DECREASE_FROM_CART, payload: id });
export const removeFromCart = ({ id }) => ({ type: types.REMOVE_FROM_CART, payload: id });
export const clearCart = ({ id }) => ({ type: types.REMOVE_FROM_CART, payload: id });
