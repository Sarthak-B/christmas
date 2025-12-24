"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pages = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "gallery", label: "Gallery", icon: "📸" },
    { id: "games", label: "Games", icon: "🎮" },
    { id: "wishes", label: "Wishes", icon: "✨" },
    { id: "love", label: "Love", icon: "❤️" },
  ]

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto w-full px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500 fill-red-500" size={28} />
            <span className="text-xl font-bold text-red-600">Christmas Love</span>
          </div>

          <div className="flex gap-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === page.id
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white scale-105"
                    : "text-red-700 hover:bg-red-100"
                }`}
              >
                {page.icon} {page.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500 fill-red-500" size={24} />
            <span className="font-bold text-red-600 text-sm">Christmas</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-red-600 hover:bg-red-100 p-2 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-white border-t-2 border-red-200 px-4 py-3 flex flex-col gap-2">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                  currentPage === page.id
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                    : "text-red-700 hover:bg-red-100"
                }`}
              >
                {page.icon} {page.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Add spacing for fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  )
}
