import { useState } from "react";
import { QuestionsData, BasePrize } from "./assets/ReactQuestions";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import FinalScreen from "./components/FinalScreen";

function App() {
  const [gameState, setGameState] = useState("start");
  const [finalScore, setFinalScore] = useState(0);

  const startGame = () => {
    setGameState("game");
  };

  const endGame = (correctAnswersNr: number) => {
    setGameState("end");
    setFinalScore(BasePrize*2^correctAnswersNr);
  };

  let screen: JSX.Element;
  switch (gameState) {
    case "start":
      screen = <WelcomeScreen onStart={startGame} />;
      break;
    case "game":
      screen = <GameScreen onEnd={endGame} questions={QuestionsData} />;
      break;
    case "end":
      screen = <FinalScreen score={finalScore} />;
      break;
    default:
      screen = <WelcomeScreen onStart={startGame} />;
  }

  return (
    <div>
      {screen}
    </div>
  );
}

export default App;