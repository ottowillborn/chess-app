/*eslint no-eval: 0 */

import React, { useState, useEffect, useRef } from 'react';
import Board from "./Board";
import CreateStartingLayout from "./CreateStartingLayout"
import FallenSoldiersTab from './FallenSoldiersTab';

const Game = () => {
  
  const boardLayout = CreateStartingLayout();
  const [firstClick, setFirstClick] = useState(true);
  const[currentBoard, setCurrentBoard] = useState(CreateStartingLayout());
  const[firstClickedPiece, setFirstClickedPiece] = useState();
  const[secondClickedPiece, setSecondClickedPiece] = useState();
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

  const isOnBoard = (index) =>{
    if ((index>=0) && (index<=63)){
      return true;
    }else{
        return false;
      }
    };

    const isRightBorder = (index) => {
      if ((index+1)%8 === 0){
        return true;
      }else{
      return false;
      }
    };

    const isLeftBorder = (index) => {
      if ((index)%8 === 0){
        return true;
      }else{
      return false;
      }
    };

  const convertArithmetic = (index, addSub, increment) =>{
    if(addSub === '+'){
      return index+increment;
    }else{
      return index-increment;
    }
  };

  const checkVerticalMovement = (index, currentPiece, direction) =>{
    while(isOnBoard(index+direction)){ 
      if(isOccupied(index+direction)){
        if(currentBoard[index+direction].pieceColor !== currentPiece.pieceColor){
          currentBoard[index+direction].color = 'yellow';
          break;
        }else{
          break;
        }
      }
      currentBoard[index+direction].color = 'yellow';
      index += direction;
    }
  }
  const checkHorizontalMovement = (index, currentPiece, direction) =>{
    while(direction < 0 ? !isLeftBorder(index) : !isRightBorder(index)){ 
      if(isOccupied(index+direction)){
        if(currentBoard[index+direction].pieceColor !== currentPiece.pieceColor){
          currentBoard[index+direction].color = 'yellow';
          break;
        }else{
          break;
        }
      }
      currentBoard[index+direction].color = 'yellow';
      index += direction;
    }
  }
  const checkDiagonalMovement = (index, currentPiece, direction) =>{
    while((direction === 7 || direction === -9 ? !isLeftBorder(index) : !isRightBorder(index)) && isOnBoard(index+direction)){ 
      if(isOccupied(index+direction)){
        if(currentBoard[index+direction].pieceColor !== currentPiece.pieceColor){
          currentBoard[index+direction].color = 'yellow';
          break;
        }else{
          break;
        }
      }
      currentBoard[index+direction].color = 'yellow';
      index += direction;
    }
  }

  const displayPossibleMoves = (index) =>{
    const currentPiece = currentBoard[index];//hold current piece for comparisons
    const copyIndex = index;

    if(currentPiece.pieceName === 'pawn'){
      if(currentPiece.firstTurn){//if it is the pawns first move
        currentBoard[convertArithmetic(index, playerTurn, 16)].color = 'yellow';//highlight 2 tiles ahead
        currentPiece.firstTurn = false;//change firstTurn
      }
      if(isOccupied(convertArithmetic(index, playerTurn, 7)) && (convertArithmetic(index, playerTurn, 7)%7) !== 1){//check left diagonal
        //only highlight if current piececolor !== clicked piececolor
        if(currentPiece.pieceColor !== currentBoard[convertArithmetic(index, playerTurn, 7)].pieceColor){
          currentBoard[convertArithmetic(index, playerTurn, 7)].color = 'yellow';
        }
      }
      if(isOccupied(convertArithmetic(index, playerTurn, 9))){//check right diagonal
        if(currentPiece.pieceColor !== currentBoard[convertArithmetic(index, playerTurn, 9)].pieceColor){
          currentBoard[convertArithmetic(index, playerTurn, 9)].color = 'yellow';
        }
      }
      if(!isOccupied(convertArithmetic(index, playerTurn, 8))){
        currentBoard[convertArithmetic(index, playerTurn, 8)].color = 'yellow';//always highlight 1 tile ahead, unless occupied
      }
      
      return;
    }

    if(currentPiece.pieceName === 'rook'){
      checkVerticalMovement(index, currentPiece, 8);
      checkVerticalMovement(index, currentPiece, -8);
      checkHorizontalMovement(index, currentPiece, 1);
      checkHorizontalMovement(index, currentPiece, -1);
      return;
    }

    if(currentPiece.pieceName === 'bishop'){
      checkDiagonalMovement(index, currentPiece, 9);
      checkDiagonalMovement(index, currentPiece, 7);
      checkDiagonalMovement(index, currentPiece, -9);
      checkDiagonalMovement(index, currentPiece, -7);
      return;
    }

    if(currentPiece.pieceName === 'queen'){
      checkVerticalMovement(index, currentPiece, 8);
      checkVerticalMovement(index, currentPiece, -8);
      checkHorizontalMovement(index, currentPiece, 1);
      checkHorizontalMovement(index, currentPiece, -1);
      checkDiagonalMovement(index, currentPiece, 9);
      checkDiagonalMovement(index, currentPiece, 7);    
      checkDiagonalMovement(index, currentPiece, -9);
      checkDiagonalMovement(index, currentPiece, -7);
      return;
    }

    if(currentPiece.pieceName === 'knight'){
      const moves = [index+6, index+10, index+15, index+17, index-6, index-10, index-15, index-17];//array of all possible moves for knight
      const possibleMoves = [];
      moves.forEach(move => {//if move is on board, push into new array
        if(isOnBoard(move)){
          possibleMoves.push(move);
        }
      });
      
      moves.length = 0;//clear old array
      possibleMoves.forEach(move => {//if piece is not occupird or is opposite color, push into array
        if(currentBoard[move].pieceColor !== currentPiece.pieceColor){
          moves.push(move);
        }
      });

      possibleMoves.length = 0;//clear old array
      moves.forEach(move => {//if satisfies column properties, push into array
        const startColumn = index%8;
        const endColumn = move%8;
        if(startColumn-endColumn <= 2 && startColumn-endColumn >= -2){
          possibleMoves.push(move);
        }
      });
    
      possibleMoves.forEach(move => {//change color of all positions remaining in array
        currentBoard[move].color = 'yellow';
      });
      return;
    }

    if(currentPiece.pieceName === 'king'){
      
    }

    
  };

  const handleFirstClick = (i) => {
    setPrevIndex(i); //store previous index for use in handleSecondClick
    setFirstClickedPiece(currentBoard[i]);//store clicked piece for use in handleSecondClick
    displayPossibleMoves(i);
    setFirstClick(!firstClick);
    return;
  };


  const handleSecondClick = (i) => {
    /* ANY UPDATES TO "currentBoard" WILL BE REACTIVELY DISPLAYED */
    const highlightedIndices = resetColors(currentBoard); //removes all highlights
    
    if(highlightedIndices.includes(i)){
      if(currentBoard[i].pieceName !== ''){
        
        if(firstClickedPiece.pieceColor === 'light'){
          const pushPiece = JSON.parse(JSON.stringify(currentBoard[i]));
          blackCapturedPieces.push(pushPiece);
          setBlackCapturedPieces(blackCapturedPieces);
        }else{
          const pushPiece = JSON.parse(JSON.stringify(currentBoard[i]));
          whiteCapturedPieces.push(pushPiece);
          setWhiteCapturedPieces(whiteCapturedPieces);
        }
      }
    currentBoard[i].pieceName = firstClickedPiece.pieceName;
    currentBoard[i].pieceColor = firstClickedPiece.pieceColor;
    currentBoard[i].firstTurn = firstClickedPiece.firstTurn;
    currentBoard[prevIndex].pieceName = '';
    currentBoard[prevIndex].pieceColor = '';
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
    return;
  };

  const handleCapturedClick = (i) =>{
    console.log(i);
    return;
  };

    

  return (
    <>
      <h1>Chess</h1>
      <Board squares={currentBoard} onClick={firstClick ? handleFirstClick : handleSecondClick} />
      <div>
      <label>White Fallen Soldiers</label>
      <FallenSoldiersTab soldiers={whiteCapturedPieces} color='wfslabel' onClick={handleCapturedClick}></FallenSoldiersTab>
      <label>Black Fallen Soldiers</label>
      <FallenSoldiersTab soldiers={blackCapturedPieces} color='bfslabel' onClick={handleCapturedClick}></FallenSoldiersTab>
      <label className={playerTurn === '+' ? 'whitelabel' : 'blacklabel'}>It is {playerTurn === '+' ? 'white' : 'black'}'s turn</label>
      </div>
    </>
  );
};

export default Game;