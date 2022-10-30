import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.SEARCH,
        params: {
          query: 'angular',
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetJobsQuery } = jobsApiSlice
