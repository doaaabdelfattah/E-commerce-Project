import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";


// Initial state with a more structured format
const initialState = {
  categories: [],
};

export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (productInfo) => {
  try {
    const response = await api.post('', productInfo);
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});


export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist_count: 0,
    wishlist: [],
  }
  reducers: {

  }
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.fulfilled, (state, { payload }) => {

      })
  }
})