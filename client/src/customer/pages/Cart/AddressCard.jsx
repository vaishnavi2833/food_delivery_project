import React from 'react'
import { Card } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

const AddressCard = ({handleSelectAddress,item,showButton}) => {
  // const handleSelectAddress = () => {
  //   console.log('Address Selected')
  // }
  return (
    <Card>
        <div className='flex space-x-5 lg:w-64 m-5 p-5'>
            <HomeIcon/>
            <div className='space-y-3 text-gray-500 '>
                <h1 className='font-semibold text:lg text-white'>Home</h1>
                <p>Mahesh Housing Society, Vishrambhag, 416415-Sangli, Maharashtra, India</p>
                {showButton && (
                  <Button 
                    variant='outlined' 
                    fullWidth 
                    onClick={()=>handleSelectAddress(item)}>
                      Select
                  </Button>)}
            </div>
        </div>
    </Card>
  )
}

export default AddressCard