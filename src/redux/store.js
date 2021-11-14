import { configureStore } from "@reduxjs/toolkit";
import product from "./rdcProduct";
import search from "./rdcSearch";

export const Store = configureStore({
  reducer: {
    product,
    search,
  },
});
