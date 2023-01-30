import {
  ADD_TO_CART,
  CHECKOUT_ORDER,
  REMOVE_FROM_CART,
} from "../actions/cartaction";

const initialState = {
  cart: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingitem = state.cart.find(
        (item) => item.id === action.item.id
      );
      if (existingitem) {
        existingitem.quantity += 1;
        return {
          ...state,
          count: state.count + 1,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
          count: state.count + 1,
        };
      }
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.itemId),
        count: state.count - action.quantity,
      };
    case CHECKOUT_ORDER:
      return {
        cart: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default reducer;
