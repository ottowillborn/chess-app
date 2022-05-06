

const Square = ({ square, onClick }) => {
  
        return (
            <button className={square.color}  piece={square.pieceName} piececolor={square.pieceColor} onClick={onClick}>
                
            </button>
        )
    
}

export default Square;