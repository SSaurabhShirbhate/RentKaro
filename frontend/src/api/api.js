import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:6060', // Replace with your backend API URL
});

// Add a request interceptor to include the token in the Authorization header
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
        // Attach the token to the Authorization header
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor to handle token expiration or errors
api.interceptors.response.use(
    response => response, 
    async (error) => {
        if (error.response && error.response.status === 401) {
            // Handle token expiration or unauthorized error (e.g., logout user)
            console.log('Token expired or unauthorized access');
            // Optionally, clear token from localStorage and redirect to login
            localStorage.removeItem('token');
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

export default api;
