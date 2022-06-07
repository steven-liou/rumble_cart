import AddProductForm from './AddProductForm';
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
      <AddProductForm onAddProduct={onAddProduct} />
    </div>
  );
};

export default ProductDisplay;
