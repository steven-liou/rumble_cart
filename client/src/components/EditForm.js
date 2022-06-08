import ProductInput from './ProductInput';
import { useState } from 'react';

const EditForm = ({ onUpdateProduct, product }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [title, setProduct] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(title && price && quantity)) {
      alert('All fields must be filled');
      return;
    }
    const newProduct = {
      title: title,
      price: price,
      quantity: quantity,
      id: product._id,
    };
    onUpdateProduct(newProduct, clearInputs);
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
      <p>
        <a className="button edit" onClick={() => setShowEditForm(true)}>
          Edit
        </a>
      </p>
    );
  }
};

export default EditForm;
