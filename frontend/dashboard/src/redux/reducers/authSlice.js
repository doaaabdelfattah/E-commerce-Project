import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../api/api";


// Slice - or - Reducer
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: '',
    loader: false,
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {

  },
});

export default authSlice.reducer;
