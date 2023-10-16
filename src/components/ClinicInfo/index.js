import React from "react";
import Link from "@docusaurus/Link";
import { Col, Row } from "antd";

const dataSource = [
  {
    id: 1,
    label: '寶貝兔青埔親子牙醫診所',
    address: "高雄市橋頭區經武路50號",
    phone: "07 613 0603",
    map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6009342076495!2d120.31418107373429!3d22.743069526703845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f6613e3a59f%3A0xb371dbe3f13cf0f0!2z5a-26LKd5YWU6Z2S5Z-U6Kaq5a2Q54mZ6Yar6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1692242643803!5m2!1szh-TW!2stw",
    line_name: "青埔",
    line_url: "https://lin.ee/PgXd1aC"
  },
  {
    id: 2,
    label: '寶貝兔華夏親子牙醫診所',
    address: "高雄市左營區華夏路927號",
    phone: "07 343 0703",
    map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117801.2090722906!2d120.15982354335934!3d22.68032840000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05984fdd1621%3A0xc4b7c00c08dceb48!2z5a-26LKd5YWU6Kaq5a2Q54mZ6Yar6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1692242801844!5m2!1szh-TW!2stw",
    line_name: "左營",
    line_url: "https://lin.ee/WuCQy05"
  },
]

export default function ClinicInfoComponent () {
  return (
    <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: "30px" }}>
      {dataSource.map((item, idx) => (
        <Col
          key={idx}
          xs={24} md={24} lg={11}
        >
          <ul style={{ padding: '16px' }}>
            <li><h3>{item.label}</h3></li>
            <li>地址｜{item.address}</li>
            <li>電話｜{item.phone}</li>
            <li>
              <iframe src={item.map_url}
                style={{ width: "100%", height: "450px", border: 0, }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </li>
            <li>
              <Link
                className="button button--primary button--lg"
                to={item.line_url}
              >
                加入寶貝兔{item.line_name}牙醫LINE@
              </Link>
            </li>
          </ul>
        </Col>
      ))
      }
    </Row >
  );
}