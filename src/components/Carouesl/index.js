import React from "react";
import { Carousel } from 'antd';
import style from "./styles.module.css";

// Carousel的隱藏API請查閱React-Slick
export default function CarouselComponent ({ slides }) {
  return (
    <div className={style.container}>
      <Carousel
        autoplay={true}
        effect="scrollx"
        // dots={false}
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