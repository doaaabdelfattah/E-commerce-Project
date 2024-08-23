import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import sortedProductReducer from "./reducers/sortedProductSlice";
import cartReducer from "./reducers/cartSlice";
import searchReducer from './reducers/SearchResults'
import authReducer from "./reducers/authSlice";


export const store = configureStore({
        reducer: {
                categories: categoriesReducer,
                products: productsReducer,
                cart: cartReducer,
                sortedProducts: sortedProductReducer,
<<<<<<< HEAD
                auth: authReducer,
                search: searchReducer,
                
                
=======
                auth: authReducer
>>>>>>> 297bdc7e33767b2846cf920c9aa61bbbe150ec0f
        }
});