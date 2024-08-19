import { createSlice } from "@reduxjs/toolkit";

// Initial state with a more structured format
const initialState = {
  items: [],
};

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const productIndex = state.items.findIndex(item => item.productId === productId);

      if (productIndex !== -1) {
        // If item exists, update the quantity
        state.items[productIndex].quantity += quantity;
      } else {
        // If item does not exist, add it to the cart
        state.items.push({ productId, quantity });
      }
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const productIndex = state.items.findIndex(item => item.productId === productId);

      if (productIndex !== -1) {
        if (quantity > 0) {
          state.items[productIndex].quantity = quantity;
        } else {
          // Remove item from the cart if quantity is 0 or less
          state.items.splice(productIndex, 1);
        }
      }
    },
  },
});

// Selectors
export const selectAllCart = (state) => state.cart.items;

export const selectTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

// Exporting actions and reducer
export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
