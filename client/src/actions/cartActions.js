export const receiveCartItems = (cart) => {
  return {
    type: 'CART_RECEIVED',
    payload: cart,
  };
};

export const checkoutCart = () => ({ type: 'CHECKOUT_CART' });
