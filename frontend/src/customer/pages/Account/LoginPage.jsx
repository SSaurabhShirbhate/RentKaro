import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Import the custom hook
import api from '../../../api/api'; // Import your custom axios instance

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    
    const newErrors = {};
  
    // Basic validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }
  
    if (!password) {
      newErrors.password = 'Password is required';
    }
  
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log('Sending request to the backend...');
        // If login
        if (isLogin) {
          console.log('Sending login request...');
          const usernameOrEmail = email;
          const response = await api.post('/auth/login', {
            usernameOrEmail,
            password
          });
  
          console.log('Login Response:', response);
  
          if (response.status === 200 && response.data.token) {
            const token = response.data.token;
            console.log('Token received:', token);
            localStorage.setItem('token', token); // Save token to localStorage
            login(); // Update login state
            navigate('/account'); // Redirect after successful login
          } else {
            setErrors({ api: 'Invalid email or password' });
          }
        } else {
          console.log('Sending registration request...');
          const usernameOrEmail = email;
          const response = await api.post('/auth/register', { usernameOrEmail, password });
  
          console.log('Register Response:', response);
  
          if (response.status === 201) {
            login(); // Update login state
            navigate('/account');
          } else {
            setErrors({ api: 'Registration failed. Please try again.' });
          }
        }
      } catch (error) {
        console.error('Error during login/registration:', error);
  
        if (error.response) {
          console.log('API Error Response:', error.response); 
          setErrors({
            api: error.response.data.message || 'An error occurred. Please try again.',
          });
        } else if (error.request) {
          console.log('No response from the server:', error.request);
          setErrors({ api: 'No response from the server. Please try again.' });
        } else {
          console.log('Request setup error:', error.message);
          setErrors({ api: 'An unexpected error occurred. Please try again.' });
        }
      }
    } else {
      setErrors(newErrors);
    }

    setLoading(false); // Stop loading after request
  };

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
        <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">
          {isLogin ? 'User Login' : 'User Registration'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          {errors.api && (
            <div className="text-red-500 text-center">{errors.api}</div>
          )}

          <div className="mt-5">
            <Button fullWidth type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : (isLogin ? 'Login' : 'Register')}
            </Button>
          </div>
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
            <p className="text-2xl">Join Our Community</p>
            <p className="text-lg text-primary-color">Start Your Journey with Us</p>
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

export default UserLogin;
