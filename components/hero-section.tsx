"use client"

import { Heart, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        {/* Animated title with sparkle effect */}
        <div className="mb-6 inline-block animate-pulse">
          <Sparkles className="inline text-red-500 mr-3" size={40} />
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-600 inline-block mb-2">
            Merry Christmas
          </h1>
          <Sparkles className="inline text-red-500 ml-3" size={40} />
        </div>

        <p className="text-2xl md:text-3xl text-red-700 font-semibold mb-6 animate-fade-in">My Dearest Love</p>

        <p className="text-lg text-red-600 max-w-2xl mx-auto leading-relaxed mb-8">
          On this magical Christmas season, I want to celebrate the most wonderful person in my life. This is a
          collection of wishes, love, and cherished moments we've shared together.
        </p>

        <div className="flex justify-center gap-3 mb-8 animate-bounce">
          <Heart className="text-red-500 fill-red-500" size={32} />
          <Heart className="text-pink-500 fill-pink-500" size={32} />
          <Heart className="text-red-500 fill-red-500" size={32} />
        </div>

        <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8 border-2 border-red-200 shadow-lg backdrop-blur-sm">
          <p className="text-xl text-red-900 italic font-semibold">
            "You are my greatest gift, my reason to celebrate, my forever Christmas wish."
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-fade-in) {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}
