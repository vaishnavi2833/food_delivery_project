import { Divider, Typography , FormControl, RadioGroup, Radio, FormControlLabel, Card,} from '@mui/material'
import React from 'react'
import MenuItemCard from './MenuItemCard'

const categories = [
  "Thali",
  "Starters",
  "Pizza",
  "Burgers", 
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accompaniments",
  "Dessert",
];

const foodType = [
  "Vegetarian Only",
  "Non-Vegetarian Only",
  "Both"
]

const menu=[1,1,1,1,1,1,1,1]

const Restaurant = () => {

  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [selectedFoodType, setSelectedFoodType] = React.useState('')

  const handleCategoryChange = (event) => {
    console.log("selected category",selectedCategory)
  }

  const handleFoodTypeChange = (event) => {
    console.log("selected food type",selectedFoodType)
  }

  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>{`/order`}</h3>
        <div>
          <img className='w-full h-[40vh] object-cover' src='https://media.istockphoto.com/id/643847438/photo/restaurant-chilling-out-classy-lifestyle-reserved-concept.jpg?s=612x612&w=0&k=20&c=Rjw88cVSVaEIlCqBOizOGpqxp0kcYdoDRLwfv5Cn6Sw=' alt=''/>
        </div>
        <div>
          <h1 className='text-3xl py-1 font-semibold'>{`Zosh Restaurant`}</h1>
          <p className='text-gray-500'>{`description`}</p>
          <p className='py-3 text-orange-300 text-0.5xl'>Open Now 10:30am - 12 midnight(Today)</p>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%]'>
          <Card className='p-5 space-y-5 lg:sticky top-28'>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup name='category' value={selectedCategory} onChange={handleCategoryChange}>
                  {categories.map((item,index) => (
                    <FormControlLabel key={index} value={item} control={<Radio/>} label={item} sx={{color:"gray"}}/>
                  ))} 
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup name='category' value={selectedFoodType} onChange={handleFoodTypeChange}>
                  {foodType.map((item,index) => (
                    <FormControlLabel key={index} value={item} control={<Radio/>} label={item} sx={{color:"gray"}}/>
                  ))} 
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
          </Card>
        </div>
        <div className='lg:w-[80%] space-y-5 lg:pl-10'>
          {menu.map((item) => (
            <MenuItemCard item={item}/>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Restaurant