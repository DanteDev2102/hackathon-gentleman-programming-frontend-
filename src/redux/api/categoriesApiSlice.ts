import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<unknown[], void>({
      query: () => ({
        url: Endpoints.CATEGORIES,
        params: {
          per_page: 10,
          page: 1,
        },
      }),
    }),
  }),
})

export const { useGetCategoriesQuery } = categoriesApiSlice
