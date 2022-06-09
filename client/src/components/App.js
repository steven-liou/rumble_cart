import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';

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
      const { data } = await axios.get('/api/cart');
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

    if (callback) {
      callback();
    }
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
    if (callback) {
      callback();
    }
  };

  const handleDeleteProduct = async (productId, callback) => {
    await axios.delete(`/api/products/${productId}`);
    setProducts(products.filter((product) => product._id !== productId));
    if (callback) {
      callback();
    }
  };

  const handleAddToCart = async (productId) => {
    const { data } = await axios.post(`/api/add-to-cart`, { productId });
    const { product: updatedProduct, item } = data;

    if (!item) {
      return;
    }
    const cart = { ...cartItems };
    cart[item.productId] = item;

    setCartItems(cart);
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  const handleCheckoutCart = async () => {
    const res = await axios.post('/api/checkout');
    setCartItems({});
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckoutCart={handleCheckoutCart} />
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

// Learnings
  - review API Documentation
  - considering edge case when we run out of products

*/
