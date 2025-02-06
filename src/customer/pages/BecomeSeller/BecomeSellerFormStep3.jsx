import React from 'react';
import { TextField, Button } from '@mui/material';
import { Formik } from 'formik';

const BecomeSellerFormStep3 = ({ formik }) => {
  return (
    <div className="space-y-5">
      {/* Account Number */}
      <TextField
        fullWidth
        name="bankDetails.accountNumber"
        label="Account Number"
        value={formik.values.bankDetails.accountNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
        helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
      />

      {/* IFSC Code */}
      <TextField
        fullWidth
        name="bankDetails.ifscCode"
        label="IFSC Code"
        value={formik.values.bankDetails.ifscCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
        helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
      />

      {/* Account Holder Name */}
      <TextField
        fullWidth
        name="bankDetails.accountHolderName"
        label="Account Holder Name"
        value={formik.values.bankDetails.accountHolderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
        helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
      />

      {/* Submit Button */}
      <Button
        onClick={formik.handleSubmit}
        variant="contained"
        fullWidth
        disabled={formik.isSubmitting}
      >
        Submit
      </Button>
    </div>
  );
};

export default BecomeSellerFormStep3
