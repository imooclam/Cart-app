import { CartIcon } from '../icons';
// use Selector is coming from React redux
import { useSelector } from 'react-redux';
const Navbar = () => {
  // we can called the parameter any thing you want but we prefer to call it store mean entire store and we are looking for  .cart  because its a name of this property  reducer: {
  //equal
  //   cart:cartReducer
  // },
  // console.log(useSelector(store => console.log(store)));
  const { amountNumber } = useSelector(store => store.cart);
  return (
    <nav>
      <article className="nav-center">
        <h3>redux toolKit</h3>
        <article className="nav-container">
          <CartIcon />
          <section className="amount-container">
            <p className="total-amount">{amountNumber}</p>
          </section>
        </article>
      </article>
    </nav>
  );
};
export default Navbar;
