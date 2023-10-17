import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

import MenuIcon from "@mui/icons-material/Menu";

const Heading = ({ data }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "18px",
      }}
    >
      {data}
    </div>
  );
};
const Navbar = () => {
  const heading = [
    { data: "Home" },
    { data: "Order" },
    { data: "Food" },
    { data: "Restaurant" },
    { data: "Testimonials" },
    { data: "Contact Us" },
  ];

  const [display, setDisplay] = useState(false);
  const Toggle = () => {
    setDisplay(!display);
  };

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="navbar">
      {screenSize.dynamicWidth > 700 ? (
        <>
          {heading.map((val) => (
            <Heading data={val.data} />
          ))}
        </>
      ) : (
        <MenuIcon
          style={{ cursor: "pointer", width: "100px" }}
          onClick={Toggle}
        />
      )}
      {display ? (
        <div className="hamburgerItems">
          <button className="hamburgerItem">Home</button>
          <button className="hamburgerItem">Order</button>
          <button className="hamburgerItem">Food</button>
          <button className="hamburgerItem">Restaurant</button>
          <button className="hamburgerItem">Testimonials</button>
          <button className="hamburgerItem">Contact Us</button>
        </div>
      ) : null}
      <div className="navicons">
        <CallRoundedIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Navbar;
