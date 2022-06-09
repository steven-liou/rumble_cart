import AddForm from './AddForm';

import ProductListing from './ProductListing';

const ProductDisplay = ({ onAddToCart }) => {
  return (
    <div>
      <ProductListing
        onAddToCart={onAddToCart}
      />
      <AddForm />
    </div>
  );
};

export default ProductDisplay;
