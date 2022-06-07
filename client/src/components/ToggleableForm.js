import { useState } from 'react';
import ProductInput from './ProductInput';

const ToggleableForm = ({ formInfo, onSubmit }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [stateProduct, setProduct] = useState('');
  const [statePrice, setPrice] = useState('');
  const [stateQuantity, setQuantity] = useState('');

  const {
    product,
    productId,
    price,
    priceId,
    quantity,
    quantityId,
    actionTitle,
    toggleButtonTitle,
    formTitle,
    id,
  } = formInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: stateProduct,
      price: statePrice,
      quantity: stateQuantity,
      id
    };
    onSubmit(newProduct, clearInputs);
  };

  const clearInputs = () => {
    setProduct('');
    setPrice('');
    setQuantity('');
    setShowAddForm(false);
  };

  if (showAddForm) {
    return (
      <div className="add-form visible">
        <h3>{formTitle}</h3>
        <form>
          <ProductInput
            title={product}
            id={productId}
            state={stateProduct}
            setState={setProduct}
          />
          <ProductInput
            title={price}
            id={priceId}
            state={statePrice}
            setState={setPrice}
          />
          <ProductInput
            title={quantity}
            id={quantityId}
            state={stateQuantity}
            setState={setQuantity}
          />
          <div className="actions form-actions">
            <a className="button" onClick={(e) => handleSubmit(e)}>
              {actionTitle}
            </a>
            <a className="button" onClick={() => setShowAddForm(false)}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <p>
        <a
          className="button add-product-button"
          onClick={() => setShowAddForm(true)}
        >
          {toggleButtonTitle}
        </a>
      </p>
    );
  }
};

export default ToggleableForm;

/*
AddProduct Component can display two things:
  - Add A Product Button
  - Add Product Form

Actions:
  - when user clicks on Add A Product, the form is displayed
  - Default - we want to display Add A Product Button

Track of whether or not we display the Button or the Form (Boolean)
State of That -> AddProduct Component(?)

- OnChange Handler(?) -> toggle state

*/
