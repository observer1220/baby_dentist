import React, { useState } from 'react';
import styles from './styles.module.css';
import { Avatar, Button, Card, Carousel, Col, List, Modal, Row, } from 'antd';
import { useEffect } from 'react';
const { Meta } = Card;
import Link from "@docusaurus/Link";
import AOS from "aos";
import "aos/dist/aos.css";

const dataSource = [
  {
    title: "洪維澤院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/2-1_%E5%AF%B6%E8%B2%9D%E5%85%94%E9%99%A2%E9%95%B7%E7%85%A7%E7%89%87_hpgn5w.jpg',
    experience: ["高雄醫學大學牙醫博士班", "高雄醫學大學總住院醫師", "高雄醫學大學牙周病科醫師", "美國紐約大學人工植牙專科醫師",
      "美國紐約大學牙周病科專科醫師", "美國紐約大學人工植牙專科訓練講師", "中華民國口腔植體學會專科醫師", "台灣植牙醫學會專科醫師", "認証PGY牙醫師 訓練導師"],
    category: ["牙周治療", "人工植牙", "數位牙科"],
    desc: "洪院長/博士候選人生長於植牙世家又在美國紐約深造，專精於各種型態的科技植牙，親切、細膩又專業是患者對洪醫師最常見的回饋。"
  },
  {
    title: "唐如青院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722964/doc_image_tang_gwl886.jpg',
    experience: ["高雄醫學大學口腔醫學院牙醫學博士", "衛生福利部部定兒童牙科專科醫師", "衛生福利部部定特殊需求找口腔醫學科專科醫師", "高雄醫學大學 兼任助理教授",
      "隱適美矯正認證醫師", "國際兒童牙科醫學會正式會員", "認證牙醫師牙醫師 訓練導師"],
    category: ["兒童牙科", "特殊需求者", "舒眠牙醫", "兒童青少年矯正", "早期矯正"],
    desc: "唐院長/博士在20年來專攻兒童牙科，以愛心、耐心與精準照顧成千上萬的小朋友，兒童矯正、舒眠治療都是唐院長的拿手項目。"
  },
  {
    title: "林元婷院長",
    avator: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722954/doc_image_lin_mj2iur.jpg',
    experience: ["高雄醫學大學牙醫學博士班", "牙周補綴專科醫師", "牙體復形學會會員", "南台灣牙醫植體醫學會會員", "台灣咀嚼吞嚥障礙醫學學會會員",
      "認證牙醫師牙醫師 訓練導師"],
    category: ["全口重建", "全瓷美學", "人工植牙"],
    desc: "林院長/博士候選人是溫柔與美學的代言人，因著對美的堅持與刁鑽，每一位患者都是她的家人，每一顆牙齒都是她的作品，都值得溫柔相待。"
  },

]

export default function HomepageFeatures () {
  const [loading, setLoading] = useState(true);
  const [displayData, setDisplayData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  useEffect(() => {
    setLoading(false);
    AOS.init();
    AOS.refresh();
  })

  return (
    <section className={styles.features}>
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {displayData.map((item, idx) => {
            return (
              <Col key={idx}>
                <div data-aos="fade-right">
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
                    <h3>{item.title}</h3>
                    <p style={{ marginTop: "10px", lineHeight: "2" }}>{item.desc}</p>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <Link
            className="button button--primary button--lg"
            to="/team">
            認識寶貝兔醫師團隊
          </Link>
        </div>
      </Card>
      <Modal
        title={<h3>{modalInfo?.title}</h3>}
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
    </section >
  );
}
