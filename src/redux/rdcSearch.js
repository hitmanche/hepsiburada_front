import { createSlice } from "@reduxjs/toolkit";

export const RdcSearch = createSlice({
  name: "search",
  initialState: {
    arrangement: "",
    brand: "",
    color: "",
    text: "",
    page: 1,
  },
  reducers: {
    setArrangement: (state, action) => {
      if (state.arrangement === action.payload) action.payload = "";
      state.arrangement = action.payload;
    },
    setBrand: (state, action) => {
      if (state.brand === action.payload) action.payload = "";
      state.brand = action.payload;
    },
    setColor: (state, action) => {
      if (state.color === action.payload) action.payload = "";
      state.color = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setPage: (state, action) => {
      console.log(state,action)
      state.page = action.payload;
    },
  },
});

export const { setArrangement, setBrand, setColor, setText, setPage } =
  RdcSearch.actions;

export const searchArrangement = (state) => state.search.arrangement;
export const searchBrand = (state) => state.search.brand;
export const searchColor = (state) => state.search.color;
export const searchText = (state) => state.search.text;
export const pagination = (state) => state.search.page;

export default RdcSearch.reducer;
