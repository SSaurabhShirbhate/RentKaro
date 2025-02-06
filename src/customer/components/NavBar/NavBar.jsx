import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const theme = useTheme();
    const isLarge=useMediaQuery(theme.breakpoints.up("lg"))
    const navigate = useNavigate();
  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{zIndex:2}}>
        <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
            <div className='flex items-center gap-9'>
                <div className='flex items-center gap-2'>
                    {!isLarge && <IconButton>
                        <MenuIcon />
                    </IconButton>}
                    <h1 onClick={()=>navigate("/")} className='logo cursor-pointer text-lg md:text-2xl text-purple-700'>
                        RentKaro.
                    </h1>
                </div>
                <ul className='flex items-center font-medium text-gray-800'>
                {["Clothes","Home & Furniture","Electronics","Vehicles"].map((item)=>
                    <li className='mainCategory hover:text-secondary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center' >
                        {item}
                    </li>
                )}
                    
                </ul>
            </div>
            <div className='flex gap-1 lg:gap-6 items-center'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                {
                    true?<Button onClick={()=>navigate("/account")} className='flex items-center gap-2'>
                    <Avatar 
                    sx={{width: 29, height: 29}}
                    src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                        <h1 className='font-semibold hidden lg:block'>
                        User1
                        </h1>

                    </Button>:<Button variant='contained'>Login</Button>
                }

                <IconButton>
                    <FavoriteBorder sx={{fontSize:29}}/>
                </IconButton>

                <IconButton onClick={()=>navigate("/cart ")}>
                    <AddShoppingCart className='text-gray-700' sx={{fontSize:29}} />
                </IconButton>

                {isLarge && <Button onClick={()=>navigate("become-seller")} startIcon={<Storefront/>} variant='outlined'>
                    Become Seller
                </Button>}
            </div>
        </div>

        <div className='categorySheet absolute top-[4.4rem] left-20 right-20'>
            {/* <CategorySheet/> */}
        </div>
      </Box>

    </>
  )
}

export default NavBar
