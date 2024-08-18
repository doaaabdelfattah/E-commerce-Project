import { createSlice } from "@reduxjs/toolkit";
// import api from "../../api/api";


// Initial state with a more structured format
const initialState = {
  items: [],
};


// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item.productId === productId);

      if (existingItemIndex !== -1) {
        // If item exists, update the quantity
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // If item does not exist, add it to the cart
        state.items.push({ productId, quantity });

      };
    },
    // removeItem: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item from the cart
    // },
    // clearCart: (state) => {
    //   state.items = []; // Clear the cart
    // }
  },
});

// select all cart items
export const selectAllCart = (state) => state.cart.items



// Selector to get the total quantity of items in the cart
export const selectTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;