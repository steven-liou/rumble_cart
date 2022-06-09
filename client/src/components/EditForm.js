import ProductInput from './ProductInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateProduct } from '../actions/productActions';
import axios from 'axios';

const EditForm = ({ product }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [title, setProduct] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!(title && price && quantity)) {
      alert('All fields must be filled');
      return;
    }
    const updatedProduct = {
      title: title,
      price: price,
      quantity: quantity,
      id: product._id,
    };

    const res = await axios.put(
      `/api/products/${updatedProduct.id}`,
      updatedProduct
    );

    dispatch(updateProduct(res.data));
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
            <a className="button" onClick={(e) => handleUpdateProduct(e)}>
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
