import { Button, Card } from '@mui/material'
import React from 'react'

const MenuItemCard = () => {

    const handleAddItemToCart = ({item}) => {
        console.log("add item to cart")
    }
    return (
        <Card className='p-2 lg:flex items-center justify-between box'>
            <div className='lg:flex items-center lg:space-x-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src='https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <div className='space-y-1  lg:space-y-5 lg:max-w-2xl'>  
                    <p className='font-semibold text-xl'>{`Pizza`}</p>
                    <p>₹{`399`}</p>
                    <p className='text-gray-400'>{`description`}</p>
                </div>
            </div>
            <div>
                <Button className='bg-orange-300 text-white px-5 py-2 rounded-full' onClick={handleAddItemToCart}>Add To Cart</Button>
            </div>
        </Card>
    )
}

export default MenuItemCard