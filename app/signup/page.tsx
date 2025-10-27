'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      // Demo: Auto signup for demo purposes
      localStorage.setItem('demo_user', JSON.stringify({
        id: '1',
        email: formData.email,
        username: formData.username
      }))
      router.push('/feed')
    } catch (err) {
      setError('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-earth-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl" role="img" aria-label="paw">🐾</span>
            </div>
            <h1 className="text-3xl font-bold text-forest-800">Petgram</h1>
          </Link>
          <p className="text-forest-600">Join the pack!</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest-800 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="your@email.com"
                required
                aria-required="true"
              />
            </div>

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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-forest-800 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="••••••••"
                required
                aria-required="true"
                minLength={6}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-forest-800 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                placeholder="••••••••"
                required
                aria-required="true"
                minLength={6}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              aria-label="Create your account"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-earth-200 text-center">
            <p className="text-forest-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-orange font-semibold hover:text-orange/80 transition-colors focus:outline-none focus:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
