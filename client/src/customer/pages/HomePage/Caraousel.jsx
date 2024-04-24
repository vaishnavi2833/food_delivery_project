import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopMeals from '../../data/TopMeals';
import CaraouselItem from './CaraouselItem';

const Caraousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false
      };
      return (
        <Slider {...settings}>
          {TopMeals.map((item)=><CaraouselItem image={item.image} title={item.title}/>)}
        </Slider>
      );
}

export default Caraousel