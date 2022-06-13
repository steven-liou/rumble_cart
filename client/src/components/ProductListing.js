import { useEffect, useContext } from 'react';
import Product from './Product';
import { ProductContext, fetchProducts } from '../context/products-context';

const ProductListing = () => {
  const { products, dispatch: dispatchProduct } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(dispatchProduct);
  }, [dispatchProduct]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductListing;
