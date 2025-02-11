import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Divider, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Import the useAuth hook
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import { ElectricBolt } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import ProfileFieldCard from '../../../component/ProfileFieldCard';
import axios from 'axios'; // Import Axios

// Menu items
const menu = [
    { name: "Orders", path: "/account/orders" },
    { name: "Profile", path: "/account" },
    { name: "Saved Cards", path: "/account/saved-card" },
    { name: "Addresses", path: "/account/addresses" },
    { name: "Logout", path: "/" },
];

const AccountPage = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const { setUsername, isLoggedIn, logout } = useAuth(); // Use the AuthContext
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [userDetails, setUserDetails] = useState({ username: '', email: '' });

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        if (isLoggedIn) {
            const fetchUserData = async () => {
                try {
                    const token = localStorage.getItem('authToken');
                    const response = await axios.get('http://localhost:6060/auth/user', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUserDetails(response.data); // Update user details dynamically
                    setUsername(response.data.userDto.username)
                    console.log(userDetails);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchUserData();
        }
    }, [isLoggedIn]);

    return (
        <Box sx={{ padding: "30px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Typography variant="h4" align="center" sx={{ color: '#333', marginBottom: "20px" }}> Account Dashboard </Typography>
            {/* Profile Section */}
            <Paper sx={{ padding: "20px", marginBottom: "30px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>Personal Details</Typography>
                <ProfileFieldCard keys="Name" value={userDetails.username} />
                <Divider sx={{ marginBottom: "15px" }} />
                <ProfileFieldCard keys="Email" value={userDetails.email} />
            </Paper>
            {/* Orders Section */}
            <Paper sx={{ padding: "20px", marginBottom: "30px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>All Orders</Typography>
                <Divider sx={{ marginBottom: "20px" }} />
                <Box>
                    {[1, 1, 1, 1, 1].map((item, index) => (
                        <Paper key={index} sx={{ padding: "15px", marginBottom: "15px", display: "flex", gap: "15px", backgroundColor: "#fafafa", cursor: "pointer", borderRadius: "8px" }}>
                            <Avatar sx={{ bgcolor: purple[600] }}>
                                <ElectricBolt />
                            </Avatar>
                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4CAF50" }}> PENDING </Typography>
                                <Typography variant="body2" color="textSecondary"> Arriving by Monday, 15 March </Typography>
                            </Box>
                            <Box sx={{ marginTop: "15px", display: "flex", gap: "10px", alignItems: "center" }}>
                                <img src="https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.jpg?s=612x612&w=0&k=20&c=4rOgVBWgBUSdmWsiLkSQ9sVeGx6hhdOZURbEy_IBGjA=" alt="Product" style={{ width: "70px", height: "auto" }} />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Sample Product Name</Typography>
                                    <Typography variant="body2" color="textSecondary"> Product details and description here. </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Size: FREE</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Paper>
            {/* Address Section */}
            <Paper sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>Saved Addresses</Typography>
                <Divider sx={{ marginBottom: "20px" }} />
                <Box>
                    {[1, 1, 1].map((item, index) => (
                        <Box key={index} sx={{ padding: "15px", backgroundColor: "#fafafa", marginBottom: "15px", borderRadius: "8px" }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>User Address {index + 1}</Typography>
                            <Typography variant="body2" color="textSecondary">123 Main St, City, Country</Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>Mobile: 909-098-9080</Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    );
};

export default AccountPage;
