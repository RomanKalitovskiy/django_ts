import { configureStore } from "@reduxjs/toolkit";
import { menuApi } from "api/menu.api";

const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export default store;
