import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Divider } from 'antd';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CarouselComponent from '../components/Carouesl';
import CaseComponent from '../components/Case';
import ClinicInfoComponent from '../components/ClinicInfo';
import style from "./index.module.css";
import { Col, Row } from "antd";

const slides = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/1-1_%E8%BC%AA%E6%92%AD%E5%9C%96_povytv.png',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/1-2_%E8%BC%AA%E6%92%AD%E5%9C%96_o0geet.png',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/1-3_%E8%BC%AA%E6%92%AD%E5%9C%96_p1biot.png',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692236984/1-4_%E8%BC%AA%E6%92%AD%E5%9C%96_itbae4.png',
  }
];

export default function Home () {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* Banner輪播圖 */}
      <Row className={style.container} >
        <Col xs={24} md={24} lg={16}>
          <CarouselComponent slides={slides} />
        </Col>
        <Col xs={0} md={8} lg={8}>
          <div className={style.logoContainer}>
            <img src="https://res.cloudinary.com/dbjxyxxlj/image/upload/v1692254760/logo_fgvpv2.png" />
            <h2>寶貝兔親子牙醫聯盟</h2>
            <i>You are precious, honored and beloved.</i>
          </div>
        </Col>
      </Row>
      {/* 醫師團隊 */}
      <Divider orientation="center">
        <h2><strong>寶貝兔醫師團隊</strong></h2>
      </Divider>
      <HomepageFeatures />
      {/* 我選擇寶貝兔 */}
      <Divider orientation="center">
        <h2><strong>顧客滿意見證</strong></h2>
      </Divider>
      <CaseComponent />
      <Divider orientation="center">
        <h2><strong>診所資訊</strong></h2>
      </Divider>
      <ClinicInfoComponent />
    </Layout>
  );
}
