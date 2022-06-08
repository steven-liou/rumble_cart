import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';

// import data from "../lib/data";
// TODO: Change cartItems state from array to hash

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      const data = res.data;
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await axios.get('/api/cart');
      const data = await res.data;
      const cart = data.reduce((total, item) => {
        total[item.productId] = item;
        return total;
      }, {});
      setCartItems(cart);
    };
    fetchCartItems();
  }, []);

  const handleAddProduct = async (newProduct, callback) => {
    const res = await axios.post('/api/products', newProduct);
    setProducts(products.concat(res.data));
    callback && callback();
  };

  const handleUpdateProduct = async (updateProduct, callback) => {
    const res = await axios.put(
      `/api/products/${updateProduct.id}`,
      updateProduct
    );
    const data = res.data;

    setProducts(
      products.map((product) => (product._id === data._id ? data : product))
    );
    callback && callback();
  };

  const handleDeleteProduct = async (productId, callback) => {
    await axios.delete(`/api/products/${productId}`);
    setProducts(products.filter((product) => product._id !== productId));
    callback && callback();
  };

  const handleAddToCart = async (productId) => {
    const res = await axios.post(`/api/add-to-cart`, { productId });
    const { product: updatedProduct, item } = await res.data;

    const cart = { ...cartItems };

    cart[item.productId].quantity =
      (cart[item.productId].quantity ? cart[item.productId].quantity : 0) + 1;

    setCartItems(cart);
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <main>
        <ProductDisplay
          products={products}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
};

export default App;

/*
App (Cart State, Product State)
  Header
    - Cart Summary
  Product Display
    Product Listing  
      - Product Component (wrapper around Product/Edit)
        - Edit Form Component
    Add A Product

useEffect triggered after the Component mounts to the VirtualDOM
React Component Lifecycle


Routes:
get products: GET /products
create product: POST /products
delete product: DELETE /products/:id
update product: PUT /products/:id
Add to cart: POST /add-to-cart
checkout POST /checkout
cart GET /cart
*/
