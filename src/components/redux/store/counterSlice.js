import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0,
    showCounter: true
}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter=state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        },
        reset(state){
            state.counter=0;
        }
    }
})
export const counterActions = counterSlice.actions
export default counterSlice.reducer