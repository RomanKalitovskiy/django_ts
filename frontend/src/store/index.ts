import { configureStore } from "@reduxjs/toolkit";
import { menuApi } from "../Pages/Menu/menu.api";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
});
