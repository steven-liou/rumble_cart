import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../lib/apiClient';
import { addProductToCart } from '../cart/cart';

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

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    await apiClient.deleteProduct(productId);
    return productId;
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
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const deletedProductId = action.payload;
      return state.filter((product) => product._id !== deletedProductId);
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const updatedProduct = action.payload.product;
      if (!updateProduct) {
        return state;
      }
      return state.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
    });
  },
});

export default productsSlice.reducer;
