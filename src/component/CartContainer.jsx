import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../component/CartItem';
import { openModal } from '../feature/modal/ModalSlice';
import { selectAllCarts } from '../feature/cart/Thunk/cartSliceThunk';
const CartContainer = () => {
  const { amountNumber, total, cartItems } = useSelector(selectAllCarts);
  const dispatch = useDispatch();
  // console.log(cartItems);
  // console.log(amountNumber);
  // console.log(total);
  if (amountNumber < 1) {
    return (
      <section className="cart">
        <header>
          <h2>you package</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }
  // if (cartItems < 1) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>you package</h2>
  //         <h4 className="empty-cart"> is currently empty</h4>
  //       </header>
  //       <footer>
  //         <hr />

  //         <section className="cart-total">
  //           <h4>
  //             total<span> ${total} </span>
  //           </h4>
  //         </section>
  //         <button
  //           type="btn"
  //           className="btn clear-btn"
  //           onClick={() => dispatch(clearCart())}
  //         >
  //           {' '}
  //           Back to home
  //         </button>
  //       </footer>
  //     </section>
  //   );
  // }
  return (
    <section className="cart">
      <header>
        <h2>you package</h2>
      </header>
      <section>
        {cartItems.map(item => {
          // const{id,title,price,amount,img}=item
          // WE ALWAY USE THIS TO RETURN ALL property in new component
          return <CartItem key={item.id} {...item} />;
        })}
      </section>
      <footer>
        <hr />

        <section className="cart-total">
          <h4>
            total<span> ${total.toFixed(2)} </span>
          </h4>
        </section>
        <button
          type="btn"
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >
          {' '}
          Clear List
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
