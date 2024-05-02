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
  if (data.uncovered) {
    return <div className={`card card-hide`} />;
  }

  const isTurned =
    (selected?.[0]?.coords?.x == data.coords.x &&
      selected?.[0]?.coords?.y == data.coords.y) ||
    (selected?.[1]?.coords?.x == data.coords.x &&
      selected?.[1]?.coords?.y == data.coords.y);

  const onClick = () => {
    if (isFirstSelected) {
      setIsFirstPlayer((o) => !o);
      setSelected(() => [data, false]);
      setIsFirstSelected(false);
    } else {
      setSelected((old) => [old[0], data]);
      setIsFirstSelected(true);
    }
  };

  return (
    <div className={`card ${isTurned && "card-turned"}`} onClick={onClick}>
      <img src={data.src} alt={`card ${data.src}`} />
    </div>
  );
}

export default GameFieldCard;
