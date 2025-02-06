import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm space-y-4 border rounded-md cursor-pointer bg-white p-5'>
        <div className='flex items-center gap-5'>
            <div>
                <Avatar sizes='small' sx={{bgcolor:purple[600]}} >
                    <ElectricBolt/>
                </Avatar>
            </div>
            <div>
                <h1 className='font-bold text-primary-color'>
                    PENDING
                </h1>
                <p className='text-gray-500'>
                    Arriving by Monday, 15 march
                </p>
            </div>
        </div>
 
        <div className='p-5 bg-violet-50 flex gap-3'>
            <div>
                <img className='w-[70px]' src='https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.jpg?s=612x612&w=0&k=20&c=4rOgVBWgBUSdmWsiLkSQ9sVeGx6hhdOZURbEy_IBGjA='/>
            </div>
            <div className='w-full space-y-2 '>
                <h1>
                    nifeaf pvgsaer
                </h1>
                <p>dfepfdw[ef fae[f e]bgmej wf]fr []vfllsrt kjfwb ;pfwmohgy [w4efjr p;rtgkmoren [gtren ;wefnrewn grjweg</p>
                <p><strong>Size : </strong>FREE</p>
            </div>
        </div>
    
    </div>
  )
}

export default OrderItem
