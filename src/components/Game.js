
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
  updateBoard(newBoard){
    this.board = newBoard;
  }
  updatePrevBoard(newBoard){
    this.prevBoard = newBoard;
  }
};

const Game = () => {
  const stats = new gameStats();
  const [firstClick, setFirstClick] = useState(true);
  const[currentBoard, setCurrentBoard] = useState(CreateStartingLayout());
  const[highlightedBoard, setHighlightedBoard] = useState(currentBoard);
  const[clickedPiece, setClickedPiece] = useState(currentBoard[0]);
  const[prevIndex, setPrevIndex] = useState(0);
  const[prevBoard, setPrevBoard] = useState(CreateStartingLayout());
 
  

  const handleFirstClick = (i) => {
    setPrevIndex(i);
    stats.turn = stats.turn+1;
    console.log(stats.turn)
    setPrevBoard(currentBoard);
    setClickedPiece(currentBoard[i]);
    console.log(prevBoard[16]);
  
    highlightedBoard[i+8].color = 'yellow';
    setHighlightedBoard(highlightedBoard)
    console.log(prevBoard[16]);
    setFirstClick(!firstClick);
    return;
  };

  const handleSecondClick = (i) => {
    setCurrentBoard(prevBoard);
    currentBoard[i].pieceName = clickedPiece.pieceName;
    currentBoard[i].pieceColor = clickedPiece.pieceColor;
    currentBoard[prevIndex].pieceName = '';
    setCurrentBoard(currentBoard);
    setFirstClick(!firstClick);
    return;
  };


    

  return (
    <>
      <h1>Chess</h1>
      <Board squares={firstClick ? highlightedBoard : currentBoard} onClick={firstClick ? handleFirstClick : handleSecondClick} />
      <div className="info-wrapper">
    
      </div>
    </>
  );
};

export default Game;