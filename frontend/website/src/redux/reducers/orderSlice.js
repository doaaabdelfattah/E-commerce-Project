import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from '../../api/api';


// ========== CREATE NEW ORDER
export const placeOrder = createAsyncThunk(
  'orders/placeOrder',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api2.post('/orders/', info);
      console.log('CART API response:', data); // Log API response
      return fulfillWithValue(data);
    } catch (error) {
      console.error('API error:', error.message); // Log any errors
      return rejectWithValue(error.response.data);
    }
  });



// ========== GET ALL ORDERS
export const getOrders = createAsyncThunk('orders/getOrders', async (userId, { rejectWithValue }) => {
  try {
    const response = await api2.get('/orders/', { userId });
    console.log('Api Response fetch cart:', response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


// Slice
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: [],
    status: 'idle',
    statusTab: true,
  },
  reducers: {


  },
  // Handle Api thunks requests
  extraReducers: (builder) => {
    builder
      // ============= add to cart Reducers 
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.items = action.payload.items
        state.statusTab = true;
      })

  }
});

// Selectors
export const selectAllCart = (state) => state.cart.items;
// Selector to find totalQuantity
export const selectTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};


// Exporting actions and reducer

export default orderSlice.reducer;
