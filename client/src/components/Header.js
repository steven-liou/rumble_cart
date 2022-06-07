import CartSummary from './CartSummary'

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <CartSummary cartItems={cartItems} />
    </header>
  );
};
 
export default Header;