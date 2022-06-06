import Product from "./Product";

const ProductListing = ({ products }) => {
  console.log(products)
  return ( 
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return (
          <Product 
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
   );
}
 
export default ProductListing;