import {configureStore} from "@reduxjs/toolkit"
import slice  from "./counterSlice"
// initialise this file as store
export const store = configureStore({
    reducer:{
        counter : slice
    }
 })