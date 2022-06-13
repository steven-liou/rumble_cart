import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import apiClient from '../lib/apiClient';

export const ProductContext = createContext();

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    case 'PRODUCT_ADDED': {
      return state.concat(action.payload);
    }
    case 'PRODUCT_EDITED': {
      return state.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    }
    default: {
      return state;
    }
  }
};

export const fetchProducts = async (dispatch) => {
  const products = await apiClient.fetchProducts();
  dispatch({ type: 'PRODUCTS_RECEIVED', payload: products });
};

export const addProduct = async (product, dispatch, callback) => {
  const addedProduct = await apiClient.addProduct(product);
  dispatch({ type: 'PRODUCT_ADDED', payload: addedProduct });

  if (callback) {
    callback();
  }
};

export const editProduct = async (editedProduct, dispatch, callback) => {
  const { data } = await axios.put(
    `/api/products/${editedProduct.id}`,
    editedProduct
  );
  dispatch({ type: 'PRODUCT_EDITED', payload: data });

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
