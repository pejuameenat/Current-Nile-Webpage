import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  currentElement: null,
  dropdownOpen:false  // dropdown
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
    toggleDropdown: (state) => {
      state.dropdownOpen= !state.dropdownOpen
    }
  },
});

export const { openNavbar, closeNavbar, updateCurrentElement, toggleDropdown } =modalSlice.actions;
export default modalSlice.reducer;
