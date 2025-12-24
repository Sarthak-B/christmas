"use client"

import { useState } from "react"
import MemoryGame from "@/components/games/memory-game"
import QuizGame from "@/components/games/quiz-game"
import LoveConfirmation from "@/components/games/love-confirmation"

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<"love" | "memory" | "quiz" | null>(null)

  return (
    <div className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          Christmas Games
        </h1>
        <p className="text-center text-red-600 mb-12 text-base md:text-lg">Play fun games and win sweet surprises</p>

        {!activeGame ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <button
              onClick={() => setActiveGame("love")}
              className="group relative h-48 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                <div className="text-5xl mb-3">💕</div>
                <h3 className="text-2xl font-bold mb-2">Do You Love Me?</h3>
                <p className="text-sm">Answer honestly!</p>
              </div>
            </button>

            {/* Memory Game */}
            <button
              onClick={() => setActiveGame("memory")}
              className="group relative h-48 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                <div className="text-5xl mb-3">🧠</div>
                <h3 className="text-2xl font-bold mb-2">Memory Game</h3>
                <p className="text-sm">Match the pairs</p>
              </div>
            </button>

            {/* Quiz Game */}
            <button
              onClick={() => setActiveGame("quiz")}
              className="group relative h-48 bg-gradient-to-br from-rose-400 to-red-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                <div className="text-5xl mb-3">❓</div>
                <h3 className="text-2xl font-bold mb-2">Love Quiz</h3>
                <p className="text-sm">Test your knowledge</p>
              </div>
            </button>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <button
              onClick={() => setActiveGame(null)}
              className="mb-6 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all"
            >
              ← Back to Games
            </button>

            {activeGame === "love" && <LoveConfirmation />}
            {activeGame === "memory" && <MemoryGame />}
            {activeGame === "quiz" && <QuizGame />}
          </div>
        )}
      </div>
    </div>
  )
}
