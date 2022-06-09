export const productsReceived = (products) => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: products,
  };
};

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};
