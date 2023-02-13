import React, { useState } from 'react';
import styles from './styles.module.css';
import { Avatar, Button, Card, Carousel, Col, Modal, Row, } from 'antd';
import { useEffect } from 'react';
const { Meta } = Card;
import Link from "@docusaurus/Link";

const dataSource = [
  {
    title: "唐如青院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094943/doctor/%E5%94%90%E5%A6%82%E9%9D%92%E9%86%AB%E5%B8%AB_vnewlv.jpg',
    experience: ["高雄醫學大學口腔醫學院牙醫學博士", "衛生福利部部定兒童牙科專科醫師", "衛生福利部部定特殊需求找口腔醫學科專科醫師", "高雄醫學大學 兼任助理教授",
      "隱適美矯正認證醫師", "國際兒童牙科醫學會正式會員", "認證牙醫師牙醫師 訓練導師"],
    category: ["兒童牙科", "特殊需求者", "舒眠牙醫", "兒童青少年矯正", "早期矯正"],
  },
  {
    title: "林元婷院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094942/doctor/%E6%9E%97%E5%85%83%E5%A9%B7%E9%86%AB%E5%B8%AB_gwulbv.jpg',
    experience: ["高雄醫學大學牙醫學博士班", "牙周補綴專科醫師", "牙體復形學會會員", "南台灣牙醫植體醫學會會員", "台灣咀嚼吞嚥障礙醫學學會會員",
      "認證牙醫師牙醫師 訓練導師"],
    category: ["全口重建", "全瓷美學", "人工植牙"],
  },
  {
    title: "洪維澤院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094943/doctor/%E6%B4%AA%E7%B6%AD%E6%BE%A4%E9%86%AB%E5%B8%AB_zj1w2b.jpg',
    experience: ["高雄醫學大學牙醫博士班", "高雄醫學大學總住院醫師", "高雄醫學大學牙周病科醫師", "美國紐約大學人工植牙專科醫師",
      "美國紐約大學牙周病科專科醫師", "美國紐約大學人工植牙專科訓練講師", "中華民國口腔植體學會專科醫師", "台灣植牙醫學會專科醫師", "認証PGY牙醫師 訓練導師"],
    category: ["牙周治療", "人工植牙", "數位牙科"],
  }
]

export default function HomepageFeatures () {
  const [loading, setLoading] = useState(true);
  const [displayData, setDisplayData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  useEffect(() => {
    setLoading(false);
  })

  return (
    <section className={styles.features}>
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {displayData.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card
                  className={styles.card}
                  hoverable
                  loading={loading}
                  cover={<img src={item.avator} />}
                  onClick={() => {
                    setIsModalOpen(true)
                    setModalInfo(item)
                  }}
                >
                  <Meta
                    title={item.title}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <Link
            className="button button--primary button--lg"
            to="/team">
            更多資訊
          </Link>
        </div>
      </Card>
      <Modal
        title={modalInfo?.title}
        open={isModalOpen}
        onCancel={() => { setIsModalOpen(false) }}
        footer={null}
      >
        <strong>學經歷：</strong>
        <br />
        <ul>
          {modalInfo?.experience.map((item, idx) =>
            <li key={idx}>{item}</li>
          )}
        </ul>
        <strong>專長：</strong>
        <br />
        {modalInfo?.category.map((item, idx) =>
          <span key={idx}>
            {item}{idx !== modalInfo?.category.length - 1 && <span>、</span>}
          </span>)
        }
      </Modal>
    </section>
  );
}
