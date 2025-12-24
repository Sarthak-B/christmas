"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"

export default function UploadSection({
  onImagesUpload,
}: {
  onImagesUpload: (images: string[]) => void
}) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string[]>([])

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    processFiles(e.dataTransfer.files)
  }

  const processFiles = (files: FileList) => {
    const newImages: string[] = []
    let loadedCount = 0

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string)
            loadedCount++
            if (loadedCount === Array.from(files).filter((f) => f.type.startsWith("image/")).length) {
              setPreview([...preview, ...newImages])
              onImagesUpload(newImages)
            }
          }
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files)
    }
  }

  const removePreview = (index: number) => {
    setPreview(preview.filter((_, i) => i !== index))
  }

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-3 border-dashed rounded-3xl p-8 md:p-12 text-center transition-all duration-300 cursor-pointer ${
            isDragging ? "border-red-500 bg-red-50/50 scale-105" : "border-red-300 bg-white/50 hover:bg-red-50/30"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <Upload className="mx-auto mb-4 text-red-500" size={48} />
          <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-2">Upload Your Beautiful Photos</h3>
          <p className="text-red-600 mb-4 text-sm md:text-base">
            Drag and drop your images here or click to select files
          </p>
          <p className="text-xs md:text-sm text-red-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        {/* Preview of uploaded images */}
        {preview.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-red-700 mb-4">Preview ({preview.length})</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {preview.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Preview ${index}`}
                    className="w-full h-24 md:h-32 object-cover rounded-xl shadow-lg"
                  />
                  <button
                    onClick={() => removePreview(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
