import { createSlice } from "@reduxjs/toolkit";

export const RdcCard = createSlice({
  name: "card",
  initialState: {
    list: localStorage.getItem("card-data")
      ? JSON.parse(localStorage.getItem("card-data"))
      : [],
  },
  reducers: {
    addCard: (state, action) => {
      const product = state.list.find(
        (x) => x.productId === action.payload.productId
      );
      if (!product) {
        state.list.push(action.payload);
        localStorage.setItem("card-data", JSON.stringify(state.list));
      }
    },
    deleteCard: (state, action) => {
      if (state.list.find((x) => x.productId === action.payload.productId)) {
        state.list = state.list.filter(
          (x) => x.productId !== action.payload.productId
        );
        localStorage.setItem("card-data", JSON.stringify(state.list));
      }
    },
    clearCard: (state) => {
      state.list = [];
      localStorage.removeItem("card-data");
    },
  },
});

export const { addCard, deleteCard, clearCard } = RdcCard.actions;

export const cardList = (state) => state.card.list;

export default RdcCard.reducer;
