import React from 'react'
import "./ShopByCategory.css"

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap3 flex-col justify-center items-center group cursor-pointer'>
        <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full'>
            <img 
            className='rounded-full group-hover:scale-95 transition-transform transform-duration-400 object-cover object-top h-full w-full  '
            src='https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNvZmF8ZW58MHx8MHx8fDA%3D' alt='Category' />
        </div>
        <h1>Kitchen & Table</h1>
    </div>
  )
}

export default ShopByCategoryCard
