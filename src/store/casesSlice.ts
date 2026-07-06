import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCases } from "../api/cases";
import { buildRequest } from "../utils/buildRequest";
import type { CaseItem } from "../types/case";
import type { RootState } from "./index";

export interface CasesState {
    items: CaseItem[];
    total: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
}

const initialState: CasesState = {
    items: [],
    total: 0,
    totalPages: 0,
    loading: false,
    error: null,
};

export const fetchCases = createAsyncThunk(
    "cases/fetchCases",
    async (_, { getState }) => {
        const state = getState() as RootState;
        const request = buildRequest(state.filters);
        return await getCases(request);
    }
);

const casesSlice = createSlice({
    name: "cases",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchCases.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCases.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.total = action.payload.count;
                state.totalPages = Math.ceil(action.payload.count / 20);
            })
            .addCase(fetchCases.rejected, state => {
                state.loading = false;
                state.error = "Не удалось загрузить данные";
            });
    },
});

export default casesSlice.reducer;