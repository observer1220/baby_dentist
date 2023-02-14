import React from "react";
import style from "./styles.module.css";
import Link from "@docusaurus/Link";

import banner1 from '/static/img/index/banner1.jpg'
import banner2 from '/static/img/index/banner2.jpg'
import banner3 from '/static/img/index/banner3.jpg'

const dataSource = [
  {
    id: 1,
    label: '齒顎矯正',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/203.jpg',
  },
  {
    id: 2,
    label: '牙周病治療',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/233.jpg',
  },
  {
    id: 3,
    label: '舒眠牙醫',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/226.jpg',
  },
  {
    id: 4,
    label: '全口重建',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/199.jpg',
  },
  {
    id: 5,
    label: '人工植牙',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/227.jpg',
  },
  {
    id: 6,
    label: '兒童齲齒預防',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/Class/229.jpg',
  },
]

// Carousel的隱藏API請查閱React-Slick
export default function ServiceComponent () {
  return (
    <div className={style.container}>
      <ul>
        {dataSource.map((item, idx) => (
          <Link
            to={`/docs/treatment/${item.label}`}>
            <li key={idx} style={{ width: '300px' }}>
              <img src={item.url} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}