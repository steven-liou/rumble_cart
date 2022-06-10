import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products';
import cartReducer from '../features/cart/cart';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
