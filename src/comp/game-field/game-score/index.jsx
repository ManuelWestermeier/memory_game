import "./index.css";

function GameScore({ score, names, isFirstPlayer }) {
  return (
    <div className="score-view">
      <span className={isFirstPlayer && "active"}>
        {names[0]}: {score[0]}
      </span>
      <span className={!isFirstPlayer && "active"}>
        {names[1]}: {score[1]}
      </span>
    </div>
  );
}

export default GameScore;
