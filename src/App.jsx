import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <>
        <h2>Web Development Quiz</h2>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </>
    </DataContext.Provider>
  );
}

export default App;
