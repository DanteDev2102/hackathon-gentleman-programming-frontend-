import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const senioritiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSeniorities: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.SENIORITIES,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetSenioritiesQuery } = senioritiesApiSlice
