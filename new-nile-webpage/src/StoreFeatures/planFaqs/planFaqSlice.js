import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    planFaqIdOpen:{}
}

const planSlice = createSlice({
    name:'planFaq',
    initialState,
    reducers: {
        togglePlanFaq: (state, action) => {
            const id = action.payload;
            state.planFaqIdOpen[id] = !state.planFaqIdOpen[id]  
        }
        
    }
})
export const { togglePlanFaq } = planSlice.actions
 export default planSlice.reducer