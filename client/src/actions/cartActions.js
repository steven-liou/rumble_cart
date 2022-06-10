export const receiveCartItems = (cart) => {
  return {
    type: 'CART_RECEIVED',
    payload: cart,
  };
};

export const addProductToCart = ((payload)  => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload,
  }
})

export const checkoutCart = () => ({ type: 'CHECKOUT_CART' });
