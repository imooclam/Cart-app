//  first thing we want to import  axios
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { openModal } from '../../modal/ModalSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      console.log(name);
      console.log(thunkAPI.getState());
      // i can open modal easy with thunk APi
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      // console.log(resp);
      // we should use return
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        ' sorry we have Error Maybe you have to check you url'
      );
    }
  }
);
// console.log(res);

const initialState = {
  cartItems: [],
  amountNumber: 10,
  total: 0,
  isLoading: true,
};

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
  },
  // we start after reducers to set action life cycle
  extraReducers: builder => {
    builder
      .addCase(getCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        // so action Now its has  fetch data
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const selectAllCarts = store => store.cart;

export const { clearCart, increase, remove, decrease, calculate } =
  cartSlice.actions;

export default cartSlice.reducer;
