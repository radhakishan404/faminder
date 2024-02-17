import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalLoading: {},
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setGlobalLoading: (state, action) => {
            state.globalLoading = action.payload;
        },
        setSnackBar: (state, action) => {
            
        },
    },
    extraReducers: (builder) => {
    }
});

// Action creators are generated for each case reducer function
export const {
    setGlobalLoading,
    setSnackBar
} = commonSlice.actions;

export default commonSlice;
