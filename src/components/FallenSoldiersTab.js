
import FallenSoldier from "./FallenSoldier";

const FallenSoldiersTab = ({ soldiers, color, onClick}) => (
    <div className={color}>
        {soldiers.map((square, i) => (
            <FallenSoldier key={i} square={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default FallenSoldiersTab;