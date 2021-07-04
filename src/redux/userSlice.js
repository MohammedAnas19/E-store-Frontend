import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";

export const registerUser = createAsyncThunk(
  "userSlice/registerUser",
  async (user) => {
    let res = {};
    await axios
      .post(`/signup`, user)
      .then((resp) => {
        res = resp;
      })
      .catch((err) => {
        res = err.response;
      });
    return res;
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async (user) => {
    let res = {};
    await axios
      .post(`/signin`, user)
      .then((resp) => {
        res = resp;
      })
      .catch((err) => {
        res = err.response;
      });
    return res;
  }
);

export const isUserLoggedIn = createAsyncThunk(
  "userSlice/isUserLoggedIn",
  async () => {
    let user = {};
    const token = localStorage.getItem("token");
    if (token) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    return user;
  }
);

export const logout = createAsyncThunk("userSlice/logout", async () => {
  return "";
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    authenticated: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    // [registerUser.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },

    [registerUser.fulfilled]: (state, action) => {
      if (action.payload.data.message) {
        state.error = "Something Went Wrong";
        state.user = {};
        state.authenticated = false;
      }
      if (action.payload.data.token) {
        const token = action.payload.data.token;
        const user = action.payload.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        state.authenticated = true;
        state.error = "";
      }
    },

    [loginUser.fulfilled]: (state, action) => {
      console.log("action", action);
      if (action.payload.data.message) {
        state.error = "Something Went Wrong";
        state.user = {};
        state.authenticated = false;
      }
      if (action.payload.data.token) {
        const token = action.payload.data.token;
        const user = action.payload.data.user;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        state.user = user;
        state.authenticated = true;
        state.error = "";
      }
    },

    [isUserLoggedIn.fulfilled]: (state, action) => {
      if (action.payload._id) {
        const user = action.payload;
        state.user = user;
        state.authenticated = true;
        state.error = "";
      }
    },

    [logout.fulfilled]: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = {};
      state.authenticated = false;
      state.error = "";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount, getProducts } =
//   productSlice.actions;

export default userSlice.reducer;
