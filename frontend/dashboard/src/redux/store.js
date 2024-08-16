import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,

    },
    devTools: true
})

export default store