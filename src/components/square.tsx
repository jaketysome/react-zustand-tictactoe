import "../App.css";
import type { SquareValue } from "../types/square";

function Square({
  value,
  onSquareClick,
}: {
  value: SquareValue;
  onSquareClick: () => void;
}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
