import { useState } from "react";
import ProductInput from "./ProductInput";


const AddProduct = ({product, productid, price, priceid, quantity, quantityid}) => {
  const [ showAddForm, setShowAddForm ] = useState(false)

  const populateForm = [
    { title: "Product Name", id: "product-name"},
    { title: "Price", id: "product-price"},
    { title: "Quantity", id: "product-quantity"}
  ]

  if (showAddForm) {
    return ( 
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <ProductInput product={populateForm[0]} />
          <ProductInput product={populateForm[1]} />
          <ProductInput product={populateForm[2]} />
          <div className="actions form-actions">
            <a className="button">Add</a>
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
          class="button add-product-button"
          onClick={() => setShowAddForm(true)}>
        Add A Product</a>
      </p>
    )

  }


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