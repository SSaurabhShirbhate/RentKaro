// src/components/PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Assuming you have a method to check authentication
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Check if token exists in localStorage (example)
};

const PrivateRoute = ({ element, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated() ? (
          element
        ) : (
          // If not authenticated, redirect to login page
          navigate("/login")
        )
      }
    />
  );
};

export default PrivateRoute;
