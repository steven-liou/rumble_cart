import ToggleableForm from './ToggleableForm.js';

const ToggleableEditForm = ({ onUpdateProduct, productId }) => {
  const formInfo = {
    product: 'Product Name',
    productId: 'product-name',
    price: 'Price',
    priceId: 'product-price',
    quantity: 'Quantity',
    quantityId: 'product-quantity',
    actionTitle: 'Update',
    toggleButtonTitle: 'Edit',
    formTitle: 'Edit Product',
    id: productId,
  };
  return (
    <ToggleableForm 
      formInfo={formInfo} 
      onSubmit={onUpdateProduct} 
    />
  )
};

export default ToggleableEditForm;
