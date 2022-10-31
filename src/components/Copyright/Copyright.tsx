import { PublicRoutes } from '@/routes'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <Typography variant='body2' color='white' align='center'>
      {'Copyright ©  Jobizz'}&nbsp;
      <Link to={PublicRoutes.LANDING}>Go home</Link>
      &nbsp;{new Date().getFullYear()}
    </Typography>
  )
}
export default Copyright
