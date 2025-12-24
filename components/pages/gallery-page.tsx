"use client"

import { useState } from "react"
import ImageGallery from "@/components/image-gallery"
import UploadSection from "@/components/upload-section"

interface GalleryPageProps {
  images: string[]
  onImagesUpload: (images: string[]) => void
}

export default function GalleryPage({ images, onImagesUpload }: GalleryPageProps) {
  const [deletedIndices, setDeletedIndices] = useState<Set<number>>(new Set())

  const handleDeleteImage = (index: number) => {
    const newSet = new Set(deletedIndices)
    newSet.add(index)
    setDeletedIndices(newSet)
  }

  const visibleImages = images.filter((_, index) => !deletedIndices.has(index))

  return (
    <div className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
          Our Beautiful Moments
        </h1>
        <p className="text-center text-red-600 mb-12 text-base md:text-lg">
          Every photo is a memory of our love together
        </p>

        <UploadSection onImagesUpload={onImagesUpload} />

        {visibleImages.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-700">Your Photos ({visibleImages.length})</h2>
            <ImageGallery images={visibleImages} onDelete={handleDeleteImage} />
          </div>
        )}

        {images.length === 0 && (
          <div className="text-center py-16">
            <p className="text-red-600 text-lg">No photos yet. Upload your first memory together!</p>
          </div>
        )}
      </div>
    </div>
  )
}
