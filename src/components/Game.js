
import React, { useState, useEffect, useRef } from 'react';
import Board from "./Board";
import CreateStartingLayout from "./CreateStartingLayout"

let gameStats = class{
  constructor(){
    this.turn = 1
    this.player = 1
    this.board = CreateStartingLayout();
    this.prevBoard = [];
  }
 
};

const Game = () => {
 const boardLayout = CreateStartingLayout();
  const [firstClick, setFirstClick] = useState(true);
  const[currentBoard, setCurrentBoard] = useState(CreateStartingLayout());
  const[clickedPiece, setClickedPiece] = useState(currentBoard[0]);
  const[prevIndex, setPrevIndex] = useState(0);

  
 
  const resetColors = (board) =>{
    for (let i = 0; i < board.length; i++) {
      board[i].color = boardLayout[i].color;
    }
  }

  const handleFirstClick = (i) => {
    setPrevIndex(i); //store previous index for use in handleSecondClick
    setClickedPiece(currentBoard[i]);//store clicked piece for use in handleSecondClick
  
    currentBoard[i+8].color = 'yellow';
    setFirstClick(!firstClick);
    return;
  };

  const handleSecondClick = (i) => {
    /* ANY UPDATES TO "currentBoard" WILL BE REACTIVELY DISPLAYED */
    resetColors(currentBoard); //removes all highlights
    
    currentBoard[i].pieceName = clickedPiece.pieceName;
    currentBoard[i].pieceColor = clickedPiece.pieceColor;
    currentBoard[prevIndex].pieceName = '';
    
    setFirstClick(!firstClick);
    return;
  };


    

  return (
    <>
      <h1>Chess</h1>
      <Board squares={currentBoard} onClick={firstClick ? handleFirstClick : handleSecondClick} />
      <div className="info-wrapper">
    
      </div>
    </>
  );
};

export default Game;