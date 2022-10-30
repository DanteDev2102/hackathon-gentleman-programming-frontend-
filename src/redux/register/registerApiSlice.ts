import { apiSlice } from '../api'

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/user/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useRegisterMutation } = registerApiSlice
