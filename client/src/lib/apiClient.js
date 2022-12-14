import axios from 'axios';

const productWithId = (object) => {
  const copy = { ...object };
  copy.id = object._id;
  delete copy._id;
  return copy;
};

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  const products = data.map((product) => productWithId(product));
  return products;
};

const addProduct = async (product) => {
  const { data } = await axios.post('/api/products', product);
  const addedProduct = productWithId(data);
  return addedProduct;
};

const editProduct = async (editedProduct) => {
  const { data } = await axios.put(
    `/api/products/${editedProduct.id}`,
    editedProduct
  );
  const product = productWithId(data);
  return product;
};

const deleteProduct = async (productId) => {
  await axios.delete(`api/products/${productId}`);
  return;
};

const fetchCart = async () => {
  const { data } = await axios.get('/api/cart');
  const cartItems = data.map((product) => productWithId(product));
  return cartItems;
};

const checkoutCart = async () => {
  await axios.post('/api/checkout');
};

const addProductToCart = async (productId) => {
  const { data } = await axios.post('/api/add-to-cart', { productId });
  let { product, item } = data;
  product = productWithId(product);
  item = productWithId(item);
  return [product, item];
};

const apiClient = {
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
  fetchCart,
  checkoutCart,
  addProductToCart,
};

export default apiClient;
