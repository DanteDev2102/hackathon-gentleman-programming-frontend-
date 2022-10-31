import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface CategoriesResponse {
  data: CategoriesI[]
  meta: Meta
}

export interface CategoriesI {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  name: string
  dimension: string
}

export interface Meta {
  page: number
  per_page: number
  total_pages: number
}

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, void>({
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
