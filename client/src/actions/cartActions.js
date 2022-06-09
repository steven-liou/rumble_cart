export const receiveCartItems = (cart) => {
  return {
    type: 'CART_RECEIVED',
    payload: cart,
  };
};
