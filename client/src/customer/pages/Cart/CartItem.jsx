import { IconButton } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const CartItem = () => {
  return (
    <Card className='p-2 rounded-lg'> 
      <div className='lg:flex items-center lg:space-x-5'>
        <img className='w-[5rem] h-[5rem] object-cover' src='https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pizza' />
        <div className='flex items-center justify-between lg:w-[70%]'>
            <div className='space-y-1 lg:space-y-3 w-full'>
                <p>Pizza</p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1'>
                        <IconButton color='primary'>
                            <RemoveCircleOutlineRoundedIcon/>
                        </IconButton>
                        <div className='w-5 h-5 text-xs'>
                            <p>1</p>
                        </div>
                        <IconButton color='primary'>
                            <AddCircleOutlineRoundedIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <p className='text-xs'>₹256</p>
        </div>
    </div>
    </Card>
  );
};

export default CartItem;
