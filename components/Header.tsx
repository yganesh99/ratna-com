'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Ratna</span>{' '}
            <span className="text-blue-400">Commercial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/request-quote"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-700 pt-4">
            <Link
              href="/"
              className="block hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/request-quote"
              className="block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
