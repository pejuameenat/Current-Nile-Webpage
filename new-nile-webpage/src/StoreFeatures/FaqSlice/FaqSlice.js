import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isShow: false,
    currentElement: 0
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
      toggleFAQ: (state, action) => {
        if (state.currentElement === action.payload) {
          // If the same FAQ is clicked, toggle the visibility
          state.show = !state.show;
        } else {
          // If a new FAQ is clicked, show the answer and set it as the current element
          state.currentElement = action.payload;
          state.show = true;
        }
      },
  },
});

export const { toggleFAQ } = faqSlice.actions
 export default faqSlice.reducer