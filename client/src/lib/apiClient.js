import axios from 'axios';

const fetchProducts = async () => {
  const res = await axios.get('/api/products');
  return res.data;
};

const addProduct = async (newProduct) => {
  const res = await axios.post('/api/products', newProduct);
  return res.data;
};

const updateProduct = async (updatedProduct) => {
  const res = await axios.put(
    `/api/products/${updatedProduct.id}`,
    updatedProduct
  );
  return res.data;
};

const deleteProduct = async (productId) => {
  await axios.delete(`/api/products/${productId}`);
};

const fetchCart = async () => {
  const res = await axios.get('/api/cart');
  const cart = res.data.reduce((total, item) => {
    total[item.productId] = item;
    return total;
  }, {});
  return cart;
};

const addProductToCart = async (productId) => {
  const res = await axios.post('/api/add-to-cart', { productId });
  return res.data;
};

const checkoutCart = async () => {
  await axios.post('/api/checkout');
};

export default {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchCart,
  addProductToCart,
  checkoutCart,
};
