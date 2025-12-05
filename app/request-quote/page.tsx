'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Product, Category } from '@/types/product';

function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get('product');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productId: productId || '',
    quantity: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = productsData.products as unknown as Product[];
  const categories = productsData.categories as unknown as Category[];
  const selectedProduct = formData.productId
    ? products.find((p) => p.id === formData.productId)
    : null;

  useEffect(() => {
    if (productId) {
      setFormData((prev) => ({ ...prev, productId }));
    }
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      router.push('/request-quote/success');
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Tell us about your requirements and we'll provide a competitive quote tailored to your needs
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Benefits Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">What happens next?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span>Our team reviews your requirements within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span>We prepare a detailed quote with competitive pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span>You receive personalized guidance from our technical experts</span>
              </li>
            </ul>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold mb-4">Product Requirements</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold mb-2">
                      Select Product
                    </label>
                    <select
                      id="product"
                      value={formData.productId}
                      onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a product (optional)</option>
                      {categories.map((category) => (
                        <optgroup key={category.id} label={category.name}>
                          {products
                            .filter((p) => p.category === category.id)
                            .map((product) => (
                              <option key={product.id} value={product.id}>
                                {product.name}
                              </option>
                            ))}
                        </optgroup>
                      ))}
                    </select>
                    
                    {selectedProduct && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">{selectedProduct.shortDescription}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                      Quantity Required *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 500 kg, 10 units, 2000 meters"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold mb-2">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={6}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about specific requirements, delivery timelines, technical specifications, or any other details..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting, you agree to be contacted by our team regarding your quote request
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <QuoteForm />
    </Suspense>
  );
}
