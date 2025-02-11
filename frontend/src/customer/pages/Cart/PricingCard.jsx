import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>

    <div className='space-y-3 p-5'>
        <div className="flex items-center justify-between">
          <span>SubTotal</span>
          <span>₹600</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Discount</span>
          <span>₹200</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>₹69</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Platform Fee</span>
          <span>Free</span>
        </div>
        
      </div>
        <Divider/>
        <div className="flex p-5 items-center justify-between text-primary-color">
          <span>Total</span>
          <span>₹469</span>
        </div>
    </>
  )
}
export default PricingCard