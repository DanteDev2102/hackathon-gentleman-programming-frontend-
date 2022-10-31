import { useAuth } from '@/hooks'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { Button, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const user = useAuth()

  useEffect(() => {
    user.auth ? navigate(PrivateRoutes.HOME_AUTH) : <></>
  }, [])

  return !user.auth ? (
    <Grid
      container
      component='main'
      spacing={8}
      sx={{ minHeight: '80vh', display: 'grid', alignContent: 'center', textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Aplica a miles de ofertas con Jobizz </Typography>
        <Typography variant='h4'>Consigue el trabajo de tus sueños en el mundo tech 🚀</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' size='large' onClick={() => navigate(PublicRoutes.LOGIN)}>
          Empezar
        </Button>
      </Grid>
    </Grid>
  ) : (
    <></>
  )
}
export default LandingPage
