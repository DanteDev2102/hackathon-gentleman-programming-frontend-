import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const companiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.COMPANIES,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetCompaniesQuery } = companiesApiSlice
