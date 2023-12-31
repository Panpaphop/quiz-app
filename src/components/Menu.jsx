import { useContext } from "react";
import { DataContext } from "../App";
const Menu = () => {
  const { setAppState } = useContext(DataContext);
  return (
    <div className="menu">
      <h2>Click the button to start test.</h2>
      <button onClick={() => setAppState("quiz")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
