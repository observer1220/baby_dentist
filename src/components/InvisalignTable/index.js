import React from "react";
import style from "./styles.module.css";
import { Table, } from 'antd';

const columns = [
  {
    title: '',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    width: 120
  },
  {
    title: (
      <>
        隱適美
        <br />
        隱形牙套
      </>
    ),
    dataIndex: 'invisalign',
    key: 'invisalign',
    align: 'center',
    width: 160,
  },
  {
    title: (
      <>
        它牌便宜
        <br />
        透明牙套
      </>
    ),
    dataIndex: 'cheap_clear_braces',
    key: 'cheap_clear_braces',
    align: 'center',
    width: 160,
  },
  {
    title: '它牌透明牙套',
    dataIndex: 'transparent_braces',
    key: 'transparent_braces',
    align: 'center',
    width: 160,
  },
  {
    title: '傳統鋼線牙套',
    key: 'traditional_wire_braces',
    dataIndex: 'traditional_wire_braces',
    align: 'center',
    width: 160,
  },
];

const data = [
  {
    key: 1,
    description: "舒適體驗",
    invisalign: (
      <>
        SmartTrack
        <br />
        專利材質製造
      </>
    ),
    cheap_clear_braces: "部分使用維持器材質製造，需適應兩種不同材質",
    transparent_braces: '部分使用維持器材質製造，需適應兩種不同材質',
    traditional_wire_braces: "以傳統牙托及鋼線製成",
  },
  {
    key: 2,
    description: "近乎隱形透明",
    invisalign: '✅',
    cheap_clear_braces: "❌",
    transparent_braces: '☑️',
    traditional_wire_braces: "明顯可見鋼線及牙托",
  },
  {
    key: 3,
    description: "專業醫師親自諮詢",
    invisalign: '✅',
    cheap_clear_braces: "初次諮詢及後續計畫多為品牌端，醫師未必實際參與",
    transparent_braces: '☑️',
    traditional_wire_braces: "☑️",
  },
  {
    key: 4,
    description: "醫學權威信賴品牌",
    invisalign: '醫學中心選用* 全台最多醫師使用',
    cheap_clear_braces: "合作診所少",
    transparent_braces: '合作診所少',
    traditional_wire_braces: "",
  },
  {
    key: 5,
    description: "全球使用者資料庫",
    invisalign: '累積超過1400萬使用者數據',
    cheap_clear_braces: "使用者數據少",
    transparent_braces: '使用者數據少',
    traditional_wire_braces: "",
  },
  {
    key: 6,
    description: "專屬客製化",
    invisalign: '每副牙套皆配合您的牙齦調整，提供最佳舒適度',
    cheap_clear_braces: "",
    transparent_braces: '',
    traditional_wire_braces: "☑️",
  },
  {
    key: 7,
    description: "預測性更高",
    invisalign: '✅',
    cheap_clear_braces: "未使用附件不一定能達到困難移動",
    transparent_braces: '使用者數據較少，預測精準度較低',
    traditional_wire_braces: "",
  },
  {
    key: 8,
    description: "二級醫療器材",
    invisalign: '美國FDA認證台灣TFDA許可二級醫療器材',
    cheap_clear_braces: "部份未登記為二級醫療器材",
    transparent_braces: '部份未登記為二級醫療器材',
    traditional_wire_braces: "等級依個案而定",
  },
];

{/* <img
  src="https://res.cloudinary.com/dbjxyxxlj/image/upload/v1691722951/doc_image_312_asbqwb.png"
  alt="隱適美比較表"
/> */}

export default function Invisalign () {
  return (
    <div className={style.container}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}