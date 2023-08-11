import React from "react";
import Layout from "@theme/Layout";
import { Divider } from 'antd';
import style from './index.module.css';
import CarouselComponent from "../../components/Carouesl";

const slides = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_21_gv481j.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_22_xwrsbr.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_23_cbhjka.jpg",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_24_hdqcp3.jpg",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_25_e0eaus.jpg",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_26_f5gorq.jpg",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_27_jzmeby.jpg",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_28_y1knap.jpg",
  },
]

const slides2 = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_31_sebyfe.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723877/ESG/ESG_32_stkrbj.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_33_bf5eei.jpg",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_34_rbziio.jpg",
  },

]

export default function ClinicInfo () {
  return (
    <Layout title={'ESG社會服務'} description="Description will go into a meta tag in <head />">
      <div className={style.container}>
        <Divider orientation="left">
          <h2><strong>ESG社會服務</strong></h2>
        </Divider>
        <div className={style.paragraph}>
          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <img src={"https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_12_g9gssr.jpg"} alt="" style={{ width: "400px" }} />
            <img src={"https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691723878/ESG/ESG_11_gn7hys.jpg"} alt="" style={{ width: "400px" }} />

          </div>
          <p>2012年11月「寶貝兔親子牙醫診所」開幕，除了以專業與熱忱照顧來到診內的小朋友，我們的醫師們也都帶著愛心與耐心每週進行醫療巡迴，多年來每週去樟山、寶山、那瑪夏…等偏鄉地區探訪原住民孩童，我們創下台灣紀錄，大幅度降低山區兒童的齲齒率，甚至提前達到WHO 2025年孩童齲齒率的目標。此外，友善身障朋友，去安養院照顧年長者也都是我們所熱衷的。</p>
          <p>11年 長期投入</p>
          <p>10個 關懷據點</p>
          <p>600次 送愛行動</p>
          <p>We believe that every child deserves a healthy, beautiful smile.</p>
        </div>
        <Divider orientation="left">
          <h2><strong>山區醫療</strong></h2>
        </Divider>
        <CarouselComponent slides={slides} />

        <Divider orientation="left">
          <h2><strong>安養院醫療</strong></h2>
        </Divider>
        <CarouselComponent slides={slides2} />
        {/* <img src={ESG11} alt="" className={style.image} />
        <img src={ESG12} alt="" className={style.image} />
        <img src={ESG13} alt="" className={style.image} />
        <img src={ESG14} alt="" className={style.image} /> */}
      </div>
    </Layout >
  );
}