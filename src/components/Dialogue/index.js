import React from "react";
import style from "./styles.module.css";

export default function DialogueComponent ({ dataSource }) {
  return (
    <div>
      {dataSource.map((item, index) => (
        <div style={{ display: "flex", alignItems: "center", margin: "10px" }} key={index}>
          <img src={item.image_url} style={{ width: "100px", marginRight: "10px" }} alt="" />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}