import axios from 'axios';

const fetchProducts = async () => {
  const res = await axios.get('/api/products');
  return res.data;
};

const addProduct = async (newProduct) => {
  const res = await axios.post('/api/products', newProduct);
  return res.data;
};

const editProduct = async (updatedProduct) => {
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

export default { fetchProducts, addProduct, editProduct, fetchCart };
