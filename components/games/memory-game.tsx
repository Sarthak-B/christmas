"use client"

import { useState, useEffect } from "react"

const emojis = ["❤️", "💕", "🌹", "💐", "✨", "🎁", "🕯️", "💍", "👑", "🎄"]

interface Card {
  id: number
  emoji: string
  flipped: boolean
  matched: boolean
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5)
    const newCards = shuffled.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }))
    setCards(newCards)
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  const handleCardClick = (id: number) => {
    if (flipped.includes(id) || matched.includes(id)) return
    if (flipped.length === 2) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second])
        setFlipped([])
      } else {
        setTimeout(() => setFlipped([]), 600)
      }
    }
  }

  const isGameWon = matched.length === cards.length && cards.length > 0

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">Memory Game</h2>

      <div className="flex justify-between items-center mb-8 text-lg font-semibold text-red-600">
        <span>Moves: {moves}</span>
        <span>
          Matched: {matched.length / 2} / {emojis.length}
        </span>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mb-8 max-w-2xl mx-auto">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-xl text-3xl md:text-4xl font-bold transition-all duration-300 transform ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? "bg-gradient-to-br from-pink-300 to-red-300 scale-100"
                : "bg-gradient-to-br from-red-500 to-pink-500 hover:scale-105 active:scale-95"
            } shadow-lg hover:shadow-xl`}
          >
            {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : "?"}
          </button>
        ))}
      </div>

      {isGameWon && (
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border-4 border-yellow-400 mb-8">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-2xl md:text-3xl font-bold text-yellow-900 mb-2">You Won!</p>
          <p className="text-lg text-yellow-800">Completed in {moves} moves!</p>
        </div>
      )}

      <button
        onClick={initializeGame}
        className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
      >
        {isGameWon ? "Play Again" : "Reset Game"}
      </button>
    </div>
  )
}
