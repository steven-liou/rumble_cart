import { createContext, useReducer } from 'react';
import apiClient from '../lib/apiClient';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ITEMS_RECEIVED':
      return action.payload;
    case 'CHECKOUT':
      return [];
    case 'PRODUCT_ADDED_TO_CART':
      const addedItem = action.payload;
      const cartItems = state;
      const exists = cartItems.find((item) => item.id === addedItem.id);

      if (!exists) {
        return cartItems.concat(addedItem);
      } else {
        return cartItems.map((item) =>
          item.id === addedItem.id ? addedItem : item
        );
      }

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

export const addProductToCart = async (
  productId,
  dispatchProduct,
  dispatchCart
) => {
  const [product, item] = await apiClient.addProductToCart(productId);
  const message = 'PRODUCT_ADDED_TO_CART';
  dispatchCart({ type: message, payload: item });
  dispatchProduct({ type: message, payload: product });
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
