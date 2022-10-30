import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { menuStyles } from './menuStyles'

export default function MenuNav() {
  return (
    <>
      <Button sx={menuStyles} variant='text' color='inherit' component={RouterLink} to={'/'}>
        <Typography variant='subtitle2'>Home</Typography>
      </Button>
    </>
  )
}
