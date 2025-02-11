import React from 'react'

import { useNavigate } from 'react-router-dom';



const DealCard = () => {
    const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/products');
  };
  return (
    <div className='w-[13rem] cursor-pointer'  onClick={handleCardClick} >
      <img className='border-x-[7px] border-t-[7px] border-purple-500 w-full h-[12rem] object-cover object-top' src='https://images.unsplash.com/photo-1633339257118-28dd67299a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D' alt=''/>
      <div className='border-4 border-black bg-black text-white p-2 text-center'>
        <p className='text-lg font-semibold'>Smart Watch</p>
        <p className='text-2xl font-bold'>90% OFF</p>
        <p className='text-lg text-balance'>Rent Now</p>
      </div>
    </div>
  )
}

export default DealCard
