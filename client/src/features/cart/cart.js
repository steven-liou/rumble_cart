import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../lib/apiClient';

const initialState = {};

export const fetchCart = createAsyncThunk('/cart/fetchCart', async () => {
  const data = await apiClient.fetchCart();
  return data;
});

export const checkoutCart = createAsyncThunk('/cart/checkoutCart', async () => {
  await apiClient.checkoutCart();
});

export const addProductToCart = createAsyncThunk(
  '/cart/addProductToCart',
  async (productId) => {
    const data = await apiClient.addProductToCart(productId);
    return data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      return {};
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const item = action.payload.item;
      if (!item) {
        return state;
      }
      const cart = { ...state };
      cart[item.productId] = item;
      return cart;
    });
  },
});

export default cartSlice.reducer;
