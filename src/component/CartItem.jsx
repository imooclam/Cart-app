import { ChevronDown, ChevronUp } from '../icons';
import {
  remove,
  increase,
  decrease,
} from '../feature/cart/Thunk/cartSliceThunk';
import { useDispatch } from 'react-redux';

function CartItem({ id, title, price, amount, img }) {
  const dispatch = useDispatch();
  // console.log(amount);

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <section>
        <h4> {title}</h4>
        <h5 className="item-price">{price}</h5>

        <button
          className="remove-btn"
          type="button"
          onClick={() => {
            dispatch(remove(id));
          }}
        >
          remove
        </button>
      </section>
      <article>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(remove(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </article>
    </article>
  );
}
export default CartItem;
