import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import api from "../../api/api";


export const adminLogin = createAsyncThunk('auth/admin', async (info) => {
  console.log(info)
  try {
    const { data } = await api.post('/admin-login')

  } catch (error) {

  }
})

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
