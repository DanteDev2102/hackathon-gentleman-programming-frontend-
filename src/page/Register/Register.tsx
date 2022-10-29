import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles/Register.css";
import axios from "axios";
export interface RegisterInterface {}

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC<RegisterInterface> = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async ({
      email,
      lastName,
      firstName,
      password,
      passwordConfirm,
    }) => {
      const res = await axios.post("http://localhost:3001/user/register", {
        email,
        lastName,
        firstName,
        password,
        passwordConfirm,
      });
      console.log(res);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("No password provided."),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
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
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <span>{formik.errors.password}</span>
        )}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Repet Password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <span>{formik.errors.passwordConfirm}</span>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
