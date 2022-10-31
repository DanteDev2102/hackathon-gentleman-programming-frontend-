import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface CompaniesResponse {
  data: CompaniesI[]
  meta: Meta
}

export interface CompaniesI {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  name: string
  description: string
  long_description: string
  projects: string
  benefits: string
  web: string
  twitter: string
  github: string
  facebook: string
  angellist: string
  country: string
  response_time_in_days: ResponseTimeInDays
  logo: string
}

export interface ResponseTimeInDays {
  min: null
  max: null
}

export interface Meta {
  page: number
  per_page: number
  total_pages: number
}

export const companiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<CompaniesResponse, void>({
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
