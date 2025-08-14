import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [setGameOver] = useState(false);
  const [status, setStatus] = useState("White to move");

  const safeGameMutate = (modify) => {
    const updatedGame = new Chess(game.fen());
    modify(updatedGame);
    setGame(updatedGame);
    setFen(updatedGame.fen());

    if (updatedGame.isGameOver()) {
      setGameOver(true);
      if (updatedGame.isCheckmate()) {
        setStatus("Checkmate! " + (updatedGame.turn() === "w" ? "Black" : "White") + " wins.");
      } else if (updatedGame.isDraw()) {
        setStatus("Draw!");
      } else {
        setStatus("Game over.");
      }
    } else {
      setStatus(updatedGame.turn() === "w" ? "White to move" : "Black to move");
    }
  };

  const onDrop = (sourceSquare, targetSquare) => {
    safeGameMutate((gameInstance) => {
      const move = gameInstance.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // auto-promote to queen
      });

      if (!move) return;
    });
    return true;
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setGameOver(false);
    setStatus("White to move");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Online Chess Game</h2>
      <Chessboard position={fen} onPieceDrop={onDrop} boardWidth={400} />
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{status}</p>
      <button onClick={resetGame} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Reset Game
      </button>
    </div>
  );
};

export default ChessGame;
