
const Square = ({ square, onClick }) => {
  
        return (
            <button className={square.color} src={square.pieceColor} onClick={onClick}>
                {square.pieceName}
            </button>
        )
    
}

export default Square;