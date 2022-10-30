import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import './styles/Register.css'
export interface RegisterInterface {}

interface FormValues {
  name: string
  email: string
  password1: string
  password2: string
}

const Register: React.FC<RegisterInterface> = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
    },
    onSubmit: async ({ email, lastName, firstName, password1, password2 }) => {
      const res = await axios.post('http://localhost:3001/user/register', {
        email,
        lastName,
        firstName,
        password: password1,
        passwordConfirm: password2,
      })
      console.log(res)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password1: Yup.string().required('No password provided.'),
      password2: Yup.string()
        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
        .required('Required'),
    }),
  })

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent='center' textAlign='center'>
            <Grid item xs={12}>
              <Typography variant='h5'>Jobizz Login</Typography>
              <Typography>Registration 👍</Typography>
              <Typography variant='body2'>Let's Register, Apply to jobs!</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='firstName'
                name='firstName'
                label='First Name'
                type='text'
                placeholder='First Name'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='lastName'
                name='lastName'
                label='Last Name'
                type='text'
                placeholder='First Name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
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
                id='password1'
                name='password1'
                label='password'
                type='password'
                placeholder='password'
                value={formik.values.password1}
                onChange={formik.handleChange}
                error={formik.touched.password1 && Boolean(formik.errors.password1)}
                helperText={formik.touched.password1 && formik.errors.password1}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id='password2'
                name='password2'
                label='Repeat your password'
                type='password'
                placeholder='password'
                value={formik.values.password2}
                onChange={formik.handleChange}
                error={formik.touched.password2 && Boolean(formik.errors.password2)}
                helperText={formik.touched.password2 && formik.errors.password2}
              />
            </Grid>

            <Grid item xs={12}>
              <Button size='large' fullWidth type='submit' variant='contained'>
                submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Register
