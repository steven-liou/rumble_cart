import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../lib/apiClient';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await apiClient.fetchProducts();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (arg) => {
    const { callback, product } = arg;
    const data = await apiClient.addProduct(product);

    if (callback) {
      callback();
    }
    return data;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ callback, product }) => {
    const data = await apiClient.updateProduct(product);
    if (callback) {
      callback();
    }
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
    builder.addCase(addProduct.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      return state.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
    });
  },
});

export default productsSlice.reducer;
