import { useState } from "react";
import Circle from "./components/Circle";
import Square from "./components/Square";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);

  const handleAnyShapeClicked = () => {
    setTotalClicks((totalClicks) => totalClicks + 1);
  };

  return (
    <div>
      <h1>Total Clicks: {totalClicks}</h1>

      <div className="shapes">
        <Circle parentUpdateFunc={handleAnyShapeClicked} />
        <Circle parentUpdateFunc={handleAnyShapeClicked} />
        <Square color="orange" parentUpdateFunc={handleAnyShapeClicked} />
        <Square color="blue" parentUpdateFunc={handleAnyShapeClicked} />
      </div>
    </div>
  );
}

export default App;

///
