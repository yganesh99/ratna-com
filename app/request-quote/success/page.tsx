import Link from 'next/link';
import { CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quote Request Submitted - Ratna Commercial Agencies',
  description: 'Your quote request has been successfully submitted.',
};

export default function QuoteSuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-lg p-8 md:p-12 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quote Request Submitted!
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Thank you for your interest in our products. We've received your quote request 
              and our team will review it shortly.
            </p>

            {/* What's Next */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-bold text-lg mb-4">What happens next?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-gray-700">
                    Our team will review your requirements within 24 business hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-gray-700">
                    We'll prepare a detailed quote with competitive pricing and specifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-gray-700">
                    You'll receive our quote via email with all the details you need
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <p className="text-gray-700 mb-4">
                Need immediate assistance or have urgent requirements?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+94112345678"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone size={20} />
                  +94 11 234 5678
                </a>
                <a
                  href="mailto:info@ratnacommercial.lk"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Mail size={20} />
                  info@ratnacommercial.lk
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse More Products
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
