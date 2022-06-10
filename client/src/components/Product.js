import EditForm from './EditForm.js';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteProduct } from '../features/products/products';
import { addProductToCart } from '../features/cart/cart';

const Product = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();
  const productId = product._id;

  const handleOnDeleteProduct = async (e) => {
    e.preventDefault();

    if (!window.confirm(`Are you sure you want to delete ${product.title} ?`)) {
      return;
    }

    dispatch(deleteProduct(productId));
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product._id));
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price && product.price.toFixed(2)}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <a
            className={`button add-to-cart ${
              product.quantity === 0 ? 'disabled' : ''
            }`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </a>
          <EditForm product={product} />
        </div>
        <a className="delete-button" onClick={(e) => handleOnDeleteProduct(e)}>
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
