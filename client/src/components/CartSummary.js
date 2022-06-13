import { useContext, useEffect } from 'react';
import { CartContext, fetchCart, checkoutCart } from '../context/cart-context';

const CartSummary = () => {
  const { cart: cartItems, dispatch: dispatchCart } = useContext(CartContext);

  useEffect(() => {
    fetchCart(dispatchCart);
  }, [dispatchCart]);

  const handleCheckout = () => {
    checkoutCart(dispatchCart);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <EmptyCartSummary />
      ) : (
        <SummaryTable cartItems={cartItems} />
      )}
      <a
        className={`button checkout ${
          cartItems.length === 0 ? 'disabled' : ''
        }`}
        onClick={handleCheckout}
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
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
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
              <td>${item.price && item.price.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: ${total.toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartSummary;
