import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./styles/Login.css";
export interface LoginInterface {}

interface FormValues {
  email: string;
  password: string;
}
const Login: React.FC<LoginInterface> = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("No password provided."),
    }),
  });

  return (
    <div className="login">
      <div className="hero">
        <h3>Jobizz</h3>
        <p>Welcame Back 👋</p>
        <p>Let's log in, Apply to jobs!</p>
      </div>

      <form className="login-form" noValidate onSubmit={formik.handleSubmit}>
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
        <button type="submit">Log in</button>
      </form>
      <div className="button-section">
        <span>Forgot Password? </span>
      </div>
    </div>
  );
};

export default Login;
