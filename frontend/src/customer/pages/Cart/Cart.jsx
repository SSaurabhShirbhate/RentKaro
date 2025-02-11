import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Close, LocalOffer } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import PricingCard from "./PricingCard";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    const [cartItems, setCartItems] = useState([]); // State for cart items
    const navigate = useNavigate();

    // Fetch cart items from localStorage when the component mounts
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // If no cart items are in localStorage, create and add a dummy item
        if (storedCartItems.length === 0) {
            const dummyCartItem = {
                id: 1,
                title: 'Dummy Product',
                description: 'This is a dummy product.',
                price: 700,
                quantity: 1,
                imageUrl: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxndWl0YXJ8ZW58MHx8MHx8fDA%3D',
                seller: 'Dummy Seller',
            };

            // Add dummy item to cart
            storedCartItems.push(dummyCartItem);

            // Save the cart to localStorage
            localStorage.setItem('cart', JSON.stringify(storedCartItems));
        }

        // Set the cart items in state
        setCartItems(storedCartItems);
    }, []);

    const handleChange = (e) => {
        setCouponCode(e.target.value);
    };

    return (
        <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                <div className="cartItemSection lg:col-span-2 space-y-3">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <CartItem key={index} product={item} /> // Pass the product as a prop
                        ))
                    ) : (
                        <p>Your cart is empty</p> // Handle empty cart
                    )}
                </div>
                <div className="cartSummarySection col-span-1 text-sm space-y-3">
                    <div className="border rounded-md px-5 py-3 space-y-5">
                        <div className="flex gap-3 text-sm items-center">
                            <div className="flex gap-3 items-center text-sm">
                                <LocalOffer sx={{ color: purple[900], fontSize: "17px" }} />
                            </div>
                            <span>Apply Coupons</span>
                        </div>
                        {true ? (
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    id="outlined-basic"
                                    placeholder="Coupon Code"
                                    size="small"
                                    variant="outlined"
                                />
                                <Button size="small">Apply</Button>
                            </div>
                        ) : (
                            <div className="flex">
                                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center ">
                                    <span className="">Applied</span>
                                    <IconButton size="small">
                                        <Close className="text-red-600" />
                                    </IconButton>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border rounded-md">
                        <PricingCard />
                        <div className="p-4">
                            <Button
                                onClick={() => navigate("/checkout")}
                                fullWidth
                                variant="contained"
                                sx={{ py: "11px" }}
                            >
                                Rent now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
