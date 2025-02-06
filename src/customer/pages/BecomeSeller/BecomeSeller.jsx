import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
  const [isLogin, setisLogin] = useState(false);
  const handleShowPage = () => {
    setisLogin(!isLogin);
  };
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
      <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>
        {!isLogin?<SellerAccountForm/>:<SellerLoginForm/>}
        <div className='mt-10 space-y-2'>
        <h1 className='text-sm font-medium text-center'>Have an account?</h1>
          <Button fullWidth sx={{py:"11px"}} variant='outlined' onClick={handleShowPage} className={`${isLogin?'text-gray-500':'text-white'} ${isLogin?'border-gray-500':'border-blue-500'}`}>
            {isLogin?'Register':'Login'}
          </Button>
        </div>
      </section>
      <section className='hidden md:flex md:col-span-1 lg:col-span-2 justify-center items-center'>
        <div className='lg:w-[70%] px-5 space-y-10'>
          <div className='space-y-2 font-bold text-center'>
            <p className='text-2xl'>Join the Marketplace Revolution</p>
            <p className='text-lg text-primary-color'>Boost Your Sales Today</p>
          </div>
          <img src='https://assets.aboutamazon.com/dims4/default/f438bd2/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F74%2Fa4%2F5dc8d9a944138d1b525c34d04faa%2Fheader-v2.png'/>
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller
