import { useState } from "react";
import ProductInput from "./ProductInput";

// toggleButtonTitle => Edit/Add
// actionTitle => Update/Add
// handleActionClicked => event handler
const ToggleableForm = ({formInfo}) => {
  const [ showAddForm, setShowAddForm ] = useState(false)

  const {
    product, productId,
    price, priceId,
    quantity, quantityId,
    actionTitle,
    toggleButtonTitle,
    handleActionClick,
  } = formInfo;


  if (showAddForm) {
    return ( 
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <ProductInput product={{ product: { product, productId } }} />
          <ProductInput product={{ product: { price, priceId } }} />
          <ProductInput product={{ product: { quantity, quantityId } }} />
          <div className="actions form-actions">
            <a className="button" onClick={handleActionClick}>{actionTitle}</a>
            <a 
              className="button"
              onClick={() => setShowAddForm(false)}
            >Cancel</a>
          </div>
        </form>
      </div>
     );
  } else {
    return (
      <p>
        <a 
          className="button add-product-button"
          onClick={() => setShowAddForm(true)}>
        {toggleButtonTitle}</a>
      </p>
    )
  }
  
}

const AddProduct = () => {
  const formInfo = {
     product: "Product Name", productId: "product-name",
     price: "Price", priceId: "product-price",
     quantity: "Quantity", quantityId: "product-quantity",
     actionTitle: "Add",
    toggleButtonTitle: "Add a Product",
    handleActionClick: () => { console.log('Added a product') },
  }
  return (
    <ToggleableForm formInfo={formInfo}/>
  )
}
 
export default AddProduct;

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