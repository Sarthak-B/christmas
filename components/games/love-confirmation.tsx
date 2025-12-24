"use client"
import { useState } from "react"

const stages = [
  {
    question: "Do you love me?",
    noText: "No",
    yesText: "Yes",
  },
  {
    question: "Are you sure?",
    noText: "No",
    yesText: "Yes!",
  },
  {
    question: "Are you REALLY sure?",
    noText: "Nope",
    yesText: "Yes!!",
  },
  {
    question: "Think about it one more time...",
    noText: "Still no",
    yesText: "YES!!!",
  },
  {
    question: "Last chance! Do you love me?",
    noText: "No way",
    yesText: "ABSOLUTELY YES!",
  },
]

export default function LoveConfirmation() {
  const [stage, setStage] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [moveCount, setMoveCount] = useState(0)

  const handleNo = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1)
    }
  }

  const handleYes = () => {
    setAnswered(true)
  }

  const handleMouseMove = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const buttonCenterX = rect.left + rect.width / 2
    const buttonCenterY = rect.top + rect.height / 2

    const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY)
    const maxDistance = 100

    if (distance < maxDistance) {
      const angle = Math.atan2(buttonCenterY - e.clientY, buttonCenterX - e.clientX)
      // Increase move distance with each attempt
      const moveDistance = (maxDistance - distance) * (1 + moveCount * 0.3)
      const newX = Math.cos(angle) * moveDistance
      const newY = Math.sin(angle) * moveDistance

      setNoButtonPos({ x: newX, y: newY })
      setMoveCount(moveCount + 1)
    }
  }

  const handleMouseLeave = () => {
    // Don't reset position - keep it wherever it moved
  }

  if (answered) {
    return (
      <div className="text-center py-12 px-4">
        <div className="mb-6 animate-bounce">
          <div className="text-7xl">💕</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">I KNEW IT!</h2>
        <p className="text-lg md:text-xl text-red-600 mb-8 max-w-md mx-auto">
          I love you so much! You just made me the happiest person on Christmas!
        </p>

        {/* Confetti animation */}
        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          {["🎉", "🎄", "❤️", "✨", "🎁"].map((emoji, i) => (
            <div
              key={i}
              className="text-4xl animate-pulse"
              style={{
                animation: `bounce 2s infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setAnswered(false)
            setStage(0)
            setNoButtonPos({ x: 0, y: 0 })
            setMoveCount(0)
          }}
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
        >
          Ask Me Again
        </button>
      </div>
    )
  }

  return (
    <div className="text-center py-12 px-4 relative min-h-screen">
      <div className="mb-8">
        <div className="text-6xl mb-4 animate-bounce">💑</div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">{stages[stage].question}</h2>
        <p className="text-red-600 text-sm md:text-base">
          {stage === 0 && "Answer honestly! 😊"}
          {stage === 1 && "Really think about it..."}
          {stage === 2 && "Come on, you know the answer!"}
          {stage === 3 && "Don't be shy now..."}
          {stage === 4 && "This is your final answer!"}
        </p>
      </div>

      <div className="flex gap-4 justify-center flex-wrap mb-8 max-w-md mx-auto relative h-20 md:h-16">
        <button
          onClick={handleNo}
          onMouseMove={handleMouseMove}
          style={{
            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
            transition: "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "fixed",
          }}
          className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-semibold cursor-pointer whitespace-nowrap"
        >
          {stages[stage].noText}
        </button>

        <button
          onClick={handleYes}
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all hover:scale-110 active:scale-95"
        >
          {stages[stage].yesText}
        </button>
      </div>

      {stage > 0 && (
        <p className="text-pink-600 text-sm md:text-base animate-pulse">
          {moveCount > 10 ? "Where did that button go? 😄" : "You can't catch the No button... 😉"}
        </p>
      )}
    </div>
  )
}
