"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

const gifts = [
  "A kiss on the forehead",
  "Movie night together",
  "Breakfast in bed",
  "A long walk holding hands",
  "Your favorite dinner",
  "A day trip somewhere beautiful",
  "A surprise picnic",
  "Cuddles all day",
  "A love letter",
  "A sweet dance together",
]

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [selectedGift] = useState(gifts[Math.floor(Math.random() * gifts.length)])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw the scratch overlay
    ctx.fillStyle = "#DC2626"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#F59E0B"
    ctx.font = "24px bold"
    ctx.textAlign = "center"
    ctx.fillText("SCRATCH ME!", canvas.width / 2, canvas.height / 2 - 10)
    ctx.font = "16px"
    ctx.fillText("to reveal your gift", canvas.width / 2, canvas.height / 2 + 30)
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching || revealed) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.clearRect(x - 20, y - 20, 40, 40)

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    let cleared = 0
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) cleared++
    }

    if (cleared > data.length * 0.3) {
      setRevealed(true)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700">Scratch Card Challenge</h2>

      <div className="relative inline-block mb-8 max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 md:p-12 border-4 border-dashed border-red-300 min-h-48 flex items-center justify-center">
          {revealed ? (
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <p className="text-2xl md:text-3xl font-bold text-red-700 mb-4">You Won!</p>
              <p className="text-lg md:text-xl text-red-600 font-semibold">{selectedGift}</p>
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              width={300}
              height={200}
              onMouseDown={() => setIsScratching(true)}
              onMouseUp={() => setIsScratching(false)}
              onMouseLeave={() => setIsScratching(false)}
              onMouseMove={scratch}
              onTouchStart={() => setIsScratching(true)}
              onTouchEnd={() => setIsScratching(false)}
              onTouchMove={scratch}
              className="cursor-pointer rounded-lg w-full max-w-xs"
            />
          )}
        </div>
      </div>

      {!revealed && (
        <p className="text-red-600 text-base md:text-lg font-semibold">Use your mouse or finger to scratch the card!</p>
      )}

      {revealed && (
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
        >
          Play Again
        </button>
      )}
    </div>
  )
}
