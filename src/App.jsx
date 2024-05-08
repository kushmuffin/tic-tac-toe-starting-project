import Player from "./components/player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        mytest Game Board
      </div>
      Game Log
    </main>
  );
}

export default App;
