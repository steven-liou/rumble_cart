import ToggleableForm from './ToggleableForm.js';

const AddProductForm = ({onAddProduct}) => {
  const formInfo = {
    product: 'Product Name',
    productId: 'product-name',
    price: 'Price',
    priceId: 'product-price',
    quantity: 'Quantity',
    quantityId: 'product-quantity',
    actionTitle: 'Add',
    toggleButtonTitle: 'Add a Product',
    formTitle: 'Add Product',
  };
  return <ToggleableForm formInfo={formInfo} onSubmit={onAddProduct} />;
};

export default AddProductForm;
