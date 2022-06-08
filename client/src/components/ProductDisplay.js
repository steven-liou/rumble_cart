import AddForm from './AddForm';

import { useState } from 'react';
import ProductListing from './ProductListing';

const ProductDisplay = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onAddToCart,
}) => {
  return (
    <div>
      <ProductListing
        products={products}
        onUpdateProduct={onUpdateProduct}
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
      <AddForm onAddProduct={onAddProduct} />
    </div>
  );
};

export default ProductDisplay;
