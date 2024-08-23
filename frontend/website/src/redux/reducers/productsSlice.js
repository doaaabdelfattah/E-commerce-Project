import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from "../../api/api";
import { setProducts } from './sortedProductSlice';

const initialState = {
  products: [],
  discountedProducts: [],
  topRatedProducts: [],
  searchQuery: '',
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
    return dispatch(fetchProducts()).unwrap();
  } else {
    const response = await api2.get(`products/category/${category}`);
    dispatch(setProducts(response.data)); 
    return response.data;
  }
});

// Fetch products by rating 
export const fetchByRating = createAsyncThunk('products/fetchByRating', 
  async(_, {rejectWithValue}) => {
    try {
      const response = await api2.get('products');
      const TopRatedProducts = response.data
        .filter(product => product.rating)
        .sort((a, b) => b.rating - a.rating); // Sort by rating in descending order
      return TopRatedProducts;
    } catch(error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


// Fetch discounted products
export const fetchDiscountedProducts = createAsyncThunk(
  'products/fetchDiscountedProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api2.get('products');
      const discountedProducts = response.data.filter(product => product.discount > 0);
      return discountedProducts;
    } catch (error) {
      console.error('Error fetching discounted products:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

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
      })
      .addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
        state.discountedProducts = action.payload;
      })
      .addCase(fetchByRating.fulfilled, (state, action) => {
        state.topRatedProducts = action.payload;
      });
  },
});

export default productsSlice.reducer;