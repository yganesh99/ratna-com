import Link from 'next/link';
import {
	ArrowRight,
	CheckCircle,
	Globe,
	Package,
	Users,
	Clock,
} from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import productsData from '@/data/products.json';
import type { Category } from '@/types/product';
import Image from 'next/image';

export default function Home() {
	const categories = productsData.categories as unknown as Category[];

	return (
		<div>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white'>
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
				<div className='container mx-auto px-4 py-20 md:py-32 relative'>
					<div className='max-w-4xl'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
							Global Sourcing & Supply of Industrial-Grade
							Materials
						</h1>
						<p className='text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed'>
							Reliable metals, machinery, hardware, and tools for
							business professionals. Competitive pricing. On-time
							delivery. Technical expertise.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								href='/request-quote'
								className='inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors group'
							>
								Request Quote
								<ArrowRight className='group-hover:translate-x-1 transition-transform' />
							</Link>
							<Link
								href='/products'
								className='inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
							>
								View Products
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Credibility Stats */}
			<section className='bg-white py-12 border-b'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						<div className='text-center'>
							<div className='text-4xl font-bold text-blue-600 mb-2'>
								25+
							</div>
							<div className='text-gray-600 font-medium'>
								Years in Industry
							</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-blue-600 mb-2'>
								30+
							</div>
							<div className='text-gray-600 font-medium'>
								Countries Sourced
							</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-blue-600 mb-2'>
								5
							</div>
							<div className='text-gray-600 font-medium'>
								Product Categories
							</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl font-bold text-blue-600 mb-2'>
								500+
							</div>
							<div className='text-gray-600 font-medium'>
								Satisfied Clients
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Categories */}
			<section className='py-20 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Our Product Categories
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Comprehensive range of industrial materials and
							equipment sourced globally
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{categories.map((category) => (
							<CategoryCard
								key={category.id}
								category={category}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-20 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Why Choose Ratna Commercial
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Your trusted partner for industrial procurement
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
								<Globe
									className='text-blue-600'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-slate-900'>
								Global Sourcing
							</h3>
							<p className='text-gray-600'>
								Access to quality materials from trusted
								suppliers worldwide
							</p>
						</div>

						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
								<Package
									className='text-blue-600'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-slate-900'>
								Bulk Orders
							</h3>
							<p className='text-gray-600'>
								Competitive pricing for large volume
								requirements
							</p>
						</div>

						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
								<CheckCircle
									className='text-blue-600'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-slate-900'>
								Technical Expertise
							</h3>
							<p className='text-gray-600'>
								Expert guidance on product selection and
								specifications
							</p>
						</div>

						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
								<Clock
									className='text-blue-600'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-slate-900'>
								Fast Delivery
							</h3>
							<p className='text-gray-600'>
								Efficient logistics and on-time delivery
								guaranteed
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Trusted Clients Section */}
			<section className='py-20 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Trusted by Industry Leaders
						</h2>
						<p className='text-lg text-gray-600'>
							Serving procurement managers, engineers, and
							industrial buyers
						</p>
					</div>

					{/* Placeholder for client logos */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50'>
						{[1, 2, 3, 4].map((i) => (
							<div
								key={i}
								className='bg-white h-24 rounded-lg flex items-center justify-center border border-gray-200'
							>
								<Image
									src='/c1-logo.jpg'
									alt='Client Logo'
									width={300}
									height={150}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl mb-4'>
						Ready to Place Your Order?
					</h2>
					<p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
						Get a competitive quote for your industrial material
						requirements today
					</p>
					<Link
						href='/request-quote'
						className='inline-flex items-center gap-2 text-black bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
					>
						Request a Quote
						<ArrowRight />
					</Link>
				</div>
			</section>
		</div>
	);
}
