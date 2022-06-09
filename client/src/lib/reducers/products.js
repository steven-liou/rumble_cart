// initial state for the products -> useEffect -> fetch all the products
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
    default:
      return state;
  }
};

export default products;
