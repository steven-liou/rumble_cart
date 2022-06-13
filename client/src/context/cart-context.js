import { createContext, useReducer } from 'react';
import apiClient from '../lib/apiClient';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ITEMS_RECEIVED':
      return action.payload;
    case 'CHECKOUT':
      return [];
    default:
      return state;
  }
};

export const fetchCart = async (dispatch) => {
  const items = await apiClient.fetchCart();
  dispatch({ type: 'ITEMS_RECEIVED', payload: items });
};

export const checkoutCart = async (dispatch) => {
  await apiClient.checkoutCart();
  dispatch({ type: 'CHECKOUT' });
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
