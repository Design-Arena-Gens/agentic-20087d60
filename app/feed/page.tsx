'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import PostCard from '@/components/PostCard'
import { mockPosts } from '@/lib/mockData'
import Masonry from 'react-masonry-css'

export default function FeedPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

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

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 sr-only">Feed</h2>

          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Masonry>
        </div>
      </main>
    </div>
  )
}
