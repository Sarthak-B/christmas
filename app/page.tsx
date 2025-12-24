"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomePage from "@/components/pages/home-page"
import GalleryPage from "@/components/pages/gallery-page"
import GamesPage from "@/components/pages/games-page"
import WishesPage from "@/components/pages/wishes-page"
import LovePage from "@/components/pages/love-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  
  // UPDATED: Images initialized with your permanent files
  // Note: These look for files in your 'public' folder
  const [images, setImages] = useState<string[]>([
    "/pic1.png",
    "/pic2.png"
  ])

  const [wishes, setWishes] = useState([
    "I love every moment with you",
    "You make my heart complete",
    "Forever grateful for your love",
    "You're my greatest gift",
    "Every day with you is magical",
  ])

  const handleImagesUpload = (newImages: string[]) => {
    // This allows temporary uploads (will disappear on refresh)
    setImages([...images, ...newImages])
  }

  const addWish = (wish: string) => {
    if (wish.trim()) {
      setWishes([...wishes, wish])
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "gallery" && <GalleryPage images={images} onImagesUpload={handleImagesUpload} />}
      {currentPage === "games" && <GamesPage />}
      {currentPage === "wishes" && <WishesPage wishes={wishes} onAddWish={addWish} />}
      {currentPage === "love" && <LovePage />}
    </main>
  )
}