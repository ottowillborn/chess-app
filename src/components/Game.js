/*eslint no-eval: 0 */
import React, { useState, useEffect, useRef } from 'react';
import Board from "./Board";
import CreateStartingLayout from "./CreateStartingLayout"
import FallenSoldiersTab from './FallenSoldiersTab';

const Game = () => {
  const boardLayout = CreateStartingLayout();
  const [firstClick, setFirstClick] = useState(true);
  const[currentBoard, setCurrentBoard] = useState(CreateStartingLayout());
  const[clickedPiece, setClickedPiece] = useState(currentBoard[0]);
  const[playerTurn, setPlayerTurn] = useState('+');
  const[prevIndex, setPrevIndex] = useState(0);
  const[whiteCapturedPieces, setWhiteCapturedPieces] = useState([]);
  const[blackCapturedPieces, setBlackCapturedPieces] = useState([]);
  
 
 
  const resetColors = (board) =>{
    const highlightedIndices = []
    for (let i = 0; i < board.length; i++) {
      if(board[i].color === 'yellow'){
        highlightedIndices.push(i);
      }
      board[i].color = boardLayout[i].color;
    }
    return highlightedIndices;
  };
  
  const isOccupied = (index) =>{
    if(currentBoard[index].pieceName !== ''){ 
      return true;
    }else{
      return false;
    }
  };

  const displayPossibleMoves = (index) =>{
    const currentPiece = currentBoard[index];//hold current piece for comparisons

    if(currentPiece.pieceName === 'pawn'){
      if(currentPiece.firstTurn){//if it is the pawns first move
        currentBoard[eval(index + playerTurn + 16)].color = 'yellow';//highlight 2 tiles ahead
        currentPiece.firstTurn = false;//change firstTurn
      }
      if(isOccupied(eval(index + playerTurn + 7)) && ((eval(index + playerTurn + 7))%7) !== 1){//check left diagonal
        currentBoard[eval(index + playerTurn + 7)].color = 'yellow';
      }
      if(isOccupied(eval(index + playerTurn + 9))){//check right diagonal
        currentBoard[eval(index + playerTurn + 9)].color = 'yellow';
      }
      currentBoard[eval(index + playerTurn + 8)].color = 'yellow';//always highlight 1 tile ahead
      return;
    }
    if(currentPiece.pieceName === 'rook'){
      
    }
    if(currentPiece.pieceName === 'knight'){
      
    }
    if(currentPiece.pieceName === 'bishop'){
      
    }
    if(currentPiece.pieceName === 'king'){
      
    }
    if(currentPiece.pieceName === 'queen'){
      
    }
  };

  const handleFirstClick = (i) => {
    setPrevIndex(i); //store previous index for use in handleSecondClick
    setClickedPiece(currentBoard[i]);//store clicked piece for use in handleSecondClick
    displayPossibleMoves(i);
    setFirstClick(!firstClick);
    return;
  };

  const handleSecondClick = (i) => {
    /* ANY UPDATES TO "currentBoard" WILL BE REACTIVELY DISPLAYED */
    const highlightedIndices = resetColors(currentBoard); //removes all highlights
    
    if(highlightedIndices.includes(i)){
      if(currentBoard[i].pieceName !== ''){
        if(clickedPiece.pieceColor === 'light'){
          const pushPiece = currentBoard[i];
          blackCapturedPieces.push(pushPiece);
          setBlackCapturedPieces(blackCapturedPieces);
        }else{
          const pushPiece = currentBoard[i];
          whiteCapturedPieces.push(pushPiece);
          setWhiteCapturedPieces(whiteCapturedPieces);
        }
      }
    currentBoard[i].pieceName = clickedPiece.pieceName;
    currentBoard[i].pieceColor = clickedPiece.pieceColor;
    currentBoard[i].firstTurn = clickedPiece.firstTurn;
    currentBoard[prevIndex].pieceName = '';
    }else{
      setFirstClick(!firstClick);
      return;
    }
    
    if(playerTurn === '+'){
      setPlayerTurn('-');
    }else{
      setPlayerTurn('+');
    }
    setFirstClick(!firstClick);
    console.log(whiteCapturedPieces);
    return;
  };


    

  return (
    <>
      <h1>Chess</h1>
      <Board squares={currentBoard} onClick={firstClick ? handleFirstClick : handleSecondClick} />
      <FallenSoldiersTab soldiers={whiteCapturedPieces} color='wfslabel'>White Fallen Soldiers</FallenSoldiersTab>
      <label className = 'wfslabel'>Black Captured Pieces: {blackCapturedPieces}</label>
      <label className={playerTurn === '+' ? 'whitelabel' : 'blacklabel'}>It is {playerTurn === '+' ? 'white' : 'black'}'s turn</label>
    </>
  );
};

export default Game;