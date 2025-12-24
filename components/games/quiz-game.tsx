"use client"

import { Questrial } from "next/font/google"
import { useState } from "react"

const questions = [
  {
    question: "What makes the relationship last?",
    options: ["Efforts", "Luxury", "Looks", "Luck"],
    correct: 0,
  },
  {
    question: "How do I feel about you?",
    options: ["A lot", "More than a lot", "Unconditionally", "All of the above"],
    correct: 3,
  },
  {
    question: "You make me feel...",
    options: ["Happy", "Lucky", "Complete", "All of the above"],
    correct: 3,
  },
  {
    question: "My love is...",
    options: ["Real", "Strong", "Eternal", "All of the above"],
    correct: 3,
  },
  {
    question: "What's the meaning of 'love'",
    options: ["Attraction", "Habit", "Dependency", "Commitment"],
    correct: 3,
  },
  {
    question: "What is my fav color?",
    options: ["Black", "Blue", "Yellow", "Purple"],
    correct: 0,
  },
  {
    question: "Do you think I'm the one for you?",
    options: ["yes", "no"],
    correct: 0,
  }
]

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const next = currentQuestion + 1
    if (next < questions.length) {
      setCurrentQuestion(next)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="text-center py-8 max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-700">How Well Do You Know Us?</h2>

      {showScore ? (
        <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8 md:p-12 border-4 border-red-300 mb-8">
          <div className="text-5xl mb-4">💝</div>
          <p className="text-2xl md:text-3xl font-bold text-red-900 mb-4">Quiz Complete!</p>
          <p className="text-xl md:text-2xl text-red-700 font-semibold mb-6">
            You scored {score} out of {questions.length}
          </p>
          {score === questions.length && (
            <p className="text-lg text-red-600 mb-4">Perfect! You know us best! I love you so much! ❤️</p>
          )}
          {score >= questions.length - 1 && score < questions.length && (
            <p className="text-lg text-red-600 mb-4">Amazing! You know me so well! 💕</p>
          )}
          {score < questions.length - 1 && (
            <p className="text-lg text-red-600 mb-4">Great effort! Let's make more memories together! 🎄</p>
          )}
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <p className="text-red-600 font-semibold mb-4">
              Question {currentQuestion + 1}/{questions.length}
            </p>
            <div className="w-full bg-red-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-8">{questions[currentQuestion].question}</h3>

          <div className="grid gap-3 md:gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index === questions[currentQuestion].correct)}
                className="w-full bg-white/80 hover:bg-gradient-to-r hover:from-red-300 hover:to-pink-300 border-2 border-red-200 text-red-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-base md:text-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
