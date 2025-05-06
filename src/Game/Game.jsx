import React, { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [XorO, setXorO] = useState("X");
  const [curretnMove, setCurrentMove] = useState(0);

  const curretntSquare = history[curretnMove];

  const updateSquare = (OnPlay) => {
    const newHistory = [...history.slice(0, curretnMove + 1), OnPlay];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1); // Set the current move to the last move in history
  };

  const handleXorO = (XoorrO) => {
    setXorO(XoorrO === "X" ? "O" : "X"); // Toggle between X and O
  };

  // Jump to a specific move
  const jumpTo = (move) => {
    setCurrentMove(move);

    // Determine player based on even/odd move number
    setXorO(move % 2 === 0 ? "X" : "O");
  };

  // Restart the game
  const handleRestart = () => {
    setHistory([Array(9).fill(null)]); // Reset history to initial state
    setCurrentMove(0); // Reset current move to 0
    setXorO("X"); // Reset player to X
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center ">
      <div className="flex justify-center items-center gap-4 sm:gap-8">
        <div>
          <div>
            <Board
              square={curretntSquare}
              handleXorO={handleXorO}
              XorO={XorO}
              updateSquare={updateSquare}
              curretnMove={curretnMove}
            />
          </div>

          <div className="flex justify-center items-center gap-2 mt-5">
            <button
              className="rounded-2xl border-2 py-2 px-4 font-bold text-2xl bg-gray-100 hover:bg-gray-300"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-center m-4 font-bold">History</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 sm:gap-2">
              {history.map((_, move) => (
                <button
                  key={move}
                  onClick={() => jumpTo(move)}
                  className={` py-1 border rounded-lg ${
                    move === curretnMove ? "bg-blue-300" : "bg-white"
                  }`}
                >
                  {move === 0 ? "Go to game start" : `Go to move #${move}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
