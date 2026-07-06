import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {

    debtorName: string;

    unp: string;

    manager: string;

    number: string;

    region: string;

    status: string;

    organizationType: string;

    procedure: string;

    declarant: number[] | null;

    startFrom: string;

    startTo: string;

    endFrom: string;

    endTo: string;

    page: number;

}

const initialState: FiltersState = {

    debtorName: "",

    unp: "",

    manager: "",

    number: "",

    region: "",

    status: "",

    organizationType: "",

    procedure: "",

    declarant: null,

    startFrom: "",

    startTo: "",

    endFrom: "",

    endTo: "",

    page: 1,

};

const filtersSlice = createSlice({

    name: "filters",

    initialState,

    reducers: {

        setFilters(state, action: PayloadAction<Partial<FiltersState>>) {

            Object.assign(state, action.payload);

        },

        resetFilters() {

            return initialState;

        },

        setPage(state, action: PayloadAction<number>) {

            state.page = action.payload;

        },

    },

});

export const {

    setFilters,

    resetFilters,

    setPage,

} = filtersSlice.actions;

export default filtersSlice.reducer;