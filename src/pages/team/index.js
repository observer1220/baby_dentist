import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import { Card, Col, Row, Select, Radio, Modal, Divider } from "antd";
import style from "./index.module.css";

const { Meta } = Card;

const dataSource = [
  {
    title: "唐如青院長",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722964/doc_image_tang_gwl886.jpg",
    experience: [
      "高雄醫學大學口腔醫學院牙醫學博士",
      "衛生福利部部定兒童牙科專科醫師",
      "衛生福利部部定特殊需求找口腔醫學科專科醫師",
      "高雄醫學大學 兼任助理教授",
      "隱適美矯正認證醫師",
      "國際兒童牙科醫學會正式會員",
      "認證牙醫師牙醫師 訓練導師",
    ],
    category: [
      "兒童牙科",
      "特殊需求者",
      "舒眠牙醫",
      "兒童青少年矯正",
      "早期矯正",
    ],
  },
  {
    title: "林元婷院長",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722954/doc_image_lin_mj2iur.jpg",
    experience: [
      "高雄醫學大學牙醫學博士班",
      "牙周補綴專科醫師",
      "牙體復形學會會員",
      "南台灣牙醫植體醫學會會員",
      "台灣咀嚼吞嚥障礙醫學學會會員",
      "認證牙醫師牙醫師 訓練導師",
    ],
    category: ["全口重建", "全瓷美學", "人工植牙"],
  },
  {
    title: "洪維澤院長",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/2-1_%E5%AF%B6%E8%B2%9D%E5%85%94%E9%99%A2%E9%95%B7%E7%85%A7%E7%89%87_hpgn5w.jpg",
    experience: [
      "高雄醫學大學牙醫博士班",
      "高雄醫學大學總住院醫師",
      "高雄醫學大學牙周病科醫師",
      "美國紐約大學人工植牙專科醫師",
      "美國紐約大學牙周病科專科醫師",
      "美國紐約大學人工植牙專科訓練講師",
      "中華民國口腔植體學會專科醫師",
      "台灣植牙醫學會專科醫師",
      "認証PGY牙醫師 訓練導師",
    ],
    category: ["牙周病治療", "人工植牙", "數位牙科"],
  },
  {
    title: "王品評醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094942/doctor/%E7%8E%8B%E5%93%81%E8%A9%95%E9%86%AB%E5%B8%AB_av0kin.jpg",
    experience: [
      "高雄醫學大學牙醫學士",
      "高醫碩士班補綴科畢業",
      "前恆春基督教醫院主治醫師",
      "認証PGY牙醫師 訓練導師",
    ],
    category: ["全口重建", "咬合重建", "家庭牙科", "兒童齲齒預防"],
  },
  {
    title: "陳彥呈醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094942/doctor/%E9%99%B3%E5%BD%A5%E5%91%88%E9%86%AB%E5%B8%AB_g1bvnh.png",
    experience: [
      "高雄醫學大學牙醫學士",
      "高雄醫學大學口外專科訓練",
      "南區植體醫學會會員",
      "高醫校友會理事",
      "認証PGY牙醫師 訓練導師",
    ],
    category: ["人工植牙", "阻生齒拔除", "一般牙科"],
  },
  {
    title: "戴怡佳醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094942/doctor/%E6%88%B4%E6%80%A1%E4%BD%B3%E9%86%AB%E5%B8%AB_azghpq.jpg",
    experience: [
      "高雄醫學大學牙醫學碩士",
      "兒童牙科專科醫師",
      "特殊需求者專科醫師",
    ],
    category: ["兒童牙科", "兒童青少年矯正"],
  },
  {
    title: "陳冠霖醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094942/doctor/%E9%99%B3%E5%86%A0%E9%9C%96%E9%86%AB%E5%B8%AB_zc1gyj.jpg",
    experience: ["高雄醫學大學牙醫學學士", "中華民國家庭牙醫學會會員"],
    category: ["家庭牙醫", "牙周病治療", "全口重建", "兒童齲齒預防"],
  },
  {
    title: "黃亮嘉醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094944/doctor/%E9%BB%83%E4%BA%AE%E5%98%89%E9%86%AB%E5%B8%AB_lyhj8c.jpg",
    experience: [
      "高雄醫學大學牙醫學學士",
      "中華民國兒童牙科醫學會相關會員",
      "2020全方位矯正訓練結訓",
      "隱適美矯正認證醫師",
    ],
    category: ["兒童牙科", "特殊需求者", "早期矯正"],
  },
  {
    title: "翁嫣黛醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094943/doctor/%E7%BF%81%E5%AB%A3%E9%BB%9B%E9%86%AB%E5%B8%AB_l4ibys.jpg",
    experience: ["高雄醫學大學牙醫學學士", "台灣牙周補綴醫學會會員"],
    category: ["一般牙科", "牙體復形", "贗復牙科", "兒童齲齒預防"],
  },
  {
    title: "鄭惠文醫師",
    avator:
      "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1676094943/doctor/%E9%84%AD%E6%83%A0%E6%96%87%E9%86%AB%E5%B8%AB_qrcu9g.jpg",
    experience: ["高雄醫學大學牙醫學學士", "台灣牙周補綴學會會員"],
    category: ["一般牙科", "牙周病治療", "兒童齲齒預防"],
  },
];

export default function DoctorTeam() {
  const [loading, setLoading] = useState(true);
  // 預設顯示全部
  const [displayData, setDisplayData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  const handleChange = (data) => {
    console.log(data.target.value);
    if (data.target.value === "全部醫生") {
      setDisplayData(dataSource);
    } else {
      const newData = dataSource.filter((item) =>
        item.category.includes(data.target.value)
      );
      setDisplayData(newData);
    }
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    <Layout
      title={"寶貝兔醫師團隊"}
      description="Description will go into a meta tag in <head />"
    >
      <Divider orientation="center">
        <h2>
          <strong>寶貝兔醫師團隊</strong>
        </h2>
      </Divider>
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {displayData.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card
                  className={style.card}
                  hoverable
                  loading={loading}
                  cover={<img src={item.avator} />}
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalInfo(item);
                  }}
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>
      <Modal
        title={modalInfo?.title}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <strong>學經歷：</strong>
        <br />
        <ul>
          {modalInfo?.experience.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <strong>專長：</strong>
        <br />
        {modalInfo?.category.map((item, idx) => (
          <span key={idx}>
            {item}
            {idx !== modalInfo?.category.length - 1 && <span>、</span>}
          </span>
        ))}
      </Modal>
    </Layout>
  );
}
