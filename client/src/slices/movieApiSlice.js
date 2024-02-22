import { apiSlice } from "./apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => ({ url: "/movie" }),
      keepUnUsedDateFor: 5,
    }),
    getMovie: builder.query({
      query: id => ({ url: `/movie/${id}` }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApiSlice;
