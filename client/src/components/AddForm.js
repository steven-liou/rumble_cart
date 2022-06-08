import { useState } from 'react';
import ProductInput from './ProductInput';

const AddForm = ({ onAddProduct }) => {
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const clearInputs = () => {
    setTitle('');
    setPrice('');
    setQuantity('');
    setAddFormVisible(false);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      title,
      price,
      quantity,
    };

    onAddProduct(newProduct, clearInputs);
  };

  return (
    <div className={`add-form ${addFormVisible ? 'visible' : ''}`}>
      <p>
        <a
          className="button add-product-button"
          onClick={() => setAddFormVisible(!addFormVisible)}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <ProductInput
          title="Product Name"
          id="product-name"
          state={title}
          setState={setTitle}
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
          <a className="button" onClick={handleAddProduct}>
            Add
          </a>
          <a
            className="button"
            onClick={() => setAddFormVisible(!addFormVisible)}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
