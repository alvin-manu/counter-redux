import { createSlice } from "@reduxjs/toolkit";

 
export const counterSlice = createSlice({
    name : 'counterApp',
    initialState:{
        value : 0
    },
    reducers:{
        // actions are defined inside this reducer
        // function to increment value 
        increment :(state, range) =>{
            state.value = state.value + range.payload
        },
        // function to increment value 
        decrement : (state, range)=>{
            state.value = state.value - range.payload
        },
        reset : (state) =>{
            state.value = 0
        }
    }
})

// action is required by the component to perform increment, decrement, reset
export const {increment, decrement, reset } = counterSlice.actions;

// reducer is required by the store
export default counterSlice.reducer
