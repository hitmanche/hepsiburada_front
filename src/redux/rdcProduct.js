import { createSlice } from "@reduxjs/toolkit";

export const RdcProduct = createSlice({
  name: "product",
  initialState: {
    list: [],
    filter: [],
  },
  reducers: {
    loadList: (state, action) => {
      state.list = action.payload;
    },
    loadFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { loadList, loadFilter } = RdcProduct.actions;

export const productList = (state) => state.product.list;
export const productFilter = (state) => state.product.filter;

export default RdcProduct.reducer;
