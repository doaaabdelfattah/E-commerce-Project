import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,


    }
})

