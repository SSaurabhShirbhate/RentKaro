import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const SellerAccountForm = () => {
  const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details",
  ];
  const [activeStep, setActiveStep] = useState(0); // Initial step should be 0

  // Handle step changes
  const handleStep = (value) => {
    if (value === 1 && activeStep < steps.length - 1) {
      setActiveStep(activeStep + value); // Move to the next step
    } else if (value === -1 && activeStep > 0) {
      setActiveStep(activeStep + value); // Go back to the previous step
    } else if (activeStep === steps.length - 1) {
      handleCreateAccount(); // Handle account creation logic at the last step
    }
  };

  // Logic for account creation
  const handleCreateAccount = () => {
    console.log("Account created successfully");
    // After account creation, optionally do something (e.g., navigate away)
  };

  const formik = useFormik({
    initialValues: {
      // Profile Information
      profile: {
        sellerName: '',
        email: '',
        password: '',
      },
      // Bank Details
      bankDetails: {
        accountNumber: '',
        ifscCode: '',
        accountHolderName: '',
      },
      // Business Information
      businessDetails: {
        businessName: '',
        businessEmail: '',
        businessMobile: '',
        logo: '', // assuming file upload or image URL
        banner: '', // assuming file upload or image URL
        businessAddress: '',
      },
    },
    // You can add validation schema here if needed
    // validationSchema: FormSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Formik Submitted:", values);

    } });


  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <section className="mt-20 space-y-10">
      <div>
        {activeStep === 0? <BecomeSellerFormStep1 formik={formik}/>:  activeStep === 1? <BecomeSellerFormStep2 formik={formik}/>:activeStep === 2? <BecomeSellerFormStep3 formik={formik}/>:<BecomeSellerFormStep4 formik={formik}/>}

      </div>
        <div className="flex items-center justify-between">
        <Button
          onClick={() => handleStep(-1)} // Go back
          variant="contained"
          disabled={activeStep === 0} // Disable when at the first step
        >
          Back
        </Button>
        <Button
          onClick={() => handleStep(1)} // Continue or Create Account
          variant="contained"
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
        </Button>
      </div>
      </section>


    </div>
  );
};

export default SellerAccountForm;
