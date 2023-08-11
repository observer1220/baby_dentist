import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import style from './index.module.css';
import CarouselComponent from '../components/Carouesl';
import { Divider } from 'antd';
import ServiceComponent from '../components/Service';
import CaseComponent from '../components/Case';

const slides = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677337664/doctor/Banner1_gea8yq.png',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677337664/doctor/Banner2_wmzcla.png',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1677338123/doctor/Banner3_xjeswr.png',
  }
];

export default function Home () {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* Banner輪播圖 */}
      <CarouselComponent slides={slides} />
      {/* 美學牙科 */}
      <Divider orientation="center">
        <h2><strong>美學牙科 Services</strong></h2>
      </Divider>
      <ServiceComponent />
      {/* 醫師團隊 */}
      <Divider orientation="center">
        <h2><strong>醫療團隊 Teams</strong></h2>
      </Divider>
      <HomepageFeatures />
      {/* 我選擇寶貝兔 */}
      <Divider orientation="center">
        <h2><strong>顧客滿意見證 Cases</strong></h2>
      </Divider>
      <CaseComponent />
      <Divider orientation="center">
        <h2><strong>企業責任 ESG</strong></h2>
      </Divider>
      <div className={style.container}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/IIvB6yF4Z1g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </Layout>
  );
}
