import React from "react";
import { Carousel } from 'antd';
import styles from "./styles.module.css";

export default function CarouselComponent() {
  return (
    // 隱藏API請查閱React-Slick
    <Carousel autoplay={true} effect="fade" dotPosition="right" easing="liner" autoplaySpeed={5000}>
      <div>
        <h3 className={styles.contentStyle}>1</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>2</h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>3</h3>
      </div>
    </Carousel>
  );
}