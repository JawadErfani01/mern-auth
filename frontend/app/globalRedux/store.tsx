"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
