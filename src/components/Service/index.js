import React from "react";
import style from "./styles.module.css";
import Link from "@docusaurus/Link";
import { Col, Row } from "antd";

const dataSource = [
  {
    id: 1,
    label: '美學植牙',
    url: '/docs/EstheticDentistry/4-1-美學植牙',
  },
  {
    id: 2,
    label: '美學瓷牙貼片',
    url: '/docs/EstheticDentistry/4-2-美學瓷牙貼片',
  },
  {
    id: 3,
    label: '牙齦整形',
    url: '/docs/EstheticDentistry/4-3-牙齦整形',
  },
  {
    id: 4,
    label: '牙齒美白',
    url: '/docs/EstheticDentistry/4-4-牙齒美白',
  },
  {
    id: 5,
    label: '全口重建',
    url: '/docs/EstheticDentistry/4-5-全口重建',
  },
  {
    id: 6,
    label: '隱適美矯正',
    url: '/docs/Invisalign/3-1-隱適美矯正',
  },
  {
    id: 7,
    label: '自鎖性矯正',
    url: '/docs/Invisalign/3-2-自鎖式矯正',
  },
]

// Carousel的隱藏API請查閱React-Slick
export default function ServiceComponent () {
  return (
    <Row className={style.container}>
      {dataSource.map((item, idx) => (
        <Col key={idx} className="gutter-row" xs={12} md={8} lg={6}>
          <Link
            to={item.url}
          >
            <div className={style.ColStyle}>
              {/* <img src={item.url} style={{ width: '100%', objectFit: 'cover' }} /> */}
              <span>{item.label}</span>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
}