import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface ModalitiesResponse {
  data: ModalitiesI[]
  meta: Meta
}

export interface ModalitiesI {
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

export const modalitiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModalities: builder.query<ModalitiesResponse, void>({
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
