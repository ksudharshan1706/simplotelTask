import React from "react";
import { pizza } from "../../assets";
import "./Order.css";
const Items = ({ data }) => {
  return (
    <div className="dishcart">
      <div className="dishcartItem">
        <div className="imgstyle">
          <img
            src={data.img}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h3>{data.dishname}</h3>
        <div style={{ padding: "10px", textAlign: "center" }}>{data.desc}</div>
      </div>
    </div>
  );
};

export default Items;
