import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const perksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPerks: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.PERKS,
      }),
    }),
  }),
})

export const { useGetPerksQuery } = perksApiSlice
