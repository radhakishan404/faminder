import * as coreAxios from "axios";
// import { getCookie, signout } from "./cookies";
import { BASE_URL } from "./constants";
import { store } from "../redux";

const api = coreAxios.default.create({
    baseURL: BASE_URL, // Replace with your API base URL
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Retrieve the token from the Redux state (assuming you have a token stored in a 'token' field)
        const token = store.getState().session.authToken; // Replace with how you retrieve the token from your Redux state

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return error?.response?.data
    }
);

export default api;