
const FallenSoldier = ({ square, onClick }) => {
  
    return (
        <button className='fallen'  piece={square.pieceName} piececolor={square.pieceColor} onClick={onClick}>
            
        </button>
    )

}

export default FallenSoldier;