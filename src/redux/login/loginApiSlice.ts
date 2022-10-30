import { apiSlice } from '../api'

export interface LoginRequestI {
  email: string
  password: string
}

export interface LoginResponseI {
  id: string
  auth: boolean
  firstName: string
  lastName: string
  email: string
  seniority: string
  token: string
}

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseI, LoginRequestI>({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApiSlice
