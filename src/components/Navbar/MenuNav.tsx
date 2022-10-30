import { PublicRoutes } from '@/routes'
import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { menuStyles } from './menuStyles'

export default function MenuNav() {
  return (
    <>
      <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={PublicRoutes.HOME}>
        <Typography variant='subtitle2' fontWeight='bold'>
          Home
        </Typography>
      </Button>
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
  )
}
