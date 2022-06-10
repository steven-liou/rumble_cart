import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../lib/apiClient';

const initialState = {};

export const fetchCart = createAsyncThunk('/cart/fetchCart', async () => {
  const data = await apiClient.fetchCart();
  return data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cartSlice.reducer;
