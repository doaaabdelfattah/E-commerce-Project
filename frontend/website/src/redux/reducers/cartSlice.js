import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from '../../api/api';

// ========== ADD to the cart 
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

export const delete_Item_cart = createAsyncThunk(
  'cart/delete_from_cart',
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      // Make sure the endpoint and payload match your backend API
      const { data } = await api2.delete(`/cart/remove`, { data: { userId, productId } });
      console.log('CART API response:', data); // Log API response
      return data;
    } catch (error) {
      console.error('API error:', error.message); // Log any errors
      return rejectWithValue(error.response.data);
    }
  }
);


// ========== Fetch the cart 
export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId, { rejectWithValue }) => {
  try {
    const response = await api2.post('/cart/items', { userId });
    console.log('Api Response fetch cart:', response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// ========== CLEAR the cart 
export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async ({ userId }, { rejectWithValue }) => {
    try {
      // Make sure the endpoint and payload match your backend API
      const { data } = await api2.delete(`cart/clear/${userId}`);
      console.log('CART API response:', data); // Log API response
      return data;
    } catch (error) {
      console.error('API error:', error.message); // Log any errors
      return rejectWithValue(error.response.data);
    }
  }
);



// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    statusTab: true,
  },
  reducers: {
    // addToCart(state, action) {
    //   const { productId, quantity } = action.payload;
    //   const productIndex = state.items.findIndex(item => item.productId === productId);

    //   if (productIndex !== -1) {
    //     // If item exists: update the quantity & Price
    //     state.items[productIndex].quantity += quantity;

    //   } else {
    //     // If item does not exist, add it to the cart
    //     state.items.push({ productId, quantity });
    //   }
    //   state.statusTab = true;
    // },
    // deleteItem(state, action) {
    //   const { productId } = action.payload;
    //   const productIndex = state.items.findIndex(item => item.productId === productId);
    //   // Remove item from the cart if quantity is 0 or less
    //   state.items.splice(productIndex, 1);
    // },
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
    // clearCart(state) {
    //   state.items = [];
    //   state.statusTab = false
    // }
  },
  // Handle Api thunks requests
  extraReducers: (builder) => {
    builder
      // ============= add to cart Reducers 
      .addCase(add_to_cart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(add_to_cart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items
        console.log('add_to_cart action payload', action.payload);
        state.statusTab = true;
      })
      .addCase(add_to_cart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('add_to_cart failed:', action.payload);
      })
      // ============= Delete Item Reducers 
      .addCase(delete_Item_cart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(delete_Item_cart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items
        console.log('action payload', action.payload)
      })
      .addCase(delete_Item_cart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Delete item failed:', action.payload);
      })

      // ============= Fetch cart Reducers 
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items
        console.log(' fetch action payload', action.payload.items)
        // state.statusTab = true;
      })
      // ============ Clear cart
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = []
        console.log('action payload', action.payload)
      })
  }
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
export const { addToCart, deleteItem, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
