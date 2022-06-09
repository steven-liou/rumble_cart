import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { receiveCartItems } from '../actions/cartActions';
const CartSummary = () => {
  /*
    useEffect -> set the initial state of the cartItems
      - send a GET request to the database to retrieve all the cart items
      - Trigger an Action Creator - Cart_Items_Received
      - Reducer - return all the items from the cart as an Object
         { itemid: {iteminfo} }
  */

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartItems = async () => {
      const { data } = await axios.get('/api/cart');
      const cart = data.reduce((total, item) => {
        total[item.productId] = item;
        return total;
      }, {});

      dispatch(receiveCartItems(cart));
    };
    fetchCartItems();
  }, [dispatch]);

  /*
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchCartItems = async () => {
      const { data } = await axios.get('/api/cart');
      const cart = data.reduce((total, item) => {
        total[item.productId] = item;
        return total;
      }, {});
      setCartItems(cart);
    };
    fetchCartItems();
  }, []);
  */

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
          Object.keys(cartItems).length === 0 ? 'disabled' : ''
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
