import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import style from './index.module.css';
import CarouselComponent from '../components/Carouesl';
import { Divider } from 'antd';

export default function Home () {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* Banner輪播圖 */}
      <CarouselComponent />
      {/* 立即預約 */}
      <HomepageHeader />
      {/* 醫師團隊 */}
      <Divider orientation="center">
        <h2><strong>專業醫療團隊 Teams</strong></h2>
      </Divider>
      <HomepageFeatures />
      {/* 診療項目 */}
      <Divider orientation="center">
        <h2><strong>診療項目 Services</strong></h2>
      </Divider>
      {/* 案例分享 */}
      <Divider orientation="center">
        <h2><strong>案例分享 Cases</strong></h2>
      </Divider>

      {/* YouTube影片 */}
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
