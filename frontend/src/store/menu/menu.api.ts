import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMenuPosition, IMenuCategory } from "../../Models/menu";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/menu/",
  }),
  endpoints: (build) => ({
    getMenuCategories: build.query<IMenuCategory[], undefined>({
      query: () => ({
        url: `categories/`,
      }),
    }),
    getMenuPositions: build.query<IMenuPosition[], number>({
      query: (categoryId) => ({
        url: `positions/${categoryId}/`,
      }),
    }),
  }),
});

export const { useGetMenuCategoriesQuery, useGetMenuPositionsQuery } = menuApi;
