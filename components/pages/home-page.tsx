"use client"

import { Heart, Sparkles } from "lucide-react"

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite linear`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            <Sparkles className="text-red-200" size={Math.random() * 20 + 10} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main title */}
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <Sparkles className="text-red-500 animate-spin" size={40} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-600">
                Merry Christmas Ms. Simran
              </h1>
              <Sparkles className="text-red-500 animate-spin" size={40} />
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-red-700 font-semibold mb-6 animate-bounce">My Dearest Love</p>

          <p className="text-base md:text-lg text-red-600 max-w-2xl mx-auto leading-relaxed mb-8">
            On this magical Christmas season, I want to celebrate the most wonderful person in my life. This is a
            collection of wishes, love, cherished moments, and surprises just for you.
          </p>

          {/* Animated hearts */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-red-500 fill-red-500 animate-bounce"
                size={32}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Quote box */}
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6 md:p-10 border-2 border-red-200 shadow-lg backdrop-blur-sm mb-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl text-red-900 italic font-semibold">
              "You are my greatest gift, my reason to celebrate, my forever Christmas wish."
            </p>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            <button
              onClick={() => setCurrentPage("gallery")}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              📸 Gallery
            </button>
            <button
              onClick={() => setCurrentPage("wishes")}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              ✨ Wishes
            </button>
            <button
              onClick={() => setCurrentPage("games")}
              className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              🎮 Games
            </button>
            <button
              onClick={() => setCurrentPage("love")}
              className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base col-span-2 md:col-span-1"
            >
              💕 Love
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
