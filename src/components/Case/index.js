import React from "react";
import style from "./styles.module.css";
import Link from "@docusaurus/Link";

import banner1 from '/static/img/index/banner1.jpg'
import banner2 from '/static/img/index/banner2.jpg'
import banner3 from '/static/img/index/banner3.jpg'

const dataSource = [
  {
    id: 1,
    label: '【假牙重建01】職業媽媽重拾美麗笑容',
    desc: '孫小姐從小左邊的門牙就轉了90度，照相看起來好',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202301311714092.jpg',
  },
  {
    id: 2,
    label: '【矯正人蔘024】烏克蘭美女二次牙齒矯正',
    desc: '來自烏克蘭的美女，在其他診所已接受過超過一年矯',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202301041250591.jpg',
  },
  {
    id: 3,
    label: '【矯正人蔘023】骨暴矯正：不動刀矯正也可以自信笑容',
    desc: "這是典型的暴牙案例，上顎暴下顎後縮，伴隨牙齦性",
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202210221441203.jpg',
  },
  {
    id: 4,
    label: '【矯正人蔘022】不拔牙矯正：修長帥氣臉型拉出下巴線',
    desc: '牙齒凌亂導致輕微暴牙及小下巴，不僅會影響到臉型',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202210221440341.jpg',
  },
  {
    id: 5,
    label: '【活動假牙重建001】揮別討厭黃牙，重建笑容自信',
    desc: '滿口黃牙的怎麼辦?雖然口罩遮住看不見，但是還是',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202110290245231.jpg',
  },
  {
    id: 6,
    label: '【矯正人蔘010】虎牙不再卡卡：展現女神級微笑',
    desc: '虎牙讓嘴唇總是卡卡，容易咬破皮，又不好清潔？這',
    url: 'https://www.taipei-arts-dental-clinic.com.tw/Files/202205110013015.jpg',
  },
]

// Carousel的隱藏API請查閱React-Slick
export default function CaseComponent () {
  return (
    <div className={style.container}>
      <ul>
        {dataSource.map((item, idx) => (
          <Link
          // to={`/docs/treatment/${item.label}`}
          >
            <li key={idx} style={{ width: '300px' }}>
              <img src={item.url} style={{ width: '300px' }} />
              {/* limit 18 words */}
              <span>{item.label.length > 18 ? item.label.slice(0, 18) + '...' : item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}