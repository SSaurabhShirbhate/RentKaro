// src/contexts/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a Context for the authentication state
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState("");

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    const setUsername = (username) => setUserName(username);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, setUsername }}>
            {children}
        </AuthContext.Provider>
    );
}

// Create a custom hook to use the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
