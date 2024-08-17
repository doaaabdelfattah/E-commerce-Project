import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
<<<<<<< HEAD:frontend/src/redux/store.js
import sortedProductReducer from "./reducers/sortedProductSlice";
=======
// import cartReducer from "./reducers/cartSlice";

>>>>>>> 63f7f4913124357beff2febd5ff6f6e1fac775a7:frontend/website/src/redux/store.js

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
<<<<<<< HEAD:frontend/src/redux/store.js
        sortedProducts: sortedProductReducer,
=======
        // cart: cartReducer,


>>>>>>> 63f7f4913124357beff2febd5ff6f6e1fac775a7:frontend/website/src/redux/store.js
    }
});