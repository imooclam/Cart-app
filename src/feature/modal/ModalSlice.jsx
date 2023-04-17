import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});
export const selectAllModal = store => store.modal;

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
