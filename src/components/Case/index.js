import React from "react";
import style from "./styles.module.css";
import Link from "@docusaurus/Link";
import { Col, Row } from "antd";

const dataSource = [
  {
    id: 1,
    label: '筑軒',
    desc: "謝謝寶貝兔，讓看牙以歡樂取代孩子的尖叫跟掙扎。",
    picture: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692241362/1-modified_boma0n.png",
    url: "20230503001"
  },
  {
    id: 3,
    label: '昀瑾',
    desc: "謝謝寶貝兔隱適美讓我在不知不覺中就更美了！",
    picture: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692241362/3-modified_xapyw6.png",
    url: "20230503003"
  },
  {
    id: 3,
    label: 'Kimberley & Caleb',
    desc: '沒有想像過此生可以對著鏡頭露出自信、燦爛的微笑～',
    picture: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692241362/2-modified_tahgyi.png",
    url: "20230503002"
  }
]

export default function CaseComponent () {
  return (
    <Row>
      <Col xs={24} md={24} lg={6}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2>有寶貝兔真好</h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <Link
              className="button button--primary button--lg"
              to="/blog"
            >
              了解更多微笑見證
            </Link>
          </div>
        </div>
      </Col>
      <Col xs={24} md={24} lg={18}>
        <Row className={style.container}>
          {dataSource.map((item, idx) => (
            <Col key={idx} className="gutter-row" xs={12} md={8} lg={6}>
              <Link
                to={`/blog/${item.url}`}
              >
                <div className={style.ColStyle}>
                  <h3>{item.label}</h3>
                  <img src={item.picture} style={{ width: '100%', objectFit: 'contain', borderRadius: "50%" }} />
                  <p style={{ fontSize: "16px" }}>
                    「{item.desc}」
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}