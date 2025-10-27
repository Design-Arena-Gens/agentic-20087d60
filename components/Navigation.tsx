'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [showNotifications, setShowNotifications] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('demo_user')
    router.push('/')
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="bg-white border-b border-earth-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/feed" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl" role="img" aria-label="paw">🐾</span>
              </div>
              <h1 className="text-2xl font-bold text-forest-800 hidden sm:block">Petgram</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/feed"
                className={`flex flex-col items-center space-y-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 ${
                  isActive('/feed') ? 'text-orange' : 'text-forest-600 hover:text-orange'
                }`}
                aria-label="Home feed"
                aria-current={isActive('/feed') ? 'page' : undefined}
              >
                <svg className="w-6 h-6" fill={isActive('/feed') ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs font-medium">Home</span>
              </Link>

              <Link
                href="/search"
                className={`flex flex-col items-center space-y-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 ${
                  isActive('/search') ? 'text-orange' : 'text-forest-600 hover:text-orange'
                }`}
                aria-label="Search"
                aria-current={isActive('/search') ? 'page' : undefined}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs font-medium">Search</span>
              </Link>

              <Link
                href="/upload"
                className={`flex flex-col items-center space-y-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 ${
                  isActive('/upload') ? 'text-orange' : 'text-forest-600 hover:text-orange'
                }`}
                aria-label="Upload post"
                aria-current={isActive('/upload') ? 'page' : undefined}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-xs font-medium">Upload</span>
              </Link>

              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="flex flex-col items-center space-y-1 text-forest-600 hover:text-orange transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 relative"
                aria-label="Notifications"
                aria-expanded={showNotifications}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="text-xs font-medium">Alerts</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange rounded-full" aria-label="3 new notifications"></span>
              </button>

              <Link
                href="/profile"
                className={`flex flex-col items-center space-y-1 transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 ${
                  isActive('/profile') ? 'text-orange' : 'text-forest-600 hover:text-orange'
                }`}
                aria-label="Profile"
                aria-current={isActive('/profile') ? 'page' : undefined}
              >
                <svg className="w-6 h-6" fill={isActive('/profile') ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-medium">Profile</span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex flex-col items-center space-y-1 text-forest-600 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2"
                aria-label="Log out"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-xs font-medium">Logout</span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <Link
                href="/upload"
                className="text-orange focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2"
                aria-label="Upload post"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </Link>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-forest-600 focus:outline-none focus:ring-2 focus:ring-orange rounded-lg p-2 relative"
                aria-label="Notifications"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-earth-200 z-50" role="navigation" aria-label="Mobile navigation">
        <div className="flex items-center justify-around h-16">
          <Link
            href="/feed"
            className={`flex flex-col items-center space-y-1 flex-1 focus:outline-none focus:bg-earth-50 ${
              isActive('/feed') ? 'text-orange' : 'text-forest-600'
            }`}
            aria-label="Home"
          >
            <svg className="w-6 h-6" fill={isActive('/feed') ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          <Link
            href="/search"
            className={`flex flex-col items-center space-y-1 flex-1 focus:outline-none focus:bg-earth-50 ${
              isActive('/search') ? 'text-orange' : 'text-forest-600'
            }`}
            aria-label="Search"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          <Link
            href="/profile"
            className={`flex flex-col items-center space-y-1 flex-1 focus:outline-none focus:bg-earth-50 ${
              isActive('/profile') ? 'text-orange' : 'text-forest-600'
            }`}
            aria-label="Profile"
          >
            <svg className="w-6 h-6" fill={isActive('/profile') ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed top-16 right-4 w-80 bg-white rounded-lg shadow-xl border border-earth-200 z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-earth-200">
            <h3 className="font-bold text-forest-800">Notifications</h3>
          </div>
          <div className="divide-y divide-earth-200">
            <div className="p-4 hover:bg-earth-50 transition-colors">
              <p className="text-sm text-forest-800">
                <strong>golden_buddy</strong> liked your post
              </p>
              <p className="text-xs text-forest-500 mt-1">2 hours ago</p>
            </div>
            <div className="p-4 hover:bg-earth-50 transition-colors">
              <p className="text-sm text-forest-800">
                <strong>luna_the_husky</strong> started following you
              </p>
              <p className="text-xs text-forest-500 mt-1">5 hours ago</p>
            </div>
            <div className="p-4 hover:bg-earth-50 transition-colors">
              <p className="text-sm text-forest-800">
                <strong>chirpy_birb</strong> commented: "So cute! 🥰"
              </p>
              <p className="text-xs text-forest-500 mt-1">1 day ago</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
