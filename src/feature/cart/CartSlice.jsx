//  first thing we want to import  create Slice
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// we separate initial state property and we write its variable
const initialState = {
  //  we put 4 state
  //  if we have data we should start with state with empty array
  // cartItem:[], => fore data
  cartItems: cartItems,
  amountNumber: 10,
  total: 0,
  loading: true,
};
// second thing we will invoke it this func

console.log(cartItems);
const cartSlice = createSlice({
  //  third we put two thing
  name: 'cart',
  initialState,
  //  first reducer its clear with capital s
  reducers: {
    clearCart: state => {
      state.cartItems = [];
    },
    remove: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      // console.log(itemId);
      state.cartItems = state.cartItems.filter(item => itemId !== item.id);
      // console.log(state.cartItems);
    },
    increase: (state, action) => {
      const increaseCart = state.cartItems.find(
        item => action.payload === item.id
      );
      increaseCart.amount = increaseCart.amount + 1;
    },
    decrease: (state, { payload }) => {
      const decreaseCart = state.cartItems.find(item => item.id === payload.id);
      decreaseCart.amount = decreaseCart.amount - 1;
    },
    calculate: state => {
      let amount = 0;
      let total = 0;
      state.cartItems.map(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amountNumber = amount;
      state.total = total;
    },
    // increase: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    // reducers: {
    //   clearCart: state => {
    //     // state.cartItem=[]
    //     return { cartItem: [] }; // i will update her first one and remove the other because it return anew state
    //   },
    //  we also can create new state from reducer
    // what ever you return from state it will become and new state
  },
});

export const selectAllCarts = store => store.cart;
// After we finch we will import in  store slice
// console.log(cartSlice);
export const { clearCart, increase, remove, decrease, calculate } =
  cartSlice.actions;

// we will export that reducer
export default cartSlice.reducer;

//  its same
// const store = configureStore({
//   reducer: {
//     song: songSlice.reducer
//   }
// });
