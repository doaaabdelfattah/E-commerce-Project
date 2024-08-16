import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api3 } from "../../api/api";


export const adminLogin = createAsyncThunk('auth/admin', async (info, thunkAPI) => {
  console.log(info)
  try {
    // Destructuring data from response
    const { data } = await api3.post('/api/v1/auth/login', info)
    localStorage.setItem('accessToken', data.access_token)
    console.log(data);
    return thunkAPI.fulfillWithValue(data)
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
    // console.log(error)

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
    builder.addCase(adminLogin.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.loader = false;
      state.userInfo = action.payload;
      state.status = 'success';
    });
    builder.addCase(adminLogin.rejected, (state) => {
      state.loader = false;
      state.status = 'failed';
    });
  },
});
export default authSlice.reducer;
