import { apiSlice } from "./apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => ({ url: "/Movies" }),
      keepUnUsedDateFor: 5,
    }),
    getMovie: builder.query({
      query: id => ({ url: `/Movies/${id}` }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApiSlice;
