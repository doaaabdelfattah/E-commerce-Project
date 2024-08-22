import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api2 } from '../../api/api';
import { jwtDecode } from "jwt-decode";


// Thunk for user login
export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api2.post('/users/login', { email, password });
      console.log('login responce', response)
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk for user registration
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name, isAdmin = true }, { rejectWithValue }) => {
    try {
      const response = await api2.post('/users/register', { email, password, name, isAdmin });

      return response.data; // Return the user data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice to handle authentication state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); // Clear token from localStorage
    },
    loadUserFromToken: (state, action) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logOutUser, loadUserFromToken } = authSlice.actions;
