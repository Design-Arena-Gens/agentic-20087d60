'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Demo: Simulate password reset
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
    } catch (err) {
      setError('Failed to send reset email. Please try again.')
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
          <p className="text-forest-600">Reset your password</p>
        </div>

        {/* Reset Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-forest-600 text-sm">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-800 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all text-forest-900"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
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
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✉️</span>
              </div>
              <h2 className="text-xl font-bold text-forest-800">Check your email</h2>
              <p className="text-forest-600">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-sm text-forest-500">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-earth-200 text-center">
            <Link
              href="/login"
              className="text-orange font-semibold hover:text-orange/80 transition-colors focus:outline-none focus:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
