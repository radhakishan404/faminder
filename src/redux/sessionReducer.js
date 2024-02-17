import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // isLoggedIn: true,
    // userData: { "_id": "65cee2d5135f5c76cae2ea16", "name": "radhakishan", "email": "rk@gmail.com", "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", "createdAt": "2024-02-16T04:21:41.036Z", "updatedAt": "2024-02-16T04:21:41.036Z", "uuid": "65cee2d5135f5c76cae2ea16", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNlZTJkNTEzNWY1Yzc2Y2FlMmVhMTYiLCJlbWFpbCI6InJrQGdtYWlsLmNvbSIsIm5hbWUiOiJyYWRoYWtpc2hhbiIsImlhdCI6MTcwODA2OTU4MywiZXhwIjoxNzA4MjQyMzgzfQ.W7AXXr7bDHgiEuLaq1s2DmaY2gf7i8WSxWgiwMFaTK8" },
    // authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNjNWE1ZWMyZDYzODZkNTVlZTAxOGYiLCJlbWFpbCI6InJrQGdtYWlsLmNvbSIsIm5hbWUiOiJSYWRoYWtpc2hhbiIsImlhdCI6MTcwODA2NTM2MiwiZXhwIjoxNzA4MjM4MTYyfQ.8gcapVyro3ZhisCYcVTvxFHNpnzZeGmAK-WNPlNlos0",
    isLoggedIn: false,
    userData: null,
    authToken: null
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
            state.authToken = action.payload.token;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
            state.authToken = null;
        },
    },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
