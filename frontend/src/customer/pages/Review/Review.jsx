import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='p-5 flex flex-col gap-20 lg:px-20 lg:flex-row'>
        <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
            <img src='https://media.istockphoto.com/id/1440458000/photo/young-girl-with-hands-near-skin-face.jpg?s=612x612&w=0&k=20&c=gevqcCVe_NRBEMZUWtmRXa7at9w773zgWMV0MdqX2ho='/>

            <div>
                <div>
                    <p className='font-bold text-xl'>
                        Maruti Suzuki
                    </p>
                    <p className='text-lg text-gray-600'>
                        Swift Mini Cooper
                    </p>
                </div>
                <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹400</span>
              <span className="line-through text-gray-400">₹999</span>
              <span className=" text-primary-color font-semibold">60%</span>
            </div>
           
          </div>
            </div>
        </section>

        <section className='space-y-5 w-full'>
            {[1,1,1,1,1].map((item)=><div className='space-y-3'>
                <ReviewCard />
                <Divider/>
            </div>)}
        </section>
    </div>
  )
}

export default Review
