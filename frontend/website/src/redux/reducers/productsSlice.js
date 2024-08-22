import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from "../../api/api";
import {setProducts} from './sortedProductSlice'

const initialState = {
  products: [],
  status: 'idle',
};

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api2.get('products');
  return response.data;
});

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (category, { dispatch }) => {
  if (!category) {
    //  unwrap() will throw an error, which can be caught and handled appropriately.
    return dispatch(fetchProducts()).unwrap();
  } else {
    // Fetch products by category
    const response = await api2.get(`products/category/${category}`);
    dispatch(setProducts(response.data)); 
    return response.data;
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;