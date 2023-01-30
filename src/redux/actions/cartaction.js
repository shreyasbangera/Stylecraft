export const ADD_TO_CART = "ADD_TO_CART";
export const addtoCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const REMOVE_FROM_CART = "REMOVE_FORM_CART";
export const removefromCart = (itemId, quantity) => ({
  type: REMOVE_FROM_CART,
  itemId,
  quantity,
});

export const CHECKOUT_ORDER = "CHECKOUT_ORDER"
export const checkout = () => ({
  type: CHECKOUT_ORDER,
})
