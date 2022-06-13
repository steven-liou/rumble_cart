import { createContext, useReducer } from 'react';
import apiClient from '../lib/apiClient';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ITEMS_RECEIVED':
      return action.payload;
    default:
      return state;
  }
};

export const fetchCart = async (dispatch) => {
  const items = await apiClient.fetchCart();
  dispatch({ type: 'ITEMS_RECEIVED', payload: items });
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
