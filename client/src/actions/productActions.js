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

export const updateProduct = (updatedProduct) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: updatedProduct,
  };
};

export const deleteProduct = (productID) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productID,
  };
};
