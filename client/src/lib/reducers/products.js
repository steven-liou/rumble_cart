const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    case 'ADD_PRODUCT': {
      return state.concat(action.payload);
    }
    case 'UPDATE_PRODUCT': {
      const id = action.payload._id;
      return state.map((product) =>
        product._id === id ? action.payload : product
      );
    }
    case 'DELETE_PRODUCT': {
      const id = action.payload;
      return state.filter((product) => product._id !== id);
    }
    case 'ADD_PRODUCT_TO_CART': {
      const updatedProduct = action.payload.updatedProduct;
      return state.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
    }
    default:
      return state;
  }
};

export default products;
