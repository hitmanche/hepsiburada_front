import { createSlice } from "@reduxjs/toolkit";

export const RdcCard = createSlice({
  name: "card",
  initialState: {
    list: [],
  },
  reducers: {
    loadCard: (state, action) => {
      state.list = action.payload;
    },
    addCard: (state, action) => {
      const product = state.list.find(
        (x) => x.productId === action.payload.productId
      );
      if (!product) {
        state.list.push(action.payload);
      }
    },
    deleteCard: (state, action) => {
      if (state.list.find((x) => x.productId === action.payload.productId)) {
        state.list = state.list.filter(
          (x) => x.productId !== action.payload.productId
        );
      }
    },
    clearCard: (state) => {
      state.list = [];
      //localStorage.removeItem("card-data");
    },
  },
});

export const { loadCard, addCard, deleteCard, clearCard } = RdcCard.actions;

export const cardList = (state) => state.card.list;

export default RdcCard.reducer;
