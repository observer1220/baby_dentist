import React from "react";
import style from "./styles.module.css";
import Link from "@docusaurus/Link";

import flowcard from "@site/static/img/testimony/1.jpg";
import flowcard2 from "@site/static/img/testimony/2.jpg";
import flowcard3 from "@site/static/img/testimony/3.jpg";
import flowcard4 from "@site/static/img/testimony/4.jpg";

import { Col, Row } from "antd";

const dataSource = [
  {
    id: 1,
    label: '筑軒',
    desc: '謝謝寶貝兔，讓看牙醫歡樂取代孩子的尖叫跟掙扎',
    picture: flowcard,
    url: "20230503001"
  },
  {
    id: 2,
    label: 'Kimberley、Calab',
    desc: '沒想像過此生可以對著鏡頭露出自信燦爛的微笑',
    picture: flowcard2,
    url: "20230503002"
  },
  {
    id: 3,
    label: '昀瑾',
    desc: "謝謝寶貝兔隱適美讓我在不知不覺中更美了",
    picture: flowcard3,
    url: "20230503003"
  },
  {
    id: 4,
    label: '啟豪',
    desc: '以前刷牙總會刷不到牙齒排列不整齊的死角，很常因此蛀牙...',
    picture: flowcard4,
    url: "20230503004"
  },
]

// Carousel的隱藏API請查閱React-Slick
export default function CaseComponent () {
  return (
    <div>
      <Row className={style.container}>
        {dataSource.map((item, idx) => (
          <Col key={idx} className="gutter-row" xs={12} md={8} lg={6}>
            <Link
              to={`/blog/${item.url}`}
            >
              <div className={style.ColStyle}>
                <img src={item.picture} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <span>
                  【{item.label}】
                  {item.desc.length > 25
                    ? item.desc.slice(0, 25) + '...'
                    : item.desc}
                </span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
        <Link
          className="button button--primary button--lg"
          to="/blog"
        >
          更多資訊
        </Link>
      </div>
    </div>
  );
}