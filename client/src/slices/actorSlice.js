import { apiSlice } from "./apiSlice";

export const actorSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getActor: builder.query({
      query: id => ({ url: `/api/actor/movies/${id}` }),
    }),
  }),
});

export const { useGetActorQuery } = actorSlice;
