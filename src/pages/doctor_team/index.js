import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import { Card, Col, Row, Select, Radio } from 'antd';
import { dataSource, options } from './mock';
import style from './index.module.css';

const { Meta } = Card;
export default function DoctorTeam() {
  // 預設顯示全部
  const [displayData, setDisplayData] = useState(dataSource)

  const handleChange = (data) => {
    // console.log(data.target.value);
    if (data.target.value === '全部醫生') {
      setDisplayData(dataSource)
    } else {
      setDisplayData(dataSource.filter(item => item.category === data.target.value))
    }
  }
  return (
    <Layout title={'醫師團隊'} description="Description will go into a meta tag in <head />">
      {/* 選擇器 */}
      {/* <Select defaultValue="全部醫生" style={{ width: 360 }} onChange={handleChange} options={options} /> */}
      <div className={style.radioContainer}>
        <Radio.Group defaultValue="全部醫生" buttonStyle="solid" onChange={handleChange} size={"large"}>
          {options.map((item, idx) =>
            <Radio.Button value={item.value} key={idx}>
              {item.label}
            </Radio.Button>
          )}
        </Radio.Group>
      </div>
      {/* 全部醫生、齒顎矯正、人工植牙、 */}
      <Card>
        <Row justify={"center"} gutter={[16, 16]}>
          {displayData.map((item, idx) => {
            return (
              <Col key={idx}>
                <Card className={style.card} hoverable cover={<img src={item.avator} />}>
                  <Meta title={item.title} description={item.experience} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>
    </Layout>
  );
}