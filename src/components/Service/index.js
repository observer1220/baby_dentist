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
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    label: '牙周病治療',
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    label: '舒眠牙醫',
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 4,
    label: '全口重建',
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 5,
    label: '人工植牙',
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 6,
    label: '兒童齲齒預防',
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
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
            <li key={idx}>
              <img src={item.url} style={{ width: '300px' }} />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}