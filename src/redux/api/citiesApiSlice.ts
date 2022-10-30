import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const citiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.CITIES,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetCitiesQuery } = citiesApiSlice
