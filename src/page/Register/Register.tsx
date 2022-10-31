import { useAuth } from '@/hooks'
import { useGetSenioritiesQuery } from '@/redux/api/senioritiesApiSlice'
import { useRegisterMutation } from '@/redux/register/registerApiSlice'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export interface RegisterInterface {}

const Register: React.FC<RegisterInterface> = () => {
  const { data: seniorities } = useGetSenioritiesQuery()
  const [register, result] = useRegisterMutation()
  const navigate = useNavigate()
  const user = useAuth()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
      seniority: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      seniority: Yup.string().required(),
      password1: Yup.string().min(6, '6 catacteres como minimo').required('No password provided.'),
      password2: Yup.string()
        .min(6, '6 catacteres como minimo')
        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: ({ email, lastName, firstName, password1, password2, seniority }) => {
      register({
        email,
        lastName,
        firstName,
        password: password1,
        passwordConfirm: password2,
        seniority,
      })
        .unwrap()
        .then((_res) => navigate(PrivateRoutes.HOME_AUTH))
    },
  })
  let content
  if (seniorities)
    content = seniorities.data?.map((seniority) => (
      <MenuItem key={seniority.id} value={seniority.attributes.name}>
        {seniority.attributes.name}
      </MenuItem>
    ))

  return (
    <>
      <Container component='main' maxWidth='sm' sx={{ mt: '5%' }}>
        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent='center' textAlign='center'>
            <Grid item xs={12}>
              <Typography variant='h4' fontWeight='bold'>
                Jobizz Register
              </Typography>
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
                placeholder='email'
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
              <FormControl fullWidth>
                <InputLabel id='seniority'>Seniority</InputLabel>
                <Select
                  labelId='seniority'
                  id='seniority'
                  name='seniority'
                  label='seniority'
                  value={formik.values.seniority}
                  onChange={formik.handleChange}>
                  {content}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Button size='large' fullWidth type='submit' variant='contained'>
                {result.isLoading ? <CircularProgress /> : 'enviar'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button size='large' fullWidth variant='outlined' onClick={() => navigate(PublicRoutes.LOGIN)}>
                ¿Ya tienes cuenta?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Register
