const initialState = {
  isCartShown: false,
};

const TOGGLE_CART = 'TOGGLE_CART';
export const toggleCart = prevState => ({ type: TOGGLE_CART, payload: !prevState });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return { ...state, isCartShown: payload };
    default:
      return state;
  }
};
