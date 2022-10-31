import { useAppDispatch } from '@/hooks'
import { useAuth } from '@/hooks/useAuth'
import { resetCredentials } from '@/redux/login/authSlice'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { Button, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { menuStyles } from './menuStyles'

export default function MenuNav() {
  const navigate = useNavigate()
  const user = useAuth()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(resetCredentials())
    navigate(PublicRoutes.LOGIN)
  }
  return (
    <>
      {user.auth ? (
        <>
          <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PrivateRoutes.HOME_AUTH}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Home
            </Typography>
          </Button>
          {/* <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PrivateRoutes.PROFILE}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Profile
            </Typography>
          </Button> */}
          <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PrivateRoutes.JOBS}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Jobs
            </Typography>
          </Button>
        </>
      ) : (
        <></>
      )}
      {user.auth ? (
        <>
          <Button sx={menuStyles} variant='text' color='inherit' onClick={handleLogout}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Logout
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.LOGIN}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Login
            </Typography>
          </Button>
          <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.REGISTER}>
            <Typography variant='subtitle2' fontWeight='bold'>
              Register
            </Typography>
          </Button>
        </>
      )}
    </>
  )
}
