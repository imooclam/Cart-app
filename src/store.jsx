import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/Thunk/cartSliceThunk';
import modalReducer from './feature/modal/ModalSlice';
//  1- configureStore its place you will store state
// 2- We want to create store  And  in function we want to pass an object  And this object is reducer property
//  after we equal cartSlice with reducer we import reducer

export const store = configureStore({
  reducer: {
    //equal
    cart: cartReducer,
    modal: modalReducer,
  },
});

// 3- we go ti main
// import { store } from './store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ```
