import * as Yup from 'yup'

export const loginFormSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('No password provided.'),
  })