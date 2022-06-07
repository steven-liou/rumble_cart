const ProductInput = ({ title, id, state, setState }) => {
  return ( 
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <input type="text" id={id} value={state} onChange={(e)=> setState(e.target.value)} />
    </div>
  );
}

export default ProductInput