import React from "react";
import Layout from "@theme/Layout";
import { Divider } from 'antd';
import style from './index.module.css';
import ESG1 from '@site/static/img/ESG/11.jpg';
import ESG2 from '@site/static/img/ESG/12.jpg';
import ESG3 from '@site/static/img/ESG/21.jpg';
import ESG4 from '@site/static/img/ESG/22.jpg';
import ESG5 from '@site/static/img/ESG/23.jpg';
import ESG6 from '@site/static/img/ESG/24.jpg';
import ESG7 from '@site/static/img/ESG/25.jpg';
import ESG8 from '@site/static/img/ESG/26.jpg';
import ESG9 from '@site/static/img/ESG/27.jpg';
import ESG10 from '@site/static/img/ESG/28.jpg';
import ESG11 from '@site/static/img/ESG/31.jpg';
import ESG12 from '@site/static/img/ESG/32.jpg';
import ESG13 from '@site/static/img/ESG/33.jpg';
import ESG14 from '@site/static/img/ESG/34.jpg';

export default function ClinicInfo () {
  return (
    <Layout title={'ESG社會服務'} description="Description will go into a meta tag in <head />">
      <div className={style.container}>
        <Divider orientation="left">
          <h2><strong>ESG社會服務</strong></h2>
        </Divider>
        <div className={style.paragraph}>
          <img src={ESG1} alt="" className={style.image} />
          <img src={ESG2} alt="" className={style.image} />
          <p>2012年11月「寶貝兔親子牙醫診所」開幕，除了以專業與熱忱照顧來到診內的小朋友，我們的醫師們也都帶著愛心與耐心每週進行醫療巡迴，多年來每週去樟山、寶山、那瑪夏…等偏鄉地區探訪原住民孩童，我們創下台灣紀錄，大幅度降低山區兒童的齲齒率，甚至提前達到WHO 2025年孩童齲齒率的目標。此外，友善身障朋友，去安養院照顧年長者也都是我們所熱衷的。</p>
          <p>11年 長期投入</p>
          <p>10個 關懷據點</p>
          <p>600次 送愛行動</p>
          <p>We believe that every child deserves a healthy, beautiful smile.</p>
        </div>
        <Divider orientation="left">
          <h2><strong>山區醫療</strong></h2>
        </Divider>
        <img src={ESG3} alt="" className={style.image} />
        <img src={ESG4} alt="" className={style.image} />
        <img src={ESG5} alt="" className={style.image} />
        <img src={ESG6} alt="" className={style.image} />
        <img src={ESG7} alt="" className={style.image} />
        <img src={ESG8} alt="" className={style.image} />
        <img src={ESG9} alt="" className={style.image} />
        <img src={ESG10} alt="" className={style.image} />
        <Divider orientation="left">
          <h2><strong>安養院醫療</strong></h2>
        </Divider>
        <img src={ESG11} alt="" className={style.image} />
        <img src={ESG12} alt="" className={style.image} />
        <img src={ESG13} alt="" className={style.image} />
        <img src={ESG14} alt="" className={style.image} />
      </div>
    </Layout >
  );
}