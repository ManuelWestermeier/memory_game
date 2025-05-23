import React, { useRef, useState } from "react";
import "./index.css";

export default function AskForName({
  setAppState,
  setNames,
  names,
  fieldSize,
  setFieldSize,
}) {
  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);
  const [gridSize, setGridSize] = useState(fieldSize || 6);

  const handleSubmit = (e) => {
    e.preventDefault();
    const p1 = firstNameRef.current.value.trim();
    const p2 = secondNameRef.current.value.trim();
    setNames([p1, p2]);
    setFieldSize(gridSize);
    setAppState(1);
  };

  const handleShare = () => {
    const shareData = {
      title: "Ultimate Free Online Memory Game – Ad-Free 1v1",
      text: "I'm playing an ad-free, free online memory match. Join me!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert("Link copied to clipboard – share with friends!");
      });
    } else {
      alert(`Copy this link to invite: ${shareData.url}`);
    }
  };

  return (
    <div className="ask-container">
      <section className="intro-section">
        <h1>Ultimate Free Online Memory Game</h1>
        <p className="intro-text">
          Challenge your mind with our ad-free, browser-based 1v1 memory match.
          No downloads, no ads—just pure fun!
        </p>
      </section>

      <form onSubmit={handleSubmit} className="game-form">
        <fieldset>
          <legend>Player Names</legend>
          <label htmlFor="player1">Player 1</label>
          <input
            id="player1"
            type="text"
            ref={firstNameRef}
            defaultValue={names[0] || ""}
            placeholder="Enter your name or nickname"
            required
          />

          <label htmlFor="player2">Player 2</label>
          <input
            id="player2"
            type="text"
            ref={secondNameRef}
            defaultValue={names[1] || ""}
            placeholder="Enter opponent's name"
            required
          />
        </fieldset>

        <fieldset className="slider-container">
          <legend>Board Size</legend>
          <label htmlFor="grid">
            Select Grid:{" "}
            <strong>
              {gridSize} × {gridSize}
            </strong>
          </label>
          <input
            id="grid"
            type="range"
            min="4"
            max="20"
            step="2"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            aria-valuemin={4}
            aria-valuemax={20}
            aria-valuenow={gridSize}
            aria-label="Select memory board size"
          />
          <div className="slider-label">
            {[4, 6, 8, 10, 12, 14, 16, 18, 20].map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="play-button">
          Play Now – Free & Ad‑Free
        </button>
      </form>

      <button
        onClick={handleShare}
        className="share-button"
        aria-label="Share this game"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
        </svg>
        Share Game
      </button>
    </div>
  );
}
