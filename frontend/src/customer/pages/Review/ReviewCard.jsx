import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid2 container spacing={9}>
        <Grid2 size={{xs:1}}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                    S
                </Avatar>
            </Box>
        </Grid2>

        <Grid2 size={{xs:9}}>


            <div className='space-y-2'>
                <div>

                <p className='text-lg font-semibold'>User1</p>
                <p className='opacity-70 text-sm'>2022-01-01</p>
                {/* <p className= 'text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit vitae lectus condimentum semper.</p> */}
                </div>
            </div>
            <Rating 
                // readOnly
                name="customized-color"
                defaultValue={3}
                getLabelText={(value) => `${value} stars`}
                precision={0.5}
                // size="small"
                color="secondary"
                // className='ml-3'
            />

            <p>Value for money product, great product</p>
            <div>
                <img className='w-24 h-24 object-cover' src='https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww' alt=''/>
            </div>
        </Grid2>

      </Grid2>
        
      <div>
      <IconButton>
                <Delete sx={{color:red[700]}}/>
            </IconButton>
      </div>
    </div>
  )
}

export default ReviewCard
