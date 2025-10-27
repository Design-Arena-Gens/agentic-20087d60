'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { mockProfiles } from '@/lib/mockData'

export default function SearchPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'accounts' | 'breeds' | 'locations'>('accounts')

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

  const filteredProfiles = mockProfiles.filter(profile => {
    const query = searchQuery.toLowerCase()
    if (activeTab === 'accounts') {
      return profile.username.toLowerCase().includes(query) || profile.bio.toLowerCase().includes(query)
    } else if (activeTab === 'breeds') {
      return profile.breed?.toLowerCase().includes(query)
    } else if (activeTab === 'locations') {
      return profile.location?.toLowerCase().includes(query)
    }
    return false
  })

  return (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Discover Animals</h2>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, breed, or location..."
                className="w-full px-4 py-3 pl-12 border border-earth-300 rounded-full focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                aria-label="Search for animals"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mb-6 overflow-x-auto" role="tablist" aria-label="Search filters">
            <button
              onClick={() => setActiveTab('accounts')}
              className={`px-4 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange whitespace-nowrap ${
                activeTab === 'accounts'
                  ? 'bg-orange text-white'
                  : 'bg-white text-forest-700 hover:bg-earth-100'
              }`}
              role="tab"
              aria-selected={activeTab === 'accounts'}
              aria-controls="search-results"
            >
              Accounts
            </button>
            <button
              onClick={() => setActiveTab('breeds')}
              className={`px-4 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange whitespace-nowrap ${
                activeTab === 'breeds'
                  ? 'bg-orange text-white'
                  : 'bg-white text-forest-700 hover:bg-earth-100'
              }`}
              role="tab"
              aria-selected={activeTab === 'breeds'}
              aria-controls="search-results"
            >
              Breeds
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`px-4 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange whitespace-nowrap ${
                activeTab === 'locations'
                  ? 'bg-orange text-white'
                  : 'bg-white text-forest-700 hover:bg-earth-100'
              }`}
              role="tab"
              aria-selected={activeTab === 'locations'}
              aria-controls="search-results"
            >
              Locations
            </button>
          </div>

          {/* Results */}
          <div id="search-results" className="space-y-4" role="tabpanel">
            {searchQuery === '' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-forest-800 mb-2">Start Exploring</h3>
                <p className="text-forest-600">Search for animals, breeds, or locations to find new friends</p>
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-forest-600">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredProfiles.map((profile) => (
                  <article
                    key={profile.id}
                    className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow fade-in"
                  >
                    <Link
                      href={`/profile/${profile.id}`}
                      className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-orange rounded-lg"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-earth-200 flex-shrink-0">
                        <Image
                          src={profile.profile_picture}
                          alt={`${profile.username}'s profile picture`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-forest-900 hover:text-orange transition-colors truncate">
                          {profile.username}
                        </h3>
                        <p className="text-sm text-forest-600 line-clamp-2">{profile.bio}</p>
                        {activeTab === 'breeds' && profile.breed && (
                          <p className="text-xs text-orange mt-1">{profile.breed}</p>
                        )}
                        {activeTab === 'locations' && profile.location && (
                          <p className="text-xs text-orange mt-1">{profile.location}</p>
                        )}
                      </div>
                      <button
                        className="px-4 py-2 bg-orange text-white rounded-full text-sm font-medium hover:bg-orange/90 transition-all focus:outline-none focus:ring-2 focus:ring-orange flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                        aria-label={`Follow ${profile.username}`}
                      >
                        Follow
                      </button>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Popular Breeds Section */}
          {searchQuery === '' && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-forest-900 mb-4">Popular Breeds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Golden Retriever', 'Siberian Husky', 'Tabby Cat', 'Persian Cat'].map((breed) => (
                  <button
                    key={breed}
                    onClick={() => {
                      setActiveTab('breeds')
                      setSearchQuery(breed)
                    }}
                    className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange"
                  >
                    <p className="font-semibold text-forest-800">{breed}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
