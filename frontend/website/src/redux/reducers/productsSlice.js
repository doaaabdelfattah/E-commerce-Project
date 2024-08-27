import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api2 } from "../../api/api";
import { setProducts } from './sortedProductSlice';

const initialState = {
  products: [],
  discountedProducts: [],
  topRatedProducts: [],
  latestProducts: [],
  page: 1,
  totalPages: 1,
  totalProducts: 0,
  searchQuery: '',
  status: 'idle',
};

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api2.post('products/pagination', { limit: 5 });
  return response.data;
});

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async ({ categoryId, page = 1, limit = 5 }, ) => {
    const response = await api2.post(`products/category/${categoryId}/pagination`, { page, limit });
    return response.data;
  }
);
// Fetch products by rating 
export const fetchByRating = createAsyncThunk('products/fetchByRating', 
  async(_, { rejectWithValue }) => {
    try {
      const response = await api2.get('products');
      const topRatedProducts = response.data
        .filter(product => product.rating)
        .sort((a, b) => b.rating - a.rating); // Sort by rating in descending order
      return topRatedProducts;
    } catch(error) {
      console.error('Error fetching products by rating:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductsByRating = createAsyncThunk(
  'products/fetchProductsByRating',
  async (minRating, { dispatch, rejectWithValue }) => {
    try {
      if (!minRating) {
        return await dispatch(fetchProducts()).unwrap();
      } else {
        const response = await api2.get(`products/rating/${minRating}`);
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching products by rating:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch products by slider price
export const fetchBySliderPrice = createAsyncThunk(
  'products/fetchBySliderPrice',
  async ({ minPrice, maxPrice }, { dispatch, rejectWithValue }) => {
    try {
      const response = await api2.post('products/pagination');
      
      // Filter products based on the price range
      const productsOfSlider = response.data.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      dispatch(setProducts(productsOfSlider)); // Dispatch the action here
      return productsOfSlider; // Return the filtered products
    } catch (error) {
      console.error('Error fetching products by slider price:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch latest products
export const fetchTheLatest = createAsyncThunk('products/fetchTheLatest',
  async(_, { rejectWithValue }) => {
    try {
      const response = await api2.get('products');
      const latestProducts = response.data
        .filter(product => product.createdAt)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by creation date in descending order
      return latestProducts;
    } catch (error) {
      console.error('Error fetching the latest products:', error);
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
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
        state.discountedProducts = action.payload;
      })
      .addCase(fetchByRating.fulfilled, (state, action) => {
        state.topRatedProducts = action.payload;
      })
      .addCase(fetchTheLatest.fulfilled, (state, action) => {
        state.latestProducts = action.payload;
      })
      .addCase(fetchBySliderPrice.fulfilled, (state, action) => {
        state.products = action.payload; // Store filtered products in the same products array
      })
      .addCase(fetchProductsByRating.fulfilled, (state, action) => {
        state.products = action.payload; 
      });
  },
});
export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;