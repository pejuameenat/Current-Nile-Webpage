import { createSlice } from "@reduxjs/toolkit";

const initialState={
    formErrorMessage:false,
}

 const formSlices = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormMessage: (state, action) => {
            state.formErrorMessage = action.payload
        }
    }
 })

export const { setFormMessage } = formSlices.actions
 export default formSlices.reducer