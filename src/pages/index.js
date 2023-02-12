import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import style from './index.module.css';
import CarouselComponent from '../components/Carouesl';

export default function Home () {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* 標題與預約 */}
      <HomepageHeader />
      {/* 廣告輪播圖 */}
      <CarouselComponent />
      {/* 特色 */}
      <HomepageFeatures />
      {/* 診所資訊:診間時間表 */}

      {/* 醫師團隊 */}

      {/* 診療項目 */}

      {/* 患者案例 */}

      {/* YouTube影片 */}
      <div className={style.container}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/IIvB6yF4Z1g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </Layout>
  );
}
