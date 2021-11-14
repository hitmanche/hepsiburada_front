import { configureStore } from "@reduxjs/toolkit";
import product from "./rdcProduct";
import search from "./rdcSearch";
import card from "./rdcCard";

export const Store = configureStore({
  reducer: {
    product,
    search,
    card,
  },
});
