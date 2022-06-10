import Header from './Header';
import ProductDisplay from './ProductDisplay';

const App = () => {
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
