import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';

const App = () => {
  const [cartItems, setCartItems] = useState({});

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

  return (
    <div id="app">
      <Header cartItems={cartItems} />
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
