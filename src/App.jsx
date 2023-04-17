import Modal from './component/Modal';
import Navbar from './component/Navbar';
import { useEffect } from 'react';
import CartContainer from './component/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCarts } from './feature/cart/Thunk/cartSliceThunk';
import { selectAllModal } from './feature/modal/ModalSlice';
import { calculate, getCartItems } from './feature/cart/Thunk/cartSliceThunk';

function App() {
  const { cartItems, isLoading } = useSelector(selectAllCarts);
  const { isOpen } = useSelector(selectAllModal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ....</h1>
      </div>
    );
  }
  return (
    <main>
      {/* {<Modal /> && isOpen} */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
