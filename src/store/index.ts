import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import casesReducer from "./casesSlice";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cases: casesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;