import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const modalitiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModalities: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.MODALITIES,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetModalitiesQuery } = modalitiesApiSlice
