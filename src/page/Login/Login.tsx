import { useAppDispatch, useAuth } from '@/hooks'
import { setCredentials } from '@/redux/login/authSlice'
import { useLoginMutation } from '@/redux/login/loginApiSlice'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const [login, { data, isSuccess }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('No password provided.'),
    }),
    onSubmit: (values) => {
      console.log(values)
      login(values)
        .unwrap()
        .then((res) => dispatch(setCredentials(res)))
        .then((_res) => navigate(PrivateRoutes.HOME_AUTH))
    },
  })

  useEffect(() => {
    if (user.auth) navigate(PrivateRoutes.HOME_AUTH)
  }, [])

  return (
    <Container component='main' maxWidth='xs'>
      {user.auth ? (
        <></>
      ) : (
        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent='center' textAlign='center'>
            <Grid item xs={12}>
              <Typography variant='h5'>Jobizz Login</Typography>
              <Typography>Welcame Back 👋</Typography>
              <Typography variant='body2'>Let's log in, Apply to jobs!</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='email'
                name='email'
                label='email'
                type='email'
                placeholder='usuario o mail'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id='password'
                name='password'
                label='password'
                type='password'
                placeholder='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button size='large' fullWidth type='submit' variant='contained'>
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  )
}

export default Login
