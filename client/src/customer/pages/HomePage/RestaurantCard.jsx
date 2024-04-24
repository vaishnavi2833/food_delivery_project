import React from 'react';
import { Card, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RestaurantCard = ({item,index}) => {

  const navigate=useNavigate();

  const handleAddToFav = () => {
    console.log('Added to fav');
  }

  return (
    <Card className='m-5 w-[15rem] productCard' >
      <div onClick={()=>{navigate(`/restaurant/${item.city}/${item.name}/${item.id}`)}}>
        <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.imageUrl} alt=''></img>
      </div>
      <div className='p-2 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>{item.name}</p>
          <p className='text-gray-500'>{item.description.length>40?item.description.substring(0,40)+"...":item.description}</p>  
        </div>
        <div>
        <IconButton onClick={handleAddToFav()}>
          {index % 2 === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon color="primary" />}
        </IconButton> 
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
