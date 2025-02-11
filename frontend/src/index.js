import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
// import { AuthProvider, UserProvider } from './UserContext'; // Import the UserProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap the entire app with UserProvider */}
      <AuthProvider>
        <App />
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
