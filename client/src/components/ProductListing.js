import Product from './Product';

const ProductListing = ({
  products,
  onUpdateProduct,
  onDeleteProduct,
  onAddToCart,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            product={product}
            onUpdateProduct={onUpdateProduct}
            onDeleteProduct={onDeleteProduct}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductListing;
