import { useState } from 'react';
import ProductInput from './ProductInput';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProduct } from '../actions/productActions';

const AddForm = () => {
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

  const dispatch = useDispatch();

  const handleAddProduct = async (event) => {
    event.preventDefault();
    if (!(title && price && quantity)) {
      alert('All fields must be filled');
      return;
    }
    const newProduct = {
      title,
      price,
      quantity,
    };
    const res = await axios.post('/api/products', newProduct);

    dispatch(addProduct(res.data));
    clearInputs();
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
