const cart = (state = {}, action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload;
    }
    case 'CHECKOUT_CART': {
      return {};
    }
    case 'ADD_PRODUCT_TO_CART': {
      const cart = { ...state };
      cart[action.payload.item.productId] = action.payload.item;
      return cart;
    }
    default:
      return state;
  }
};

export default cart;
