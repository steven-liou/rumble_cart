import AddProduct from "./AddProduct";
import ProductListing from "./ProductListing";


const ProductDisplay = ({ products }) => {
  return ( 
    <div>
      <ProductListing products={products}/>
      <AddProduct />
    </div>
   );
}
 
export default ProductDisplay