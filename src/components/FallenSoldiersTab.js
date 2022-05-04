
import Square from "./Square";

const FallenSoldiersTab = ({ color, soldiers}) => (
    <div className={color}>
        {soldiers.map((square, i) => (
            <Square key={i} square={square}  />
        ))}
    </div>
);

export default FallenSoldiersTab;