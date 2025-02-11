import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api';  // Importing the Axios instance from api.js

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',  // Changed from name to firstName
    lastName: '',
    username: '',  // Added username
    address: '',
    pincode: '',
    locality: '',
    city: '',
    state: '',
    role:'' // Role
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email and password
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // Additional validation for registration form fields
    if (!isLogin) {
      if (!formData.username) {  // Validate username
        newErrors.username = 'Username is required';
      }

      if (!formData.firstName) {  // Validate firstName
        newErrors.firstName = 'First Name is required';
      }

      if (!formData.lastName) {
        newErrors.lastName = 'Last Name is required';  
      }

      if (!formData.address) {
        newErrors.address = 'Address is required';
      }

      if (!formData.city) {
        newErrors.city = 'City is required';
      }

      if (!formData.state) {
        newErrors.state = 'State is required';
      }

      if (!formData.pincode) {
        newErrors.pincode = 'Pincode is required';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      console.log(isLogin ? 'Logging in with:' : 'Registering with:', formData);

      try {
        if (isLogin) {
          // Login request
          const response = await api.post('/auth/login', {
            email: formData.email,
            password: formData.password,
          });
          console.log('Login response:', response);
          localStorage.setItem('token', response.data.token); // Store the token
          navigate('/seller/*'); // Redirect to dashboard or home page after login
        } else {
          // Register request
          const response = await api.post('/auth/user-register', {
            username: formData.username,  // Send username in registration
            firstName: formData.firstName, // Changed from name to firstName
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            pincode: formData.pincode,
            locality: formData.locality,
            city: formData.city,
            state: formData.state,
            role: "RENTER",
          });
          console.log('Registration response:', response);
          navigate('/seller'); // Redirect to login page after successful registration
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error as per your application's requirements
        setErrors({ form: 'An error occurred. Please try again.' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
        <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">
          {isLogin ? 'Login as Seller' : 'Register as Seller'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </Grid>

            {/* Conditional fields for registration */}
            {!isLogin && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}  // Added username field
                    onChange={handleChange}
                    error={Boolean(errors.username)}
                    helperText={errors.username}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"  // Changed from name to firstName
                    value={formData.firstName}  // Changed from name to firstName
                    onChange={handleChange}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}  
                    onChange={handleChange}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    error={Boolean(errors.address)}
                    helperText={errors.address}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    error={Boolean(errors.pincode)}
                    helperText={errors.pincode}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    error={Boolean(errors.locality)}
                    helperText={errors.locality}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={Boolean(errors.city)}
                    helperText={errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    error={Boolean(errors.state)}
                    helperText={errors.state}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained" color="primary">
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Grid>
          </Grid>
        </form>

        <div className="mt-10 space-y-2">
          <h1 className="text-sm font-medium text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </h1>
          <Button
            fullWidth
            sx={{ py: '11px' }}
            variant="outlined"
            onClick={() => setIsLogin(!isLogin)}
            className={`${
              isLogin ? 'text-white border-blue-500' : 'text-gray-500 border-gray-500'
            }`}
          >
            {isLogin ? 'Register' : 'Login'}
          </Button>
        </div>
      </section>

      <section className="hidden md:flex md:col-span-1 lg:col-span-2 justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl">Join the Marketplace Revolution</p>
            <p className="text-lg text-primary-color">Boost Your Sales Today</p>
          </div>
          <img
            src="https://assets.aboutamazon.com/dims4/default/f438bd2/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F74%2Fa4%2F5dc8d9a944138d1b525c34d04faa%2Fheader-v2.png"
            alt="Marketplace"
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
