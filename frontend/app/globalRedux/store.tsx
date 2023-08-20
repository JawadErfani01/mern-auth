"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counter/counterSlice";
import { userApi } from "./Features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
