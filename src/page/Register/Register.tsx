import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles/Register.css";
import axios from "axios";
export interface RegisterInterface {}

interface FormValues {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const Register: React.FC<RegisterInterface> = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    },
    onSubmit: async ({email,lastName,firstName,password1,password2}) => {
      const res = await axios.post('http://localhost:3001/user/register',{
        email,
        lastName,
        firstName,
        password: password1,
        passwordConfirm: password2
      })
      console.log(res)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password1: Yup.string().required("No password provided."),
      password2: Yup.string()
        .oneOf([Yup.ref("password1"), null], "Passwords must match")
        .required("Required"),
    }),
  });

  return (
    <div className="register">
      <h3>Jobizz</h3>
      <p>Registration 👍</p>
      <p>Let's Register, Apply to jobs!</p>

      <form className="register-form" noValidate onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <span>{formik.errors.firstName}</span>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <span>{formik.errors.lastName}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={formik.values.password1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password1 && formik.errors.password1 && (
          <span>{formik.errors.password1}</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repet Password"
          value={formik.values.password2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password2 && formik.errors.password2 && (
          <span>{formik.errors.password2}</span>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
