export default function GameOver({ winner, setRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won~!</p>}
            {!winner && <p>Draw, you wanna try again?</p>}
            <p>
                <button onClick={setRestart}>Rematch!</button>
            </p>
        </div>
    )
}