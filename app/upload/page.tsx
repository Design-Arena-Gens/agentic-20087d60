'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

export default function UploadPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [caption, setCaption] = useState('')
  const [tags, setTags] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('demo_user')
    if (!user) {
      router.push('/login')
    } else {
      setMounted(true)
    }
  }, [router])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.mov', '.avi', '.webm'],
    },
    maxFiles: 1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)

    try {
      // Demo: Simulate upload
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('/feed')
    } catch (error) {
      alert('Failed to upload post')
    } finally {
      setUploading(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    setPreview(null)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Create New Post</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload Area */}
            {!preview ? (
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange ${
                  isDragActive
                    ? 'border-orange bg-orange/10'
                    : 'border-earth-300 bg-white hover:border-orange hover:bg-earth-50'
                }`}
                role="button"
                tabIndex={0}
                aria-label="Upload photo or video"
              >
                <input {...getInputProps()} aria-label="File upload input" />
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-forest-900">
                      {isDragActive ? 'Drop your file here' : 'Drag and drop your photo or video'}
                    </p>
                    <p className="text-sm text-forest-600 mt-2">or click to browse</p>
                    <p className="text-xs text-forest-500 mt-2">
                      Supports: JPEG, PNG, GIF, MP4, MOV (Max 50MB)
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative aspect-square bg-earth-100">
                  {file?.type.startsWith('video/') ? (
                    <video
                      src={preview}
                      controls
                      className="w-full h-full object-cover"
                      aria-label="Video preview"
                    />
                  ) : (
                    <Image
                      src={preview}
                      alt="Upload preview"
                      fill
                      className="object-cover"
                    />
                  )}
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute top-4 right-4 w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Remove file"
                  >
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Caption */}
            <div>
              <label htmlFor="caption" className="block text-sm font-medium text-forest-800 mb-2">
                Caption
              </label>
              <textarea
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all resize-none text-forest-900"
                placeholder="Write a caption for your post..."
                aria-label="Post caption"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-forest-800 mb-2">
                Tag Other Animals (optional)
              </label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="@username1, @username2"
                aria-label="Tag other animals"
              />
              <p className="text-xs text-forest-500 mt-1">
                Separate multiple tags with commas
              </p>
            </div>

            {/* Compression Info */}
            {file && (
              <div className="bg-earth-50 border border-earth-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-forest-800">File Information</p>
                    <p className="text-xs text-forest-600 mt-1">
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <p className="text-xs text-forest-600 mt-1">
                      Your file will be automatically optimized for faster loading
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => router.push('/feed')}
                className="flex-1 px-6 py-3 border border-earth-300 text-forest-800 rounded-lg font-semibold hover:bg-earth-50 transition-all focus:outline-none focus:ring-2 focus:ring-orange"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!file || uploading}
                className="flex-1 px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                {uploading ? 'Posting...' : 'Share Post'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
