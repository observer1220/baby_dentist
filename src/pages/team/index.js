import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import { Card, Col, Row, Select, Radio, Modal } from 'antd';
import { dataSource, options } from './mock';
import style from './index.module.css';

const { Meta } = Card;
export default function DoctorTeam () {
  const [loading, setLoading] = useState(true);
  // 預設顯示全部
  const [displayData, setDisplayData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  const handleChange = (data) => {
    console.log(data.target.value);
    if (data.target.value === '全部醫生') {
      setDisplayData(dataSource)
    } else {
      const newData = dataSource.filter(item => item.category.includes(data.target.value))
      setDisplayData(newData)
    }
  }

  useEffect(() => {
    setLoading(false);
  })

  return (
    <Layout title={'醫師團隊'} description="Description will go into a meta tag in <head />">
      {/* 選擇器 */}
      {/* <Select defaultValue="全部醫生" style={{ width: 360 }} onChange={handleChange} options={options} /> */}
      {/* <div className={style.radioContainer}>
        <Radio.Group defaultValue="全部醫生" buttonStyle="solid" onChange={handleChange} size={"large"}>
          {options.map((item, idx) =>
            <Radio.Button value={item.value} key={idx}>
              {item.label}
            </Radio.Button>
          )}
        </Radio.Group>
      </div> */}
      {/* 全部醫生、齒顎矯正、人工植牙、 */}
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {displayData.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card
                  className={style.card}
                  hoverable
                  loading={loading}
                  cover={<img src={item.avator} style={{ objectFit: 'contain' }} />}
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
    </Layout>
  );
}