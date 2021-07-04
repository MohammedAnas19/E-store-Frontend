import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";

// export const getProducts = createAsyncThunk(
//   "productSlice/getProducts",
//   async () => {
//     const res = await axios.get(`/products`);
//     return res;
//   }
// );
// export const getProductById = createAsyncThunk(
//   "productSlice/getProductById",
//   async (id) => {
//     console.log(id);
//     const res = await axios.get(`/products/?id=${id}`);
//     return res;
//   }
// );

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subTotal: 0,
    gst: 0,
    total: 0,
    count: 0,
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { _id, title, img, price, company } = action.payload;
      const index = state.cart.findIndex(
        (element) => element._id == action.payload._id
      );

      //ading a new element to cart
      if (index == -1) {
        state.cart.push({
          _id: _id,
          title: title,
          img: img,
          price: price,
          company: company,
          qty: 1,
          subTotal: price,
        });
      }

      //ading a existing element to cart and update 1 qty by 1
      else {
        state.cart.map((e) => {
          if (e._id == action.payload._id) {
            e.qty = e.qty + 1;
            e.subTotal = e.subTotal + action.payload.price;
          }
        });
      }

      //update the subtotal,count,gst and total
      state.subTotal = 0;
      state.count = 0;
      state.cart.map((e) => {
        state.subTotal = state.subTotal + e.subTotal;
        state.count = state.count + e.qty;
      });
      state.gst = 0.1 * state.subTotal;
      state.gst = Number(state.gst.toFixed(2));
      state.total = state.subTotal + state.gst;
    },

    quantityCart: (state, action) => {
      // increase quantity by 1 from cart
      if (action.payload.action == "plus") {
        state.cart.map((e) => {
          if (e._id == action.payload.c._id) {
            e.qty = e.qty + 1;
            e.subTotal = e.subTotal + action.payload.c.price;
          }
        });
      }

      // decrease quantity by 1 from cart
      if (action.payload.action == "minus" && action.payload.c.qty != 1) {
        state.cart.map((e) => {
          if (e._id == action.payload.c._id) {
            e.qty = e.qty - 1;
            e.subTotal = e.subTotal - action.payload.c.price;
          }
        });
      }

      // find index of the product from cart
      const index = state.cart.findIndex(
        (element) => element._id == action.payload.c._id
      );

      // delete when qty less than 1 from cart
      if (action.payload.action == "minus" && action.payload.c.qty == 1) {
        console.log("delete");
        state.cart.splice(index, 1);
      }

      // delete the product from cart
      if (action.payload.action == "delete") {
        console.log("delete");
        state.cart.splice(index, 1);
      }

      //update the subtotal,count,gst and total
      state.subTotal = 0;
      state.count = 0;
      state.cart.map((e) => {
        state.subTotal = state.subTotal + e.subTotal;
        state.count = state.count + e.qty;
      });
      state.gst = 0.1 * state.subTotal;
      state.gst = Number(state.gst.toFixed(2));
      state.total = state.subTotal + state.gst;
      console.log(state.count);
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    //     [getProducts.fulfilled]: (state, action) => {
    //       state.products = action.payload.data.products;
    //     },
    //     [getProductById.fulfilled]: (state, action) => {
    //       state.products = action.payload.data.products;
    //     },
    //
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, quantityCart } = cartSlice.actions;

export default cartSlice.reducer;
