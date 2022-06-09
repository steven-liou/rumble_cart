import AddForm from './AddForm';

import ProductListing from './ProductListing';

const ProductDisplay = ({ onUpdateProduct, onDeleteProduct, onAddToCart }) => {
  return (
    <div>
      <ProductListing
        onUpdateProduct={onUpdateProduct}
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
      <AddForm />
    </div>
  );
};

export default ProductDisplay;
