import { useEffect, useState } from "react";
import GameFieldRow from "./game-field-row";
import "./index.css";
import GameScore from "./game-score";

function GameField({ gameData, setGameData, names, setAppState, fieldSize }) {
  const [isFirstPlayer, setIsFirstPlayer] = useState(Math.random() > 0.5);
  const [score, setScore] = useState([0, 0]);

  const [selected, setSelected] = useState([false, false]);
  const [isFirstSelected, setIsFirstSelected] = useState(true);

  //check if there is a match
  useEffect(() => {
    if (!selected[1] || !selected[0]) return;
    if (selected[0].src != selected[1].src) return;
    //add to the active players score 1
    if (isFirstPlayer) {
      setScore((old) => [old[0] + 1, old[1]]);
    } else {
      setScore((old) => [old[0], old[1] + 1]);
    }
    //hide the selected cards
    setGameData((old) => {
      old[selected?.[0]?.coords?.x][selected?.[0]?.coords?.y].uncovered = true;
      old[selected?.[1]?.coords?.x][selected?.[1]?.coords?.y].uncovered = true;
      return old;
    });
  }, [selected]);

  //check if someone wone
  useEffect(() => {
    if ((score[0] + score[1]) * 2 != fieldSize ** 2)
      return
    if (score[0] == score[1]) {
      window.winner = `draw (${score[0]} vs ${score[1]})`;
    } else if (score[0] > score[1]) {
      window.winner = `${names[0]} (${score[0]} vs ${score[1]}) won`;
    } else {
      window.winner = `${names[1]} (${score[1]} vs ${score[0]}) won`;
    }
    setAppState(2);
  }, [score]);

  const passed = {
    selected,
    setSelected,
    isFirstSelected,
    setIsFirstSelected,
    setIsFirstPlayer,
  };

  return (
    <>
      <div className="flex-col">
        {Object.keys(gameData).map((x) => (
          <GameFieldRow passed={passed} gameRowData={gameData[x]} key={x} />
        ))}
      </div>
      <GameScore score={score} names={names} isFirstPlayer={isFirstPlayer} />
    </>
  );
}
export default GameField;
