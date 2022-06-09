// initial state for the cart -> useEffect -> fetch all the cart items
const cart = (state = {}, action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default cart;
