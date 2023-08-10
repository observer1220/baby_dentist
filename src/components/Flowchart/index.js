import React from "react";
import { Timeline } from 'antd';
import style from "./styles.module.css";

export default function Flowchart ({ data }) {
  return (
    <div className={style.container}>
      <Timeline
        mode="alternate"
        items={data}
      />
    </div>
  );
}