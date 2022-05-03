const Piece = ({ piece, onClick }) => {
        console.log(piece.pieceColor);
        return (
            <button className={piece.pieceColor}  onClick={onClick}>
                {piece.pieceName}
            </button>
        )
    
}

export default Piece;