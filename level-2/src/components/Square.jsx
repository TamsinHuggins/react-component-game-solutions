import { useState } from "react";

/* eslint-disable react/prop-types */
const Square = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const squareColor = props.color ?? "grey";

  const handleClick = () => {
    setClickCount((clickCount) => clickCount + 1);
    props.parentUpdateFunc();
  };

  return (
    <button
      className="square"
      style={{ backgroundColor: squareColor }}
      onClick={handleClick}
    >
      {clickCount}
    </button>
  );
};

export default Square;
