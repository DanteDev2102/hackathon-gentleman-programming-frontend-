import { apiSlice } from './apiSlice'
import { Endpoints } from './endpoints'

export interface JobsResponseI {
  data: Jobs[]
  meta: Meta
}

export interface Jobs {
  id: string
  type: string
  attributes: Attributes
  links: Links
}

export interface Attributes {
  title: string
  description_headline: string
  description: string
  projects: string
  functions_headline: string
  functions: string
  benefits_headline: string
  benefits: string
  desirable_headline: string
  desirable: string
  remote: boolean
  remote_modality: string
  remote_zone: string
  country: string
  lang: string
  category_name: string
  perks: string[]
  min_salary: null
  max_salary: null
  published_at: number
  response_time_in_days: ResponseTimeInDays
  applications_count: number
  tenant_city: null
  modality: Company
  seniority: Company
  tags: Tags
  company: Company
}

export interface Company {
  data: DAT
}

export interface DAT {
  id: number
  type: string
}

export interface ResponseTimeInDays {
  min: null
  max: null
}

export interface Tags {
  data: DAT[]
}

export interface Links {
  public_url: string
}

export interface Meta {
  page: number
  per_page: number
  total_pages: number
}

export interface JobsSearchParams {
  query?: string
  page?: string | number
  per_page?: string | number
}

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query<JobsResponseI, JobsSearchParams>({
      query: (params) => ({
        url: Endpoints.SEARCH,
        params,
      }),
    }),
  }),
})

export const { useGetJobsQuery } = jobsApiSlice
