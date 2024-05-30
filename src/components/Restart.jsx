export default function RestartGame({ restartGame }) {
  return (
    <div>
      <button className="rematch" onClick={restartGame}>Let's Rematch</button>
    </div>
  )
}