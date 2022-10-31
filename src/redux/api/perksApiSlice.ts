import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface PerksResponse {
  data: PerksI[]
  meta: Meta
}

export interface PerksI {
  id: string
  type: string
  attributes: Attributes
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

export const perksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPerks: builder.query<PerksResponse, void>({
      query: () => ({
        url: Endpoints.PERKS,
      }),
    }),
  }),
})

export const { useGetPerksQuery } = perksApiSlice
