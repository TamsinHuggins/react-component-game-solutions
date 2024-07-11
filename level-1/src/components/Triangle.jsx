/* eslint-disable react/prop-types */
const Triangle = (props) => {
  const triangleColor = props.color ?? "grey";

  return (
    <div
      className="triangle"
      style={{ borderBottomColor: triangleColor }}
    ></div>
  );
};

export default Triangle;
