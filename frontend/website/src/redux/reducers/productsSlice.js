import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";


// Initial state 
const initialState = {
  products: [],
  status: 'idle'
};

export const fetchProducts = createAsyncThunk('products/fetchProducts',
  async () => {
    try {
      const response = await api.get('products');
      // console.log('API response:', response.data); // Log API response
      return response.data;
    } catch (error) {
      console.error('API error:', error.message); // Log any errors
      return error.message;
    }
  });



// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log('Action payload:', action.payload); // Log action payload
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
