/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";

const Circle = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((clickCount) => (clickCount + 1) % 7);
    props.parentUpdateFunc();
  };

  const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  return (
    <button
      className="circle"
      style={{ backgroundColor: rainbow[clickCount] }}
      onClick={handleClick}
    ></button>
  );
};

export default Circle;
