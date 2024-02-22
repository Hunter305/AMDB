import { apiSlice } from "./apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => ({ url: "/Movies" }),
    }),
    keepUnUsedDateFor: 5,
  }),
});

export const { useGetMoviesQuery } = movieApiSlice;
