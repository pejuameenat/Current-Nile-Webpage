import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  currentElement: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
    updateCurrentElement: (state, action) => {
      state.currentElement = action.payload;
    },
  },
});

export const { openNavbar, closeNavbar, updateCurrentElement, setIsActive } =
  modalSlice.actions;
export default modalSlice.reducer;
