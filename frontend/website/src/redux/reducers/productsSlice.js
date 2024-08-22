import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from "../../api/api";

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api2.get('products');
  return response.data;
});

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryId, { dispatch }) => {
  if (!categoryId) {
    // Unwrap will throw an error, which can be caught and handled appropriately.
    return dispatch(fetchProducts()).unwrap();
  } else {
    // Fetch products by category
    const response = await api2.get(`/products/category/${categoryId}`);
    return response.data;
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
