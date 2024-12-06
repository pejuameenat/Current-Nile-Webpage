import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: {id:false},
    currentElement: 0
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    toggleFaq: (state, action) => {
      const id = action.payload;
      state.isOpen[id] = !state.isOpen[id]; // Toggle the visibility
    },
      },

});

export const { toggleFaq } = faqSlice.actions
 export default faqSlice.reducer