const ProductInput = ({ product: { title, id } }) => {
  return ( 
    <div className="input-group">
      <label for={id}>{title}</label>
      <input type="text" id={id} value="" />
    </div>
  );
}

export default ProductInput