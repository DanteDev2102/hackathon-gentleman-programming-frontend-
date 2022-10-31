import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface SeniorityResponseI {
  data: SenioritiesI[]
  meta: Meta
}
export interface Attributes {
  name: string
  locale_key: string
}
export interface Meta {
  page: number
  per_page: number
  total_pages: number
}
export interface SenioritiesI {
  id: string
  type: string
  attributes: Attributes
}
export interface Attributes {
  name: string
  locale_key: string
}

export const senioritiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSeniorities: builder.query<SeniorityResponseI, void>({
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
