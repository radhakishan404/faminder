import { createSlice } from "@reduxjs/toolkit";

const formInitialValue = {
    title: "",
    description: "",
    type: "",
    priority: "Low",
    dueDate: "",
    completed: "false"
}

const initialState = {
    showModal: false,
    formType: "",
    initialValues: { ...formInitialValue },
    pagination: {
        pageNo: 0,
        limit: 10,
        sortBy: -1,
        sortField: "createdAt",
    }
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        changeInitialState: (state, action) => {
            const { initialValues } = action.payload;

            if (initialValues)
                state.initialValues = initialValues;
            if (!initialValues)
                state.initialValues = formInitialValue;
        },
        handlePaginationState: (state, action) => {
            const { payload } = action;
            state.pagination = payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { changeInitialState, handlePaginationState } = eventsSlice.actions;

export default eventsSlice;
