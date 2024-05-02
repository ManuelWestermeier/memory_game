import { useState } from "react";
import AskForName from "./comp/ask-for-name";
import useLocalStorage from "use-local-storage";
import GamePlay from "./comp/game-play";

function App() {
  const [appState, setAppState] = useState(0);
  const [names, setNames] = useLocalStorage("memory-names", ["", ""]);
  const [fieldSize, setFieldSize] = useLocalStorage("memory-field-size", 10);

  if (appState == 0) {
    return (
      <AskForName
        setAppState={setAppState}
        setNames={setNames}
        names={names}
        fieldSize={fieldSize}
        setFieldSize={setFieldSize}
      />
    );
  }

  if (appState == 1) {
    return (
      <GamePlay
        setAppState={setAppState}
        names={names}
        fieldSize={fieldSize}
      />
    );
  }
}

export default App;
