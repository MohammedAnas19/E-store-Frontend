import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";

export const getProducts = createAsyncThunk(
  "productSlice/getProducts",
  async () => {
    const res = await axios.get(`/products`);
    return res;
  }
);
export const getProductById = createAsyncThunk(
  "productSlice/getProductById",
  async (id) => {
    console.log(id);
    const res = await axios.get(`/products/?id=${id}`);
    return res;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        title: "aaaa",
      },
    ],
    loading: false,
    detailProduct: [
      {
        title: "aaaa",
      },
    ],
  },
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data.products;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.detailProduct = action.payload.data.products;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount, getProducts } =
//   productSlice.actions;

export default productSlice.reducer;
