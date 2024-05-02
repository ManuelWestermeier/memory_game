import GameFieldCard from "./game-field-card";

function GameFieldRow({ gameRowData }) {
  return (
    <div className="flex-row game-field">
      {Object.keys(gameRowData).map((y) => {
        return <GameFieldCard data={gameRowData[y]} key={y} />;
      })}
    </div>
  );
}

export default GameFieldRow;
