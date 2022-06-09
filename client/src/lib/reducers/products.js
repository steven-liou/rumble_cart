// initial state for the products -> useEffect -> fetch all the products
const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    case 'ADD_PRODUCT': {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};

export default products;
