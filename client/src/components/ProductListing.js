import { useEffect, useContext } from 'react';
import Product from './Product';
import { ProductContext, fetchProducts } from '../context/products-context';

const ProductListing = ({ onUpdateProduct, onDeleteProduct, onAddToCart }) => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
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
