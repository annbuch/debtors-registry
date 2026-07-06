import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CaseItem } from "../../types/case";

export interface CasesState {
    items: CaseItem[];
    total: number;
    loading: boolean;
    error: string | null;
}

const initialState: CasesState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
};

const casesSlice = createSlice({
    name: "cases",

    initialState,

    reducers: {
        fetchStart(state) {
            state.loading = true;
            state.error = null;
        },

        fetchSuccess(
            state,
            action: PayloadAction<{
                items: CaseItem[];
                total: number;
            }>
        ) {
            state.loading = false;
            state.items = action.payload.items;
            state.total = action.payload.total;
        },

        fetchError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchStart,
    fetchSuccess,
    fetchError,
} = casesSlice.actions;

export default casesSlice.reducer;