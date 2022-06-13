import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    case 'PRODUCT_ADDED': {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
};

export const fetchProducts = async (dispatch) => {
  const { data } = await axios.get('/api/products');
  dispatch({ type: 'PRODUCTS_RECEIVED', payload: data });
};

export const addProduct = async (product, dispatch, callback) => {
  const { data } = await axios.post('/api/products', product);
  dispatch({ type: 'PRODUCT_ADDED', payload: data });

  if (callback) {
    callback();
  }
};

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
