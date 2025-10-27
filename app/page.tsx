'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-earth-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl" role="img" aria-label="paw">🐾</span>
            </div>
            <h1 className="text-2xl font-bold text-forest-800">Petgram</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-forest-700 hover:text-forest-900 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange rounded-lg"
              aria-label="Log in to your account"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-orange text-white rounded-full font-medium hover:bg-orange/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              aria-label="Sign up for a new account"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-forest-100 to-earth-100">
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-4 gap-4 p-8">
                {[
                  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
                  'https://images.unsplash.com/photo-1633722715463-d30f4f325e24',
                  'https://images.unsplash.com/photo-1568572933382-74d440642117',
                  'https://images.unsplash.com/photo-1552728089-57bdde30beb3',
                  'https://images.unsplash.com/photo-1574158622682-e40e69881006',
                  'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
                  'https://images.unsplash.com/photo-1605559911160-a3d95d213904',
                  'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc',
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={`${src}?w=400`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-forest-900 mb-6 text-balance">
            Where Every Paw Has a Story
          </h2>
          <p className="text-xl md:text-2xl text-forest-700 mb-8 max-w-2xl mx-auto text-balance">
            Join the world's first social media platform exclusively for animals. Share moments, make friends, and celebrate life on four legs (or two wings)!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-orange text-white rounded-full text-lg font-semibold hover:bg-orange/90 transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              aria-label="Sign up to start sharing"
            >
              Get Started
            </Link>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-forest-800 rounded-full text-lg font-semibold hover:bg-earth-50 transition-all hover:scale-105 shadow-lg border-2 border-forest-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              aria-label="Learn more about Petgram"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-forest-900 mb-12">
            Built for Our Furry Friends
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center p-6 rounded-xl hover:bg-earth-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="camera">📸</span>
              </div>
              <h4 className="text-xl font-bold text-forest-800 mb-3">Share Moments</h4>
              <p className="text-forest-600">
                Post photos and videos of your daily adventures. From nap time to playtime, every moment matters.
              </p>
            </article>

            <article className="text-center p-6 rounded-xl hover:bg-earth-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="friends">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-forest-800 mb-3">Connect & Follow</h4>
              <p className="text-forest-600">
                Follow other animals from around the world. Build your pack, flock, or pride and stay connected.
              </p>
            </article>

            <article className="text-center p-6 rounded-xl hover:bg-earth-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="discover">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-forest-800 mb-3">Discover Animals</h4>
              <p className="text-forest-600">
                Search by breed, location, or interests. Find your perfect playmate or inspiration for your next trick.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-gradient-to-br from-earth-50 to-forest-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-forest-900 mb-12">
            See What Animals Are Sharing
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1574158622682-e40e69881006',
              'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
              'https://images.unsplash.com/photo-1605559911160-a3d95d213904',
              'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc',
              'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e',
              'https://images.unsplash.com/photo-1558788353-f76d92427f16',
              'https://images.unsplash.com/photo-1600804889194-e2f749deb689',
              'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`${src}?w=400`}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange to-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Join the Pack?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your profile today and start sharing your adventures with animals from around the world.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-orange rounded-full text-lg font-semibold hover:bg-earth-50 transition-all hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange"
            aria-label="Sign up now"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 text-earth-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange to-forest-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm" role="img" aria-label="paw">🐾</span>
                </div>
                <span className="font-bold text-xl">Petgram</span>
              </div>
              <p className="text-earth-300 text-sm">
                The social network for animals, by animals.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-earth-300">
                <li><a href="#" className="hover:text-orange transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-earth-300">
                <li><a href="#" className="hover:text-orange transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Community Guidelines</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-earth-300">
                <li><a href="#" className="hover:text-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-earth-700 mt-8 pt-8 text-center text-earth-400 text-sm">
            <p>&copy; 2024 Petgram. All rights reserved. Made with ❤️ for all animals.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
