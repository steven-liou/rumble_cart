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

const editProduct = async (editedProduct, dispatch, callback) => {
  const { data } = await axios.put(
    `/api/products/${editedProduct.id}`,
    editedProduct
  );
  const product = productWithId(data);
  dispatch({ type: 'PRODUCT_EDITED', payload: product });

  if (callback) {
    callback();
  }
};

export default { fetchProducts, addProduct, editProduct };
