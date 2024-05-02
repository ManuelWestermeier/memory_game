import "./index.css";

function GameFieldCard({ data }) {
  const isTurnded = true;

  if (data.uncovered) {
    return <div className={`card ${isTurnded && "card-turned"}`} />;
  }

  return (
    <div className={`card ${isTurnded && "card-turned"}`} onClick={(e) => {}}>
      <img src={data.src} alt={`card ${data.src}`} />
    </div>
  );
}

export default GameFieldCard;
