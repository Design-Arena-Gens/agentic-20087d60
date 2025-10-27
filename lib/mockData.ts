import { Post, Profile } from './supabase'

export const mockProfiles: Profile[] = [
  {
    id: '1',
    username: 'whiskers_the_cat',
    bio: 'Professional napper and laser pointer chaser 🐱',
    profile_picture: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
    created_at: '2024-01-01',
    breed: 'Tabby',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    username: 'golden_buddy',
    bio: 'Good boy who loves treats and belly rubs 🐕',
    profile_picture: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
    created_at: '2024-01-02',
    breed: 'Golden Retriever',
    location: 'Seattle, WA'
  },
  {
    id: '3',
    username: 'luna_the_husky',
    bio: 'Adventure seeker and snow lover 🐺',
    profile_picture: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400',
    created_at: '2024-01-03',
    breed: 'Siberian Husky',
    location: 'Denver, CO'
  },
  {
    id: '4',
    username: 'chirpy_birb',
    bio: 'Singing my heart out every morning 🦜',
    profile_picture: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400',
    created_at: '2024-01-04',
    breed: 'Cockatiel',
    location: 'Miami, FL'
  },
]

export const mockPosts: Post[] = [
  {
    id: '1',
    user_id: '1',
    caption: 'Found the perfect sunbeam for my afternoon nap ☀️',
    media_url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800',
    media_type: 'image',
    created_at: '2024-01-15',
    likes_count: 156,
    comments_count: 23,
    profile: mockProfiles[0]
  },
  {
    id: '2',
    user_id: '2',
    caption: 'Best day at the dog park! Made so many new friends 🎾',
    media_url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
    media_type: 'image',
    created_at: '2024-01-14',
    likes_count: 289,
    comments_count: 45,
    profile: mockProfiles[1]
  },
  {
    id: '3',
    user_id: '3',
    caption: 'Snow day! Nothing beats fresh powder ❄️',
    media_url: 'https://images.unsplash.com/photo-1605559911160-a3d95d213904?w=800',
    media_type: 'image',
    created_at: '2024-01-13',
    likes_count: 342,
    comments_count: 67,
    profile: mockProfiles[2]
  },
  {
    id: '4',
    user_id: '1',
    caption: 'Caught me mid-yawn 😸',
    media_url: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800',
    media_type: 'image',
    created_at: '2024-01-12',
    likes_count: 198,
    comments_count: 31,
    profile: mockProfiles[0]
  },
  {
    id: '5',
    user_id: '4',
    caption: 'Learning a new song today! 🎵',
    media_url: 'https://images.unsplash.com/photo-1582142306909-195724d33adc?w=800',
    media_type: 'image',
    created_at: '2024-01-11',
    likes_count: 124,
    comments_count: 19,
    profile: mockProfiles[3]
  },
  {
    id: '6',
    user_id: '2',
    caption: 'Training session going great! Almost mastered the new trick 🏆',
    media_url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800',
    media_type: 'image',
    created_at: '2024-01-10',
    likes_count: 267,
    comments_count: 42,
    profile: mockProfiles[1]
  },
  {
    id: '7',
    user_id: '3',
    caption: 'Howling at the moon 🌙',
    media_url: 'https://images.unsplash.com/photo-1600804889194-e2f749deb689?w=800',
    media_type: 'image',
    created_at: '2024-01-09',
    likes_count: 411,
    comments_count: 78,
    profile: mockProfiles[2]
  },
  {
    id: '8',
    user_id: '1',
    caption: 'Box is life. Box is love. 📦',
    media_url: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800',
    media_type: 'image',
    created_at: '2024-01-08',
    likes_count: 223,
    comments_count: 38,
    profile: mockProfiles[0]
  },
]
