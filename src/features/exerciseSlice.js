import { createSlice } from "@reduxjs/toolkit";
import { exerciseData } from "./data";
import { Provider } from "react-redux";

const initialState = {
    exerciseList: exerciseData,
};

export const exerciseSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            const exercise = action.payload;

            const existingExercise = state.exerciseList.find(
                (item) => item.id === exercise.id
            );

            if (!existingExercise) {
                const newState = [...state.exerciseList, exercise];
                state.exerciseList = newState;
            }
        },

        deleteExercise: (state, action) => {
            console.log("delete exercise reducer");

            const id = action.payload;
            const newState = state.exerciseList.filter(
                (exercise) => exercise.id !== id
            );
            state.exerciseList = newState;
        },

        updateExercise: (state, action) => {
            console.log(action.payload);
            const updatedExercises = state.exerciseList.map((item) => {
                if (action.payload.id === item.id) {
                    return { ...item, ...action.payload };
                
                }
                return item;
            });
            state.exerciseList = updatedExercises
        },
    },
});

export const { getExercises, addExercise, deleteExercise, updateExercise } =
    exerciseSlice.actions;

export default exerciseSlice.reducer;
