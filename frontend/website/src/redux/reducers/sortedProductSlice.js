import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from '../../api/api'
import {fetchProductsByCategory} from './productsSlice'

// Initial state 
const initialState = {
  sortedProductsArray: [],
};

export const fetchSortedProducts = createAsyncThunk('sortedProducts/fetchSortedProducts', async () => {
  try {
    const response = await api2.get('products');
    // console.log('API response:', response.data); // Log API response
    return response.data;
  } catch (error) {
    // console.error('API error:', error.message); // Log any errors
    return error.message;
  }
});

// Slice
const sortedProductsSlice = createSlice({
  name: 'sortedProducts',
  initialState,
  reducers: {
    sortProductsByPriceAsc: (state) => {
      state.sortedProductsArray.sort((a, b) => a.price - b.price);
    },
    sortProductsByPriceDesc: (state) => {
      state.sortedProductsArray.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.fetchSortedProducts.fulfilled, (state, action) => {
        // console.log('Action payload:', action.payload); // Log action payload
        state.sortedProductsArray = action.payload;
      });
  },
});

export const { sortProductsByPriceAsc, sortProductsByPriceDesc } = sortedProductsSlice.actions;

export default sortedProductsSlice.reducer;