const CartSummary = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <EmptyCartSummary />
      ) : (
        <SummaryTable cartItems={cartItems} />
      )}
      <a
        className={`button checkout ${
          cartItems.length === 0 ? 'disabled' : ''
        }`}
      >
        Checkout
      </a>
    </div>
  );
};

const EmptyCartSummary = () => {
  return (
    <>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
    </>
  );
};

const SummaryTable = ({ cartItems }) => {
  cartItems = Object.values(cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: ${total}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartSummary;
