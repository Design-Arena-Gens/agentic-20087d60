'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { mockProfiles, mockPosts } from '@/lib/mockData'

export default function ProfilePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts')

  // Demo: Using first profile as current user
  const currentProfile = mockProfiles[0]
  const userPosts = mockPosts.filter(post => post.user_id === currentProfile.id)

  useEffect(() => {
    const user = localStorage.getItem('demo_user')
    if (!user) {
      router.push('/login')
    } else {
      setMounted(true)
    }
  }, [router])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              {/* Profile Picture */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-earth-200 flex-shrink-0">
                <Image
                  src={currentProfile.profile_picture}
                  alt={`${currentProfile.username}'s profile picture`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h1 className="text-2xl font-bold text-forest-900 mb-2 sm:mb-0">
                    {currentProfile.username}
                  </h1>
                  <Link
                    href="/profile/edit"
                    className="px-6 py-2 border border-earth-300 text-forest-800 rounded-lg font-medium hover:bg-earth-50 transition-all focus:outline-none focus:ring-2 focus:ring-orange text-center"
                  >
                    Edit Profile
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex space-x-8 mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-forest-900">{userPosts.length}</p>
                    <p className="text-sm text-forest-600">posts</p>
                  </div>
                  <button className="text-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange rounded">
                    <p className="text-xl font-bold text-forest-900">1.2K</p>
                    <p className="text-sm text-forest-600">followers</p>
                  </button>
                  <button className="text-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange rounded">
                    <p className="text-xl font-bold text-forest-900">342</p>
                    <p className="text-sm text-forest-600">following</p>
                  </button>
                </div>

                {/* Bio */}
                <div className="space-y-1">
                  <p className="text-forest-800">{currentProfile.bio}</p>
                  {currentProfile.breed && (
                    <p className="text-sm text-forest-600">
                      <span className="font-medium">Breed:</span> {currentProfile.breed}
                    </p>
                  )}
                  {currentProfile.location && (
                    <p className="text-sm text-forest-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {currentProfile.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-earth-200 mb-6" role="tablist" aria-label="Profile sections">
            <div className="flex justify-center space-x-12">
              <button
                onClick={() => setActiveTab('posts')}
                className={`flex items-center space-x-2 py-3 border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange ${
                  activeTab === 'posts'
                    ? 'border-orange text-orange'
                    : 'border-transparent text-forest-600 hover:text-forest-800'
                }`}
                role="tab"
                aria-selected={activeTab === 'posts'}
                aria-controls="posts-panel"
              >
                <svg className="w-6 h-6" fill={activeTab === 'posts' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="font-medium">POSTS</span>
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`flex items-center space-x-2 py-3 border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange ${
                  activeTab === 'saved'
                    ? 'border-orange text-orange'
                    : 'border-transparent text-forest-600 hover:text-forest-800'
                }`}
                role="tab"
                aria-selected={activeTab === 'saved'}
                aria-controls="saved-panel"
              >
                <svg className="w-6 h-6" fill={activeTab === 'saved' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="font-medium">SAVED</span>
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div id="posts-panel" role="tabpanel" aria-labelledby="posts-tab">
            {activeTab === 'posts' && (
              <div className="grid grid-cols-3 gap-1 sm:gap-4">
                {userPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative aspect-square bg-earth-100 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={post.media_url}
                      alt={post.caption}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex items-center space-x-6 text-white">
                        <div className="flex items-center space-x-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="font-semibold">{post.likes_count}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="font-semibold">{post.comments_count}</span>
                        </div>
                      </div>
                    </div>
                    {post.media_type === 'video' && (
                      <div className="absolute top-2 right-2">
                        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3l6 3-6 3V9z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Saved Posts */}
          <div id="saved-panel" role="tabpanel" aria-labelledby="saved-tab">
            {activeTab === 'saved' && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-forest-800 mb-2">No Saved Posts</h3>
                <p className="text-forest-600">Save posts to view them here later</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
