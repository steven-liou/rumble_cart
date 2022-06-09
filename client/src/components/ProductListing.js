import Product from './Product';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsReceived } from '../actions/productActions';

const ProductListing = ({ onAddToCart }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      const data = res.data;
      dispatch(productsReceived(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductListing;
