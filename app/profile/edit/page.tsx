'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { mockProfiles } from '@/lib/mockData'

export default function EditProfilePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const currentProfile = mockProfiles[0]

  const [formData, setFormData] = useState({
    username: currentProfile.username,
    bio: currentProfile.bio,
    breed: currentProfile.breed || '',
    location: currentProfile.location || '',
  })
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState(currentProfile.profile_picture)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('demo_user')
    if (!user) {
      router.push('/login')
    } else {
      setMounted(true)
    }
  }, [router])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfilePicture(file)
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Demo: Simulate save
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push('/profile')
    } catch (error) {
      alert('Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Edit Profile</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-earth-200 flex-shrink-0">
                <Image
                  src={previewUrl}
                  alt="Profile picture preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="profile-picture"
                  className="px-4 py-2 bg-orange text-white rounded-lg font-medium hover:bg-orange/90 transition-all cursor-pointer inline-block focus-within:ring-2 focus-within:ring-orange focus-within:ring-offset-2"
                >
                  Change Photo
                  <input
                    id="profile-picture"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                    aria-label="Upload new profile picture"
                  />
                </label>
                <p className="text-xs text-forest-500 mt-2">
                  Recommended: Square image, at least 200x200px
                </p>
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-forest-800 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="your_pet_name"
                required
                aria-required="true"
              />
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-forest-800 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                maxLength={150}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all resize-none text-forest-900"
                placeholder="Tell us about yourself..."
                aria-label="Bio"
              />
              <p className="text-xs text-forest-500 mt-1 text-right">
                {formData.bio.length}/150 characters
              </p>
            </div>

            {/* Breed */}
            <div>
              <label htmlFor="breed" className="block text-sm font-medium text-forest-800 mb-2">
                Breed
              </label>
              <input
                id="breed"
                type="text"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="e.g., Golden Retriever, Tabby Cat"
                aria-label="Breed"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-forest-800 mb-2">
                Location
              </label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="e.g., San Francisco, CA"
                aria-label="Location"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => router.push('/profile')}
                className="flex-1 px-6 py-3 border border-earth-300 text-forest-800 rounded-lg font-semibold hover:bg-earth-50 transition-all focus:outline-none focus:ring-2 focus:ring-orange"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>

          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6 space-y-4">
            <h3 className="text-lg font-bold text-forest-900">Account Settings</h3>

            <button className="w-full text-left px-4 py-3 border border-earth-300 rounded-lg hover:bg-earth-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange">
              <p className="font-medium text-forest-800">Change Password</p>
              <p className="text-sm text-forest-600">Update your password</p>
            </button>

            <button className="w-full text-left px-4 py-3 border border-earth-300 rounded-lg hover:bg-earth-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange">
              <p className="font-medium text-forest-800">Privacy Settings</p>
              <p className="text-sm text-forest-600">Manage who can see your posts</p>
            </button>

            <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
              <p className="font-medium">Delete Account</p>
              <p className="text-sm">Permanently delete your account and data</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
