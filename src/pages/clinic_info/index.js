import React from "react";
import Layout from "@theme/Layout";
import { Divider } from 'antd';
import style from './index.module.css';

export default function ClinicInfo() {
  return (
    <Layout title={'診所資訊'} description="Description will go into a meta tag in <head />">
      <div className={style.container}>
        {/* 診所介紹 */}

        {/* 服務理念 */}
        <Divider orientation="left">服務理念</Divider>
        {/* 診療時間 */}
        <Divider orientation="left">診療時間</Divider>
        {/* 預約方式(電話預約、Line線上預約) */}
        <Divider orientation="left">預約方式</Divider>
        {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTaipei&showDate=1&showTitle=0&showNav=0&showPrint=0&showTabs=0&showTz=1&src=b2JzZXJ2ZXIxMjIwQGdtYWlsLmNvbQ&src=ZHVja2NoYW5nN0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%232952a3&color=%23D50000&color=%237CB342" style={{ border: '1px solid #777' }} width="100%" height="500" frameborder="0" scrolling="no"></iframe> */}
        {/* 環境設備 */}
        <Divider orientation="left">環境設備</Divider>
        {/* 診所位置 */}
        <Divider orientation="left">診所位置</Divider>
        <div className={style.location}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2876520980094!2d120.29979191401405!3d22.68033329414096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05984fdd1621%3A0xc4b7c00c08dceb48!2z5a-26LKd5YWU6Kaq5a2Q54mZ6Yar6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1669732892436!5m2!1szh-TW!2stw" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.605062840439!2d120.31592987714222!3d22.74291616533703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f6613e3a59f%3A0xb371dbe3f13cf0f0!2z5a-26LKd5YWU6Z2S5Z-U6Kaq5a2Q54mZ6Yar6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1669732769708!5m2!1szh-TW!2stw" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

    </Layout >
  );
}