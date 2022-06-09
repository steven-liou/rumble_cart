import products from './products';
import cart from './cart';

const rootReducer = (state = {}, action) => {
  return {
    products: products(state.products, action),
    cart: cart(state.cart, action),
  };
};

export default rootReducer;
