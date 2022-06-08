import CartSummary from './CartSummary'

const Header = ({ cartItems, onCheckoutCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <CartSummary 
        cartItems={cartItems} 
        onCheckoutCart={onCheckoutCart}
      />
    </header>
  );
};
 
export default Header;