import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import styles from './index.module.css';
import CarouselComponent from '../components/Carouesl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* 輪播圖:3~5張活動資訊 */}
        <CarouselComponent />
        {/* 診所資訊:診間時間表 */}

        {/* 醫師團隊 */}

        {/* 診療項目 */}
      </main>
    </Layout>
  );
}
