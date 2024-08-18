import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import sortedProductReducer from "./reducers/sortedProductSlice";
// import cartReducer from "./reducers/cartSlice";


export const store = configureStore({
        reducer: {
                categories: categoriesReducer,
                products: productsReducer,
                sortedProducts: sortedProductReducer,
                // cart: cartReducer,

        }
});