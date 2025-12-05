import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Ratna Commercial Agencies
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in industrial metals, machinery, tools, and feed supplies. 
              Delivering quality since decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-blue-400 transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=non-ferrous" className="hover:text-blue-400 transition-colors">
                  Non-Ferrous Metals
                </Link>
              </li>
              <li>
                <Link href="/products?category=ferrous" className="hover:text-blue-400 transition-colors">
                  Ferrous Metals
                </Link>
              </li>
              <li>
                <Link href="/products?category=machinery" className="hover:text-blue-400 transition-colors">
                  Machinery
                </Link>
              </li>
              <li>
                <Link href="/products?category=tools" className="hover:text-blue-400 transition-colors">
                  Tools & Hardware
                </Link>
              </li>
              <li>
                <Link href="/products?category=feed" className="hover:text-blue-400 transition-colors">
                  Animal Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Industrial Avenue, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@ratnacommercial.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ratna Commercial Agencies (Pvt) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
