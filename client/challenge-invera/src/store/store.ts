import { configureStore } from "@reduxjs/toolkit";
import { usersTableSlice } from "./userTable/userTableSlice";

export const store = configureStore({
  reducer: {
    usersTable: usersTableSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
