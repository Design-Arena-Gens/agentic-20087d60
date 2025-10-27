import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
  id: string
  username: string
  bio: string
  profile_picture: string
  created_at: string
  breed?: string
  location?: string
}

export type Post = {
  id: string
  user_id: string
  caption: string
  media_url: string
  media_type: 'image' | 'video'
  created_at: string
  likes_count: number
  comments_count: number
  profile?: Profile
}

export type Comment = {
  id: string
  post_id: string
  user_id: string
  content: string
  created_at: string
  profile?: Profile
}

export type Like = {
  id: string
  post_id: string
  user_id: string
  created_at: string
}

export type Follow = {
  id: string
  follower_id: string
  following_id: string
  created_at: string
}

export type Notification = {
  id: string
  user_id: string
  actor_id: string
  type: 'like' | 'comment' | 'follow'
  post_id?: string
  read: boolean
  created_at: string
  actor_profile?: Profile
}
