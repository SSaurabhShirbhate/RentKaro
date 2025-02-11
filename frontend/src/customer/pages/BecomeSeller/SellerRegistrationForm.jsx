// import React, { useState } from "react";
// import { Grid, TextField, Button } from "@mui/material";

// const SellerRegistrationForm: React.FC = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     pincode: "",
//     address: "",
//     locality: "",
//     city: "",
//     state: "",
//     email: "",
//     password: "",
//     role: "SELLER", // Default role is SELLER
//   });

//   // State to manage validation errors
//   const [errors, setErrors] = useState({
//     name: "",
//     mobile: "",
//     pincode: "",
//     address: "",
//     locality: "",
//     city: "",
//     state: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Validate the form fields
//   const validate = () => {
//     const tempErrors = { ...errors };
//     let isValid = true;

//     if (!formData.name) {
//       tempErrors.name = "Name is required";
//       isValid = false;
//     } else {
//       tempErrors.name = "";
//     }

//     if (!formData.mobile) {
//       tempErrors.mobile = "Mobile is required";
//       isValid = false;
//     } else {
//       tempErrors.mobile = "";
//     }

//     if (!formData.pincode) {
//       tempErrors.pincode = "Pincode is required";
//       isValid = false;
//     } else {
//       tempErrors.pincode = "";
//     }

//     if (!formData.address) {
//       tempErrors.address = "Address is required";
//       isValid = false;
//     } else {
//       tempErrors.address = "";
//     }

//     if (!formData.locality) {
//       tempErrors.locality = "Locality/Town is required";
//       isValid = false;
//     } else {
//       tempErrors.locality = "";
//     }

//     if (!formData.city) {
//       tempErrors.city = "City is required";
//       isValid = false;
//     } else {
//       tempErrors.city = "";
//     }

//     if (!formData.state) {
//       tempErrors.state = "State is required";
//       isValid = false;
//     } else {
//       tempErrors.state = "";
//     }

//     if (!formData.email) {
//       tempErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Email is invalid";
//       isValid = false;
//     } else {
//       tempErrors.email = "";
//     }

//     if (!formData.password) {
//       tempErrors.password = "Password is required";
//       isValid = false;
//     } else {
//       tempErrors.password = "";
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log("Form submitted successfully", formData);
//       // Add API call here for seller registration
//     } else {
//       console.log("Form validation failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="name"
//             label="Seller Name"
//             value={formData.name}
//             onChange={handleChange}
//             error={Boolean(errors.name)}
//             helperText={errors.name}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="mobile"
//             label="Mobile Number"
//             value={formData.mobile}
//             onChange={handleChange}
//             error={Boolean(errors.mobile)}
//             helperText={errors.mobile}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="pincode"
//             label="Pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             error={Boolean(errors.pincode)}
//             helperText={errors.pincode}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="address"
//             label="Address"
//             value={formData.address}
//             onChange={handleChange}
//             error={Boolean(errors.address)}
//             helperText={errors.address}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="locality"
//             label="Locality/Town"
//             value={formData.locality}
//             onChange={handleChange}
//             error={Boolean(errors.locality)}
//             helperText={errors.locality}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="city"
//             label="City"
//             value={formData.city}
//             onChange={handleChange}
//             error={Boolean(errors.city)}
//             helperText={errors.city}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="state"
//             label="State"
//             value={formData.state}
//             onChange={handleChange}
//             error={Boolean(errors.state)}
//             helperText={errors.state}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="email"
//             label="Email"
//             value={formData.email}
//             onChange={handleChange}
//             error={Boolean(errors.email)}
//             helperText={errors.email}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             error={Boolean(errors.password)}
//             helperText={errors.password}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" fullWidth>
//             Register as Seller
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default SellerRegistrationForm;
