import EditForm from './EditForm.js';
import { ProductContext, deleteProduct } from '../context/products-context.js';
import { useContext } from 'react';

const Product = ({ product, onAddToCart }) => {
  const { dispatch: dispatchProduct } = useContext(ProductContext);
  const handleOnDeleteProduct = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${product.title} ?`)) {
      deleteProduct(product.id, dispatchProduct);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(product.id);
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
