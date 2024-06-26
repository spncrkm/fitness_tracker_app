import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from './features/exerciseSlice'


export const store = configureStore({
    reducer: {
        exercises: exerciseReducer
    }
})