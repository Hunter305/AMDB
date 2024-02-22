import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://6444ee43914c816083c23999.mockapi.io" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["movies", "actors", "producers"],
  endpoints: builder => ({}),
});
