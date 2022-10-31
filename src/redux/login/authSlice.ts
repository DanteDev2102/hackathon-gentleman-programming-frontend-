import { LoginResponseI } from './loginApiSlice'
import type { RootState } from '@/redux'
import { clearLocalStorage, persistLocalStorage } from '@/utilities'
import { createSlice } from '@reduxjs/toolkit'

const EmptyAuthState: LoginResponseI = {
  id: '',
  auth: false,
  firstName: '',
  lastName: '',
  email: '',
  seniority: '',
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: sessionStorage.getItem('auth')
    ? JSON.parse(sessionStorage.getItem('auth') as string)
    : (EmptyAuthState as LoginResponseI),
  reducers: {
    setCredentials: (_state, action) => {
      persistLocalStorage<LoginResponseI>(Key, action.payload)
      return action.payload
    },
    updateCredentials: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<LoginResponseI>(Key, result)
      return result
    },
    resetCredentials: () => {
      clearLocalStorage(Key)
      return EmptyAuthState
    },
  },
})

export const { setCredentials, updateCredentials, resetCredentials } = authSlice.actions
const Key = 'auth'

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth as LoginResponseI
