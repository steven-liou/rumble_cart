import ProductInput from './ProductInput';
import { useState } from 'react';

const EditForm = ({ onUpdateProduct, product }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [stateProduct, setProduct] = useState(product.title);
  const [statePrice, setPrice] = useState(product.price);
  const [stateQuantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: stateProduct,
      price: statePrice,
      quantity: stateQuantity,
      id: product.id,
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
        <h3>"Edit Product</h3>
        <form>
          <ProductInput
            title="Product Name"
            id="product-name"
            state={stateProduct}
            setState={setProduct}
          />
          <ProductInput
            title="Price"
            id="product-price"
            state={statePrice}
            setState={setPrice}
          />
          <ProductInput
            title="Quantity"
            id="product-quantity"
            state={stateQuantity}
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
