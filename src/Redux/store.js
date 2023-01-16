import { configureStore } from "@reduxjs/toolkit";
import { gymSlice } from "./Features/dataSlice";

export const store = configureStore({
  reducer: {
    gymSlice: gymSlice.reducer,
  },
});
