import React, { useState, useEffect } from 'react';
import { Box, Divider, Typography, Paper } from '@mui/material';
import { useAuth } from '../../../context/AuthContext'; // Import the useAuth hook
import ProfileFieldCard from '../../../component/ProfileFieldCard';
import axios from 'axios'; // Import Axios

const AccountPage = () => {
    const { setUsername, isLoggedIn } = useAuth(); // Use the AuthContext
    const [userDetails, setUserDetails] = useState({ username: '', email: '' });

    // Fetch user data from the backend on login
    useEffect(() => {
        const fetchUserData = async () => {
            if (isLoggedIn) {
                try {
                    const token = localStorage.getItem('authToken');
                    const response = await axios.get('http://localhost:6062/auth/user', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    const { username, email } = response.data.userDto; // Adjusted based on backend response structure
                    setUserDetails({ username, email });
                    setUsername(username); // Update context state with username
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [isLoggedIn, setUsername]);

    return (
        <Box sx={{ padding: "30px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Typography variant="h4" align="center" sx={{ color: '#333', marginBottom: "20px" }}>
                Account Dashboard
            </Typography>

            {/* Profile Section */}
            <Paper sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>Personal Details</Typography>
                <ProfileFieldCard keys="Name" value={userDetails.username} />
                <Divider sx={{ marginBottom: "15px" }} />
                <ProfileFieldCard keys="Email" value={userDetails.email} />
            </Paper>
        </Box>
    );
};

export default AccountPage;
