"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import WishCard from "@/components/wish-card"

interface WishesPageProps {
  wishes: string[]
  onAddWish: (wish: string) => void
}

export default function WishesPage({ wishes, onAddWish }: WishesPageProps) {
  const [newWish, setNewWish] = useState("")

  const handleAddWish = () => {
    if (newWish.trim()) {
      onAddWish(newWish)
      setNewWish("")
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          Christmas Wishes for You
        </h1>
        <p className="text-center text-red-600 mb-12 text-base md:text-lg">
          All my love and blessings on this special day
        </p>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {wishes.map((wish, index) => (
            <WishCard key={index} wish={wish} index={index} />
          ))}
        </div>

        {/* Add New Wish */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-red-100 max-w-2xl mx-auto">
          <label className="block text-lg font-semibold mb-4 text-red-900">Add Your Own Wish</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddWish()}
              placeholder="Write a special wish..."
              className="flex-1 px-4 py-3 rounded-lg border-2 border-red-200 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm md:text-base"
            />
            <button
              onClick={handleAddWish}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Heart size={20} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
