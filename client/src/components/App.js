import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductDisplay from "./ProductDisplay";

import data from "../lib/data";

const App = () => {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <div id="app">        
        <Header />
        <main>
          <ProductDisplay products={products}/>
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
    Product List  
      - Product Component (wrapper around Product/Edit)
        - Edit Form Component
    Add A Product

useEffect triggered after the Component mounts to the VirtualDOM
React Component Lifecycle

*/
