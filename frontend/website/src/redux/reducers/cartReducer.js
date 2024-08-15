import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";


// Initial state with a more structured format
const initialState = {
  categories: [],
};
