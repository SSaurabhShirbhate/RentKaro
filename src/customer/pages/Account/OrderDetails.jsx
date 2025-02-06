import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate = useNavigate();
  return (

        <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img 
          className="w-[100px]" 
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp" 
          alt="Product"
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">
            {"Deepika Ranveer"}
          </h1>
          <p>sdalk aqc za]d waq]fcwamo vas\'ef mafc[ewf aq\dw mvg]wgvb</p>
          <p><strong>Size:</strong> M</p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>

      <section>
        <OrderStepper orderStatus={"PENDING"} />
      </section>
    </Box>

    


    
  )
}

export default OrderDetails
    