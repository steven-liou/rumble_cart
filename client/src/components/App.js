import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';

const App = () => {
  // const handleAddToCart = async (productId) => {
  //   const { data } = await axios.post(`/api/add-to-cart`, { productId });
  //   const { product: updatedProduct, item } = data;

  /*
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
    */
  // };

  /*
  const handleCheckoutCart = async () => {
    const res = await axios.post('/api/checkout');
    setCartItems({});
  };
  */

  return (
    <div id="app">
      <Header />
      <main>
        <ProductDisplay />
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
