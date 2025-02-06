import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", otp:"" },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Submitting", values);
    },
  })
  return <div>
  <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">Login as Seller </h1>
    <div className="space-y-5">
      <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            </div>
      { 
        true && 
        <div className="space-y-5">
        <p className="font-medium text-sm opacity-50 mt-5">Enter OTP sent to your email</p>
        <TextField
              fullWidth
              name="otp"
              label="Otp"
              type="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />             </div>}


  </div>;
};

export default SellerLoginForm;
