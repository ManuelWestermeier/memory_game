import "./index.css";

function GameFieldCard({
  data,
  passed: {
    selected,
    setSelected,
    isFirstSelected,
    setIsFirstSelected,
    setIsFirstPlayer,
  },
}) {
  const isTurned =
    (selected?.[0]?.coords?.x == data.coords.x &&
      selected?.[0]?.coords?.y == data.coords.y) ||
    (selected?.[1]?.coords?.x == data.coords.x &&
      selected?.[1]?.coords?.y == data.coords.y);

  const onClick = () => {
    if (isFirstSelected) {
      setSelected(() => [data, false]);
      setIsFirstSelected(false);
    } else {
      setSelected((old) => [old[0], data]);
      setIsFirstSelected(true);
      //on win retry
      if (selected[0].src == data.src) return;
      setIsFirstPlayer((o) => !o);
    }
  };

  return (
    <div className={`card ${isTurned && "card-turned"} ${data.uncovered && "card-hide"}`} onClick={onClick}>
      <img src={data.src} alt={`card ${data.src}`} />
    </div>
  );
}

export default GameFieldCard;
