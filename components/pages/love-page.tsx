"use client"

import { Heart, Sparkles } from "lucide-react"

export default function LovePage() {
  const reasons = [
    "Your beautiful smile brightens my darkest days",
    "The way you laugh is music to my ears",
    "Your kindness inspires me to be better",
    "Every moment with you feels like a dream",
    "You make me believe in true love",
    "Your warmth melts my heart",
    "You're my greatest adventure",
    "With you, I found my home",
    "You're worth every moment of my life",
    "Forever isn't long enough with you",
  ]

  return (
    <div className="min-h-screen px-4 py-8 md:py-16 relative overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s infinite linear`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          >
            <Heart className="text-red-200 fill-red-200 animate-pulse" size={Math.random() * 30 + 15} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          Why I Love You
        </h1>
        <p className="text-center text-red-600 mb-12 text-base md:text-lg">A thousand reasons and counting...</p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-red-100 hover:border-red-300"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <Heart
                  className="text-red-500 fill-red-500 flex-shrink-0 group-hover:scale-125 transition-transform mt-1"
                  size={24}
                />
                <p className="text-red-900 font-semibold text-sm md:text-base leading-relaxed">{reason}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-200 text-center max-w-3xl mx-auto">
          <Sparkles className="text-red-500 mx-auto mb-4 animate-spin" size={40} />
          <h2 className="text-2xl md:text-4xl font-bold text-red-900 mb-4">I Love You More Than Words Can Say</h2>
          <p className="text-lg text-red-800 mb-6 leading-relaxed">
            You are my greatest blessing, my sweetest dream, and my forever person. Thank you for being the amazing
            woman that you are. I love you today, I loved you yesterday, and I will love you tomorrow and always.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-red-500 fill-red-500 animate-bounce"
                size={32}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-40px) translateX(15px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
