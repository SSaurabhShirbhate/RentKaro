import { Divider, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DrawerList = ({ menu, menu2, toggleDrawer }) => {
  const location = useLocation(); // Get current location/path
  const navigate = useNavigate();

  // Handle navigation for both menu and menu2
  const handleNavigation = (path) => {
    navigate(path);
    toggleDrawer(false); // Close the drawer after clicking an item
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
        
          <div className="space-y-2">
            {/* Render first set of menu items */}
            {menu.map((item, index) => (
              <div
                onClick={() => handleNavigation(item.path)} // Updated onClick handler
                className="pr-9 cursor-pointer"
                key={index}
              >
                <p
                  className={`flex items-center px-5 py-2 rounded-md cursor-pointer ${
                    item.path === location.pathname
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color bg-white hover:bg-gray-200'
                  }`}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </p>
              </div>
            ))}
          </div>

          <Divider />

          <div className="mt-5 space-y-2">
            {/* Render second set of menu items */}
            {menu2.map((item, index) => (
              <div
                onClick={() => handleNavigation(item.path)} // Updated onClick handler
                className="pr-9 cursor-pointer"
                key={index}
              >
                <p
                  className={`flex items-center px-5 py-2 rounded-md cursor-pointer ${
                    item.path === location.pathname
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color bg-white hover:bg-gray-200'
                  }`}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </p>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default DrawerList;
