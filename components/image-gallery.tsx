"use client"

import { useState } from "react"
import { X, Trash2 } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  onDelete?: (index: number) => void
}

export default function ImageGallery({ images, onDelete }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Memory ${index}`}
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedImage(image)
                  setSelectedIndex(index)
                }}
                className="text-white text-3xl hover:scale-125 transition-transform"
              >
                ❤️
              </button>
              {onDelete && (
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all"
                  title="Delete image"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full size"
              className="w-full rounded-2xl max-h-96 md:max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}
