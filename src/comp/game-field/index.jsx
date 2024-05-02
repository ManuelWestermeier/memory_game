import { useState } from "react";
import GameFieldRow from "./game-field-row";
import "./index.css";
import GameScore from "./game-score";

function GameField({ gameData, setGameData, names }) {
  const [score, setScore] = useState([0, 0]);
  const [isFirstPlayer, setIsFirstPlayer] = useState(Math.random() > 0.5);

  function addPair(choord1, choord2) {
    const card1 = gameData[choord1.x][choord1.y];
    const card2 = gameData[choord2.x][choord2.y];

    if (card1.uncovered || card2.uncovered) return;
    if (card1.src != card2.src) return;

    
  }

  return (
    <>
      <div className="flex-col">
        {Object.keys(gameData).map((x) => (
          <GameFieldRow gameRowData={gameData[x]} key={x} />
        ))}
      </div>
      <GameScore score={score} names={names} isFirstPlayer={isFirstPlayer} />
    </>
  );
}
export default GameField;
