import { useRef } from "react";
import "./index.css";

function AskForName({ setAppState, setNames, names, fieldSize, setFieldSize }) {
  const nameInputFirst = useRef();
  const nameInputSecound = useRef();
  const fieldSizeInput = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setNames([
          nameInputFirst.current.value,
          nameInputSecound.current.value,
        ]);
        setFieldSize(parseInt(fieldSizeInput.current.value));
        setAppState(1);
      }}
      className="fullscreen-form"
    >
      <h1>Best Memory Game Free</h1>
      <input
        type="text"
        required
        placeholder="Name 1..."
        defaultValue={names[0]}
        ref={nameInputFirst}
      />
      <input
        type="text"
        required
        placeholder="Name 2..."
        defaultValue={names[1]}
        ref={nameInputSecound}
      />
      <select ref={fieldSizeInput} defaultValue={fieldSize}>
        <option value="4" selected={fieldSize == 4}>
          4x4
        </option>
        <option value="8" selected={fieldSize == 8}>
          8x8
        </option>
        <option value="10" selected={fieldSize == 10}>
          10x10
        </option>
        <option value="12" selected={fieldSize == 12}>
          12x12
        </option>
        <option value="14" selected={fieldSize == 14}>
          14x14
        </option>
        <option value="16" selected={fieldSize == 16}>
          16x16
        </option>
        <option value="18" selected={fieldSize == 18}>
          18x18
        </option>
        <option value="20" selected={fieldSize == 20}>
          20x20
        </option>
      </select>
      <button type="Submit">Play</button>
    </form>
  );
}
export default AskForName;
