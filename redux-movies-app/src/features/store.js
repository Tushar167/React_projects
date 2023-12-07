import { configureStore } from "@reduxjs/toolkit";
import entertainmentReducer from './Movies/movieSlice'



export const store = configureStore({
    reducer : {
        entertainment : entertainmentReducer 
    },
});