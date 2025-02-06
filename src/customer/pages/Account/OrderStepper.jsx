import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

// Steps to represent order status
const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
  { name: "Arriving", description: "by 16 Jul 18 Jul", value: "ARRIVING" },
  { name: "Delivered", description: "by 16 Jul 18 Jul", value: "DELIVERED" },
];

// Cancelled Steps (if applicable)
const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];

export default function OrderStepper({ orderStatus }) {
  const [statusStep, setStatusStep] = useState(steps);
  const currentStep = statusStep.findIndex((step) => step.value === orderStatus);

  // Update steps if orderStatus is canceled
  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  const handleNext = () => {
    setStatusStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStatusStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setStatusStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical">
        {statusStep.map((step, index) => (
          <Step key={step.name}>
            <StepLabel
              optional={
                index === statusStep.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              sx={{
                // Dynamic styles for step
                color:
                  index < currentStep
                    ? "primary.main" // Completed steps
                    : index === currentStep
                    ? "primary.dark" // Active step
                    : "text.secondary", // Upcoming steps
              }}
            >
              {step.name}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === statusStep.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {currentStep === statusStep.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
