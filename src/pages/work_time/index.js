import React from "react";
import Layout from "@theme/Layout";
import { Button, Divider, Space, Table, Tabs } from "antd";
import style from "./index.module.css";
import {
  PhoneOutlined,
  WechatOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "",
    dataIndex: "period_time",
    key: "period_time",
    render: (text) => <strong>{text}</strong>,
    align: "center",
  },
  {
    title: "一",
    dataIndex: "monday",
    key: "monday",
    align: "center",
  },
  {
    title: "二",
    dataIndex: "tuesday",
    key: "tuesday",
    align: "center",
  },
  {
    title: "三",
    key: "wednesday",
    dataIndex: "wednesday",
    align: "center",
  },
  {
    title: "四",
    dataIndex: "thursday",
    key: "thursday",
    align: "center",
  },
  {
    title: "五",
    dataIndex: "friday",
    key: "friday",
    align: "center",
  },
  {
    title: "六",
    dataIndex: "saturday",
    key: "saturday",
    align: "center",
  },
];

const BranchHuaSia = [
  {
    key: "1",
    period_time: (
      <>
        <li>早診</li>
        <li>09:30</li>
        <li>11:30</li>
      </>
    ),
    monday: "✅",
    tuesday: "",
    wednesday: "✅",
    thursday: "",
    friday: "✅",
    saturday: "✅",
  },
  {
    key: "2",
    period_time: (
      <>
        <li>午診</li>
        <li>14:30</li>
        <li>17:00</li>
      </>
    ),
    monday: "✅",
    tuesday: "✅",
    wednesday: "✅",
    thursday: "✅",
    friday: "✅",
    saturday: "",
  },
  {
    key: "3",
    period_time: (
      <>
        <li>晚診</li>
        <li>18:30</li>
        <li>20:30</li>
      </>
    ),
    monday: "✅",
    tuesday: "✅",
    wednesday: "✅",
    thursday: "✅",
    friday: "",
    saturday: "",
  },
];

const BranChingPu = [
  {
    key: "1",
    period_time: (
      <>
        <li>早診</li>
        <li>09:30</li>
        <li>11:30</li>
      </>
    ),
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "✅",
    saturday: "✅",
  },
  {
    key: "2",
    period_time: (
      <>
        <li>午診</li>
        <li>14:30</li>
        <li>17:00</li>
      </>
    ),
    monday: "✅",
    tuesday: "✅",
    wednesday: "✅",
    thursday: "✅",
    friday: "✅",
    saturday: "",
  },
  {
    key: "3",
    period_time: (
      <>
        <li>晚診</li>
        <li>18:30</li>
        <li>20:30</li>
      </>
    ),
    monday: "✅",
    tuesday: "✅",
    wednesday: "✅",
    thursday: "✅",
    friday: "",
    saturday: "",
  },
];

export default function ClinicInfo() {
  const items = [
    {
      key: "1",
      label: "左營華夏店",
      children: (
        <Table
          className={style.table}
          title={() => (
            <>
              <h3>
                <strong>寶貝兔牙醫 華夏店</strong>
              </h3>
              <Space>
                <Button
                  type="primary"
                  shape="round"
                  icon={<PhoneOutlined />}
                  size="small"
                  onClick={() => <a href="tel:+886-2-26212220"></a>}
                >
                  電話預約
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<WechatOutlined />}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://liff.line.me/1645278921-kWRPP32q/?accountId=246uqghw"
                    );
                  }}
                >
                  Line@預約
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<GoogleOutlined />}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps?ll=22.680328,120.304019&z=16&t=m&hl=zh-TW&gl=US&mapclient=embed&cid=14175009510092761928"
                    );
                  }}
                >
                  顯示地圖
                </Button>
              </Space>
            </>
          )}
          columns={columns}
          dataSource={BranchHuaSia}
          pagination={false}
        />
      ),
    },
    {
      key: "2",
      label: "橋頭青埔店",
      children: (
        <Table
          className={style.table}
          title={() => (
            <>
              <h3>
                <strong>寶貝兔牙醫 青埔店</strong>
              </h3>
              <Space>
                <Button
                  type="primary"
                  shape="round"
                  icon={<PhoneOutlined />}
                  size="small"
                  onClick={() => {
                    window.open("tel:02-2621-2220");
                  }}
                >
                  電話預約
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<WechatOutlined />}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://liff.line.me/1645278921-kWRPP32q/?accountId=842septt"
                    );
                  }}
                >
                  Line@預約
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<GoogleOutlined />}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps?ll=22.743065,120.316756&z=16&t=m&hl=zh-TW&gl=TW&mapclient=embed&cid=12930357777208766704"
                    );
                  }}
                >
                  顯示地圖
                </Button>
              </Space>
            </>
          )}
          columns={columns}
          dataSource={BranChingPu}
          pagination={false}
        />
      ),
    },
  ];
  return (
    <Layout
      title={"診療時間"}
      description="Description will go into a meta tag in <head />"
    >
      <Divider orientation="center">
        <h2>
          <strong>診療時間</strong>
        </h2>
      </Divider>
      <div className={style.container}>
        <Tabs defaultActiveKey="1" type="card" size="middle" items={items} />
      </div>
    </Layout>
  );
}
