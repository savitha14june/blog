import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function ChessGame() {
  const [game, setGame] = useState(new Chess());

  function onDrop(sourceSquare, targetSquare) {
    let move = null;
    try {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // Always promote to a queen for simplicity
      });
    } catch (e) {
      console.log('Invalid move', e);
    }
    
    if (move === null) return false;
    
    setGame(new Chess(game.fen())); // Update state to trigger re-render
    
    return true;
  }

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
}

export default ChessGame;