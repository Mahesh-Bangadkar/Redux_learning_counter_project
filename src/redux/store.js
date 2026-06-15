import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/conterSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
    } 
})