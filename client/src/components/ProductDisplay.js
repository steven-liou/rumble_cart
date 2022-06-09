import AddForm from './AddForm';

import ProductListing from './ProductListing';

const ProductDisplay = ({ onDeleteProduct, onAddToCart }) => {
  return (
    <div>
      <ProductListing
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
      <AddForm />
    </div>
  );
};

export default ProductDisplay;
