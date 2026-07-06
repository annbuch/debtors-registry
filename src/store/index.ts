import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters/filtersSlice";
import casesReducer from "./cases/casesSlice";

export const store = configureStore({

    reducer: {

        filters: filtersReducer,

        cases: casesReducer,

    },

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;