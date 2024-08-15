import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
// import cartReducer from "./reducers/cartSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        // cart: cartReducer,


    }
})

