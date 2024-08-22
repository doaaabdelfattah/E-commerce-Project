import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from '../../api/api';


export const add_to_cart = createAsyncThunk('cart/add_to_cart',

  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api2.post('cart/add', info);
      console.log('CART API response:', data); // Log API response
      return fulfillWithValue(data);
    } catch (error) {
      console.error('API error:', error.message); // Log any errors
      return rejectWithValue(error.response.data);
    }
  });



// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    statusTab: false,
  },
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
      state.statusTab = true;
    },
    deleteItem(state, action) {
      const { productId } = action.payload;
      const productIndex = state.items.findIndex(item => item.productId === productId);
      // Remove item from the cart if quantity is 0 or less
      state.items.splice(productIndex, 1);
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
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab
    },
    clearCart(state) {
      state.items = [];
      state.statusTab = false
    }
  },
});

// Selectors
export const selectAllCart = (state) => state.cart.items;

// Selector to find totalQuantity

export const selectTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};
// Selector to find product details by productId
export const selectProductDetailsById = (state, productId) => {
  return state.cart.items.find(item => item.productId === productId);
};

// Exporting actions and reducer
export const { addToCart, deleteItem, changeQuantity, toggleStatusTab, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
