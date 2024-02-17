import { combineReducers, configureStore } from "@reduxjs/toolkit";

// all api calling using rtk query

// redux state slices
import commonSlice from "./common/commonSlice";
import eventsSlice from "./events/eventsSlice";

// axios interceptor
import sessionReducer from './sessionReducer';


const reducers = {
    [commonSlice.name]: commonSlice.reducer,
    [eventsSlice.name]: eventsSlice.reducer,

    session: sessionReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
});