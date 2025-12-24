"use client"

import { Heart } from "lucide-react"

export default function WishCard({
  wish,
  index,
}: {
  wish: string
  index: number
}) {
  const colors = ["from-red-400 to-pink-400", "from-pink-400 to-rose-400", "from-red-500 to-rose-500"]
  const bgColors = ["bg-red-50", "bg-pink-50", "bg-rose-50"]

  const color = colors[index % colors.length]
  const bgColor = bgColors[index % bgColors.length]

  return (
    <div
      className={`group relative ${bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-100 hover:border-red-300 overflow-hidden`}
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative z-10">
        <Heart
          className="text-red-500 fill-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
          size={32}
        />
        <p className="text-lg font-semibold text-red-900 leading-relaxed">{wish}</p>
      </div>

      {/* Sparkle effect on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-2xl">✨</span>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
