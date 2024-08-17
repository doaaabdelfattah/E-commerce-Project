import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import sortedProductReducer from "./reducers/sortedProductSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        sortedProducts: sortedProductReducer,
    }
});