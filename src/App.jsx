/**
 *  -> Game
 *    -> Board
 *      -> Square
 *    -> History
 *
 */

import Game from "./Game/Game";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-red-200 to-orange-300">
        <Header />
        <Game />
      </div>
    </>
  );
}

export default App;
