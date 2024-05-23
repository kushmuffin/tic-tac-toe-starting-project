import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNER_COMBINATIONS } from "./winning-combinations.js"

//先一個乾淨的板
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

//切換玩家
function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameturns] = useState([]);
    const [hasWinner, setHasWinner] = useState(false);
    // const [activePlayer, setActivePlayer] = useState('X');

    //導入目前玩家
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    for (const combinations of WINNER_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
        const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
        const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

        if (firstSquareSymbol) { }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
        setGameturns((prevTurns) => {

            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
