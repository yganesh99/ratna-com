import { Globe, Target, Award, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Ratna Commercial Agencies',
  description: 'Learn about Ratna Commercial Agencies, your trusted partner in industrial materials and equipment sourcing.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ratna Commercial</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Building partnerships through quality, reliability, and expertise in industrial materials supply
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Established over two decades ago, Ratna Commercial Agencies (Pvt) Ltd has grown from a 
                small local supplier to a trusted name in industrial materials sourcing across Sri Lanka 
                and the region.
              </p>
              <p>
                Our journey began with a simple mission: to provide businesses with reliable access to 
                quality industrial materials at competitive prices. Today, we serve hundreds of clients 
                across diverse industries including manufacturing, construction, agriculture, and automotive sectors.
              </p>
              <p>
                With established relationships with suppliers in over 30 countries, we leverage global 
                sourcing capabilities to bring you the best products at the best prices, backed by our 
                commitment to technical expertise and customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To be the most trusted partner for industrial procurement by delivering quality products, 
                competitive pricing, and exceptional service that helps our clients build and grow their businesses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-700">
                We source only from verified, reputable suppliers and conduct rigorous quality checks to 
                ensure every product meets international standards and your specifications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Globe className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-gray-700">
                Our extensive network of international suppliers enables us to source specialized materials 
                and equipment from anywhere in the world, ensuring you get exactly what you need.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                Your success is our success. We work closely with each client to understand their unique 
                requirements and provide tailored solutions that meet their specific needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">2000</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-blue-200 pl-6">
                  <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                  <p className="text-gray-700">
                    Ratna Commercial Agencies established with a focus on metal supply for local manufacturers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">2008</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-blue-200 pl-6">
                  <h3 className="text-xl font-bold mb-2">Expansion</h3>
                  <p className="text-gray-700">
                    Expanded product range to include machinery and tools, serving the growing construction sector.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">2015</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-blue-200 pl-6">
                  <h3 className="text-xl font-bold mb-2">Global Network</h3>
                  <p className="text-gray-700">
                    Established partnerships with suppliers in over 20 countries across Asia, Europe, and Americas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">2020</div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-blue-200 pl-6">
                  <h3 className="text-xl font-bold mb-2">Diversification</h3>
                  <p className="text-gray-700">
                    Added animal feed products to serve the agricultural sector, completing our comprehensive offering.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">Today</div>
                </div>
                <div className="flex-grow pl-6">
                  <h3 className="text-xl font-bold mb-2">Industry Leader</h3>
                  <p className="text-gray-700">
                    Serving 500+ clients with a comprehensive range of industrial materials and equipment from 30+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sourcing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Global Sourcing Network</h2>
            <p className="text-lg text-gray-700 mb-8">
              We source quality industrial materials from trusted suppliers across the globe
            </p>
            
            {/* Placeholder for map */}
            <div className="bg-white rounded-lg p-12 border-2 border-dashed border-gray-300">
              <div className="text-6xl mb-4">🌍</div>
              <p className="text-gray-500 font-medium">
                Interactive world map showing sourcing locations
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Asia • Europe • Americas • Middle East • Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-700 mb-12">
              Experienced professionals dedicated to your success
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Team Member {i}</h3>
                  <p className="text-gray-600">Position Title</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
