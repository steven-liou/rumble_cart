import ProductInput from './ProductInput';
import { useState, useContext } from 'react';

import { ProductContext, editProduct } from '../context/products-context';

const EditForm = ({ product }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [title, setProduct] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const { dispatch } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(title && price && quantity)) {
      alert('All fields must be filled');
      return;
    }
    const editedProduct = {
      title: title,
      price: price,
      quantity: quantity,
      id: product.id,
    };

    editProduct(editedProduct, dispatch, clearInputs);
  };

  const clearInputs = () => {
    setProduct('');
    setPrice('');
    setQuantity('');
    setShowEditForm(false);
  };

  if (showEditForm) {
    return (
      <div className="add-form visible">
        <h3>Edit Product</h3>
        <form>
          <ProductInput
            title="Product Name"
            id="product-name"
            state={title}
            setState={setProduct}
          />
          <ProductInput
            title="Price"
            id="product-price"
            state={price}
            setState={setPrice}
          />
          <ProductInput
            title="Quantity"
            id="product-quantity"
            state={quantity}
            setState={setQuantity}
          />
          <div className="actions form-actions">
            <a className="button" onClick={(e) => handleSubmit(e)}>
              Update
            </a>
            <a className="button" onClick={() => setShowEditForm(false)}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <a className="button edit" onClick={() => setShowEditForm(true)}>
        Edit
      </a>
    );
  }
};

export default EditForm;
