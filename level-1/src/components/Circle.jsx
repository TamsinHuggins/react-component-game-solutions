import "../App.css";

const Circle = (props) => {
  const circleColor = props.color ?? "grey";

  return (
    <div className="circle" style={{ backgroundColor: circleColor }}></div>
  );
};

export default Circle;
