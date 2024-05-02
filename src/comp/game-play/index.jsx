import { useEffect, useState } from "react";
import GetRandomGameData from "../../utils/get-random-game-data";
import "./index.css";
import GameField from "../game-field";

function GamePlay({ setAppState, names, fieldSize }) {
  const [gameData, setGameData] = useState(false);
  const [loadingStateInPercent, setAppStateLoadingStateInPercent] = useState(0);

  useEffect(() => {
    GetRandomGameData(fieldSize, setAppStateLoadingStateInPercent).then((gd) => setGameData(gd));
  }, []);

  if (!gameData) {
    return <h1 className="loading">Loading... ({loadingStateInPercent}%) (it can take a 30s)</h1>;
  }

  return (
    <div className="game-port">
      <GameField gameData={gameData} names={names} />
    </div>
  );
}

export default GamePlay;
