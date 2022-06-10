import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../lib/apiClient';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await apiClient.fetchProducts();
    return data;
  }
);

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productsSlice.reducer;
