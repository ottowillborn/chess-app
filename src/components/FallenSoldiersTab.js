
import Square from "./Square";

const FallenSoldiersTab = ({ soldiers, color, onClick}) => (
    <div className={color}>
        {soldiers.map((square, i) => (
            <Square key={i} square={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default FallenSoldiersTab;