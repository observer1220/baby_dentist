import React from "react";
import { Carousel } from 'antd';
import style from "./styles.module.css";

const slides = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677337664/doctor/Banner1_gea8yq.png',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677337664/doctor/Banner2_wmzcla.png',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677338123/doctor/Banner3_xjeswr.png',
  }
]

// Carousel的隱藏API請查閱React-Slick
export default function CarouselComponent () {
  return (
    <div className={style.container}>
      <Carousel
        autoplay={true}
        effect="scrollx"
        dots={false}
        easing="liner"
        autoplaySpeed={5000}
        swipe={true}
        draggable={true}
      >
        {slides.map((slide, index) => (
          <img className={style.contentStyle} key={index} src={slide.url} />
        ))
        }
      </Carousel>
    </div>
  );
}