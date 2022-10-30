import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const tagsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.TAGS,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetTagsQuery } = tagsApiSlice
