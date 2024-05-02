import "./index.css";

function FinishMenu({ setAppState }) {
  return (
    <div className="flex-col finish-menu">
      <h1 className="flex-row">
        <span>🏆</span>
        <span>{window?.winner} won</span>
        <span>🏆</span>
      </h1>
      <div className="flex-row">
        <button onClick={() => setAppState(0)}>Menu</button>
        <button onClick={() => setAppState(1)}>Retry</button>
      </div>
    </div>
  );
}

export default FinishMenu;
