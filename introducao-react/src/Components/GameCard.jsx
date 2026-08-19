import './GameCard.css'

function GameCard({ name, genre, children }) {
  return (
    <div className="game-card">
      <h2>{name}</h2>
      <p>Gênero: {genre}</p>

      <div className="game-description">
        {children}
      </div>
    </div>
  )
}

export default GameCard