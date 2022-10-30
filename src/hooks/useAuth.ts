import { selectCurrentUser } from '@/redux/login/authSlice'
import { useMemo } from 'react'
import { useAppSelector } from './useAppSelector'

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser)
  return useMemo(() => user, [user])
}
