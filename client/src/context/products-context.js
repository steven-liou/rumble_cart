import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

export const ProductContext = createContext(); // returns initial state of ProductContext

/*
{
  products: productsReducer(),
}


1 - creates the Context
2 - initialState is empty (undefined)

*/

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
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

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
