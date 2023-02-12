import React from "react";
import { Carousel } from 'antd';
import style from "./styles.module.css";

import banner1 from '/static/img/index/banner1.jpg'
import banner2 from '/static/img/index/banner2.jpg'
import banner3 from '/static/img/index/banner3.jpg'

const slides = [
  {
    id: 1,
    url: banner1,
  },
  {
    id: 2,
    url: banner2,
  },
  {
    id: 3,
    url: banner3,
  }
]

// Carousel的隱藏API請查閱React-Slick
export default function CarouselComponent () {
  return (
    <div className={style.container}>
      <Carousel autoplay={true} effect="scrollx" dots={false} easing="liner" autoplaySpeed={5000} swipe={true} draggable={true}>
        {slides.map((slide, index) => (
          <img className={style.contentStyle} key={index} src={slide.url} />
        ))
        }
      </Carousel>
    </div>
  );
}