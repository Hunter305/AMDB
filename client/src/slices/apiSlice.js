import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://amdb.onrender.com/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["movies", "actors", "producers"],
  endpoints: builder => ({}),
});
