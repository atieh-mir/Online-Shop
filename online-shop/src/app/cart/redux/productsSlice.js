import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
  };

  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
      [productsFetch.pending]: (state, action) => {
        state.status = "pending";
      },
      [productsFetch.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
      },
      [productsFetch.rejected]: (state, action) => {
        state.status = "rejected";
      },
    },
  });
  
  export default productsSlice.reducer;