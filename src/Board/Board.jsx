import Square from "./Square";

export default function Board({
  square,
  updateSquare,
  XorO,
  handleXorO,
  curretnMove,
}) {
  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    square.every((i) => i == null)
      ? (status = "Start the game")
      : curretnMove === 9
      ? (status = "Its a draw ! ")
      : (status = `Next player: ${XorO}`);
  }

  const handleClick = (i) => {
    if (winner || square[i]) {
      return;
    }

    const newSquare = square.slice();
    newSquare[i] = XorO;
    handleXorO(XorO);
    updateSquare(newSquare);

    // console.log(square);
    // console.log(newSquare);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="font-semibold m-2">{status}</div>
        <div className="flex">
          <Square
            value={square[0]}
            squareHandleClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={square[1]}
            squareHandleClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={square[2]}
            squareHandleClick={() => {
              handleClick(2);
            }}
          />
        </div>

        <div className="flex">
          <Square
            value={square[3]}
            squareHandleClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={square[4]}
            squareHandleClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={square[5]}
            squareHandleClick={() => {
              handleClick(5);
            }}
          />
        </div>

        <div className="flex">
          <Square
            value={square[6]}
            squareHandleClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={square[7]}
            squareHandleClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={square[8]}
            squareHandleClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
