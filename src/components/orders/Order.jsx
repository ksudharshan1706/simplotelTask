import React from "react";
import Items from "./Items";
import { burger, pasta, pizza } from "../../assets";

const Order = () => {
  const items = [
    {
      img: burger,
      dishname: "BURGER",
      desc: "  Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: pizza,
      dishname: "PIZZA",
      desc: "  Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: pasta,
      dishname: "PASTA",
      desc: "  Lorem Ipsum has been the industry's standard dummy text",
    },
  ];

  return (
    <div className="secondContainer">
      <div style={{ color: "white", fontSize: "50px", fontWeight: "500" }}>
        Order Now
      </div>
      <div className="dishBar">
        {items.map((data) => (
          <Items data={data} />
        ))}
      </div>
      <button className="button">Order</button>
    </div>
  );
};

export default Order;
