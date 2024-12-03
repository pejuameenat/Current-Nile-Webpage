import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthlyPrice: true,
};

const sliderSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setMonthlyPrice: (state, action) => {
      state.monthlyPrice = action.payload;
    },
  }
});
export const { setMonthlyPrice } = sliderSlice.actions;
export default sliderSlice.reducer;
