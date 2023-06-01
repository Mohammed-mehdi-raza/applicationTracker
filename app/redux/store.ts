import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import applicationReducer from "./features/applicationsSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    applicationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;