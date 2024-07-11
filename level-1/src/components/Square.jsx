/* eslint-disable react/prop-types */
const Square = (props) => {
  const squareColor = props.color ?? "grey";

  return (
    <div className="square" style={{ borderBottomColor: squareColor }}></div>
  );
};

export default Square;
