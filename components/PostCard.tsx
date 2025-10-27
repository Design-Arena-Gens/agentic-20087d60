'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/supabase'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes_count)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')
  const [videoPlaying, setVideoPlaying] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setLiked(!liked)
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComment('')
      setShowComments(false)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${post.profile?.username}'s post`,
        text: post.caption,
        url: window.location.href,
      })
    } catch (err) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden fade-in hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center space-x-3 p-4">
        <Link href={`/profile/${post.user_id}`} className="focus:outline-none focus:ring-2 focus:ring-orange rounded-full">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-earth-200">
            <Image
              src={post.profile?.profile_picture || ''}
              alt={`${post.profile?.username}'s profile picture`}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="flex-1">
          <Link
            href={`/profile/${post.user_id}`}
            className="font-semibold text-forest-800 hover:text-orange transition-colors focus:outline-none focus:underline"
          >
            {post.profile?.username}
          </Link>
          <p className="text-xs text-forest-500">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
        <button
          className="text-forest-600 hover:text-forest-800 focus:outline-none focus:ring-2 focus:ring-orange rounded p-1"
          aria-label="Post options"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Media */}
      <div className="relative w-full aspect-square bg-earth-100">
        {post.media_type === 'video' ? (
          <video
            className="w-full h-full object-cover"
            src={post.media_url}
            loop
            muted
            playsInline
            controls={videoPlaying}
            onMouseEnter={(e) => {
              e.currentTarget.play()
              setVideoPlaying(true)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              setVideoPlaying(false)
            }}
            aria-label={`Video post by ${post.profile?.username}`}
          />
        ) : (
          <Image
            src={post.media_url}
            alt={post.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Actions */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="focus:outline-none focus:ring-2 focus:ring-orange rounded transition-transform hover:scale-110"
              aria-label={liked ? 'Unlike post' : 'Like post'}
              aria-pressed={liked}
            >
              <svg
                className={`w-7 h-7 ${liked ? 'fill-red-500 text-red-500' : 'fill-none text-forest-800'}`}
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="focus:outline-none focus:ring-2 focus:ring-orange rounded transition-transform hover:scale-110"
              aria-label="Comment on post"
              aria-expanded={showComments}
            >
              <svg className="w-7 h-7 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            <button
              onClick={handleShare}
              className="focus:outline-none focus:ring-2 focus:ring-orange rounded transition-transform hover:scale-110"
              aria-label="Share post"
            >
              <svg className="w-7 h-7 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>

          <button
            className="focus:outline-none focus:ring-2 focus:ring-orange rounded transition-transform hover:scale-110"
            aria-label="Save post"
          >
            <svg className="w-7 h-7 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Likes count */}
        <div>
          <p className="font-semibold text-forest-900">
            {likesCount.toLocaleString()} {likesCount === 1 ? 'like' : 'likes'}
          </p>
        </div>

        {/* Caption */}
        <div>
          <p className="text-forest-800">
            <Link href={`/profile/${post.user_id}`} className="font-semibold hover:text-orange focus:outline-none focus:underline">
              {post.profile?.username}
            </Link>{' '}
            <span>{post.caption}</span>
          </p>
        </div>

        {/* Comments */}
        {post.comments_count > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-sm text-forest-500 hover:text-forest-700 focus:outline-none focus:underline"
          >
            View all {post.comments_count} comments
          </button>
        )}

        {/* Comment input */}
        {showComments && (
          <form onSubmit={handleComment} className="flex items-center space-x-2 pt-2 border-t border-earth-200">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 text-sm focus:outline-none text-forest-900 placeholder-forest-400"
              aria-label="Add a comment"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="text-sm font-semibold text-orange hover:text-orange/80 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:underline"
            >
              Post
            </button>
          </form>
        )}
      </div>
    </article>
  )
}
