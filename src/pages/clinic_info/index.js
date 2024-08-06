import React from "react";
import Layout from "@theme/Layout";
import { Divider } from "antd";
import style from "./index.module.css";

export default function ClinicInfo() {
  return (
    <Layout
      title={"關於寶貝兔"}
      description="Description will go into a meta tag in <head />"
    >
      <div className={style.container}>
        <Divider orientation="left">
          <h2>
            <strong>關於寶貝兔</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          <p>
            寶貝兔牙醫聯盟由3位各在「兒牙」、「植牙」與「美學」方面學經歷豐富的博士團隊領軍，帶領9位精湛技術的牙醫師一起致力於善用專業來修復、寶貝您與孩童、長者牙齒全面的健康，並以卓越的雕塑技術，成就您對牙齒美學的期待。
          </p>
          <p>
            2012年11月「寶貝兔親子牙醫診所」開幕，除了以專業與熱忱照顧著來到診內的小朋友，我們的醫師們也都帶著愛心與耐心執行著醫療巡迴，每週去樟山、寶山、那瑪夏…等偏鄉地區照顧原住民孩童，多年來，已經創下台灣紀錄地大幅度降低齲齒率，甚至已提前達到WHO
            2025年孩童齲齒率的目標。此外，友善身障朋友，去安養院照顧長者也都是我們所熱衷的。
          </p>
          <p>
            2021年11月「寶貝兔青埔親子牙醫診所」開幕，位於青埔捷運站正對面，進一步融合空間美學與美食的咖啡廳提供您在候診時、看診後調節的節奏。醫術方面，本診所特別卓越於牙齒矯正與美白技術，以滿足愛美者對於美的更高期待。
          </p>
        </div>
        {/* 品牌理念 */}
        <Divider orientation="left">
          <h2>
            <strong>品牌理念</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          <ul>
            <li>愛 是我們的原動力</li>
            <li>專業 是我們的基礎</li>
            <li>服務 是我們的堅持</li>
            <li>行動 是我們的熱情</li>
            <li>笑容 是因為您值得</li>
          </ul>
        </div>
        {/* 專業協同 */}
        <Divider orientation="left">
          <h2>
            <strong>專業協同</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          <img src="https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722747/about_2_bmracz.jpg" />
          <p>診後的精進，是我們呵護患者的日常</p>
          <p>
            在寶貝兔，我們聚集了牙醫各種專科等醫師陣容群，想要以最高的醫療品質，帶給你完整的口腔照護計畫。
          </p>
        </div>
        {/* 醫病關係 */}
        <Divider orientation="left">
          <h2>
            <strong>醫病關係</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          <img src="https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722747/about_1_i8ukwm.jpg" />
          <p>我們想參與在你人生中每個重要的時刻</p>
          <p>We believe that every moment in life is worth celebrating</p>
        </div>
        {/* 山區關懷 */}
        <Divider orientation="left">
          <h2>
            <strong>山區關懷</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          {/* <img src={test2} /> */}
          <p>一起把愛傳遞出去</p>
          <p>
            We believe that every child deserves a healthy, beautiful smile.
          </p>
          <p>
            除了以專業與熱忱照顧著來到診內的小朋友，我們也認真的在執行著山區醫療巡迴，也創下台灣紀錄大幅度的降低山區兒童的齲齒率。
          </p>
        </div>

        {/* 環境設備 */}
        <Divider orientation="left">
          <h2>
            <strong>環境設備</strong>
          </h2>
        </Divider>
        <div className={style.paragraph}>
          <h3>在候診的片刻我們享帶給你不一樣的感受</h3>
          <p>
            進一步融合空間美學與美食的咖啡廳提供您在候診時、看診後調節的節奏。
          </p>
        </div>
      </div>
    </Layout>
  );
}
