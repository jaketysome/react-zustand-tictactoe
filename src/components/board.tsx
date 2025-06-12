import "../App.css";
import Square from "./square";

function Board() {
  return (
    <div className='board'>
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
      <Square value='X' onSquareClick={() => {}} />
    </div>
  );
}

export default Board;
