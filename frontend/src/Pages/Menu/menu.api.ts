import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMenuGroup } from "./models";

export const menuApi = createApi({
  reducerPath: "menu/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/menu",
  }),
  endpoints: (build) => ({
    getMenu: build.query<IMenuGroup[], any>({
      query: () => ({
        url: ``,
      }),
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
