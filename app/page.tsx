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
			<section className='relative bg-gradient-to-br from-secondary via-secondary/90 to-primary text-white overflow-hidden'>
				{/* Industrial Pattern Overlay */}
				<div className='absolute inset-0 opacity-10'>
					<div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]'></div>
				</div>
				<div className='container mx-auto px-4 py-24 md:py-40 relative'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='space-y-8'>
							<div>
								<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
									Industrial Excellence
									<span className='block text-accent'>
										Since 1999
									</span>
								</h1>
								<p className='text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl'>
									Global sourcing & supply of premium metals,
									machinery, hardware, and tools. Trusted by
									industry leaders worldwide for quality,
									reliability, and competitive pricing.
								</p>
							</div>

							{/* Trust Indicators */}
							<div className='flex flex-wrap gap-6 text-sm font-medium'>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-accent rounded-full'></div>
									<span>25+ Years Experience</span>
								</div>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-accent rounded-full'></div>
									<span>30+ Countries Served</span>
								</div>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-accent rounded-full'></div>
									<span>500+ Satisfied Clients</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/request-quote'
									className='inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group'
								>
									Request Quote
									<ArrowRight
										className='group-hover:translate-x-1 transition-transform'
										size={20}
									/>
								</Link>
								<Link
									href='/products'
									className='inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg'
								>
									View Products
								</Link>
								<Link
									href='/contact'
									className='inline-flex items-center justify-center gap-2 text-white hover:text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-colors'
								>
									Contact Sales
								</Link>
							</div>
						</div>

						{/* Hero Visual */}
						<div className='relative'>
							<div className='relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
								<div className='text-center space-y-4'>
									<div className='w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center'>
										<Package
											className='text-white'
											size={64}
										/>
									</div>
									<h3 className='text-2xl font-bold'>
										Premium Quality
									</h3>
									<p className='text-white/80'>
										Industrial-grade materials sourced from
										certified suppliers worldwide
									</p>
								</div>
							</div>

							{/* Floating Elements */}
							<div className='absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-pulse'>
								<CheckCircle
									className='text-accent'
									size={32}
								/>
							</div>
							<div className='absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center'>
								<Globe
									className='text-white'
									size={24}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Credibility Stats */}
			<section className='bg-muted py-16'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
							Trusted by Industry Leaders Worldwide
						</h2>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							Over two decades of delivering quality industrial
							materials and exceptional service
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						<div className='text-center group'>
							<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'>
								<span className='text-2xl'>🏭</span>
							</div>
							<div className='text-4xl font-bold text-primary mb-2'>
								25+
							</div>
							<div className='text-muted-foreground font-medium'>
								Years in Industry
							</div>
						</div>
						<div className='text-center group'>
							<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'>
								<span className='text-2xl'>🌍</span>
							</div>
							<div className='text-4xl font-bold text-primary mb-2'>
								30+
							</div>
							<div className='text-muted-foreground font-medium'>
								Countries Served
							</div>
						</div>
						<div className='text-center group'>
							<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'>
								<span className='text-2xl'>📦</span>
							</div>
							<div className='text-4xl font-bold text-primary mb-2'>
								5
							</div>
							<div className='text-muted-foreground font-medium'>
								Product Categories
							</div>
						</div>
						<div className='text-center group'>
							<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'>
								<span className='text-2xl'>🤝</span>
							</div>
							<div className='text-4xl font-bold text-primary mb-2'>
								500+
							</div>
							<div className='text-muted-foreground font-medium'>
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
						<div className='text-center group'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors'>
								<Globe
									className='text-primary'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-foreground'>
								Global Sourcing
							</h3>
							<p className='text-muted-foreground'>
								Access to quality materials from trusted
								suppliers worldwide
							</p>
						</div>

						<div className='text-center group'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors'>
								<Package
									className='text-primary'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-foreground'>
								Bulk Orders
							</h3>
							<p className='text-muted-foreground'>
								Competitive pricing for large volume
								requirements
							</p>
						</div>

						<div className='text-center group'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors'>
								<CheckCircle
									className='text-primary'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-foreground'>
								Technical Expertise
							</h3>
							<p className='text-muted-foreground'>
								Expert guidance on product selection and
								specifications
							</p>
						</div>

						<div className='text-center group'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors'>
								<Clock
									className='text-primary'
									size={32}
								/>
							</div>
							<h3 className='font-bold text-xl mb-2 text-foreground'>
								Fast Delivery
							</h3>
							<p className='text-muted-foreground'>
								Efficient logistics and on-time delivery
								guaranteed
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials & Certifications */}
			<section className='py-20 bg-muted'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
							What Our Clients Say
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Trusted by industry leaders for quality,
							reliability, and exceptional service
						</p>
					</div>

					{/* Testimonials */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
						<div className='bg-white p-6 rounded-xl shadow-sm border border-border'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
									<span className='text-primary font-bold'>
										JD
									</span>
								</div>
								<div>
									<h4 className='font-semibold text-foreground'>
										John Davis
									</h4>
									<p className='text-sm text-muted-foreground'>
										Procurement Manager, TechCorp Industries
									</p>
								</div>
							</div>
							<p className='text-muted-foreground italic'>
								"Ratna Commercial has been our go-to supplier
								for industrial metals for over 5 years. Their
								quality assurance and on-time delivery are
								unmatched."
							</p>
							<div className='flex text-accent mt-4'>
								{'★'.repeat(5)}
							</div>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm border border-border'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
									<span className='text-primary font-bold'>
										SM
									</span>
								</div>
								<div>
									<h4 className='font-semibold text-foreground'>
										Sarah Mitchell
									</h4>
									<p className='text-sm text-muted-foreground'>
										Operations Director, MetalWorks Ltd
									</p>
								</div>
							</div>
							<p className='text-muted-foreground italic'>
								"Exceptional service and technical expertise.
								They understand our requirements and always
								deliver exactly what we need."
							</p>
							<div className='flex text-accent mt-4'>
								{'★'.repeat(5)}
							</div>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm border border-border'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
									<span className='text-primary font-bold'>
										RK
									</span>
								</div>
								<div>
									<h4 className='font-semibold text-foreground'>
										Raj Kumar
									</h4>
									<p className='text-sm text-muted-foreground'>
										CEO, Lanka Engineering
									</p>
								</div>
							</div>
							<p className='text-muted-foreground italic'>
								"Competitive pricing and reliable supply chain.
								Ratna Commercial helps us maintain our
								production schedules consistently."
							</p>
							<div className='flex text-accent mt-4'>
								{'★'.repeat(5)}
							</div>
						</div>
					</div>

					{/* Certifications */}
					<div className='text-center'>
						<h3 className='text-2xl font-bold text-foreground mb-8'>
							Industry Certifications & Standards
						</h3>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
							<div className='bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>🏆</span>
								</div>
								<h4 className='font-semibold text-foreground mb-2'>
									ISO 9001:2015
								</h4>
								<p className='text-sm text-muted-foreground'>
									Quality Management Systems
								</p>
							</div>

							<div className='bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>🔒</span>
								</div>
								<h4 className='font-semibold text-foreground mb-2'>
									ISO 14001:2015
								</h4>
								<p className='text-sm text-muted-foreground'>
									Environmental Management
								</p>
							</div>

							<div className='bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>⚡</span>
								</div>
								<h4 className='font-semibold text-foreground mb-2'>
									OHSAS 18001
								</h4>
								<p className='text-sm text-muted-foreground'>
									Occupational Health & Safety
								</p>
							</div>

							<div className='bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>🌍</span>
								</div>
								<h4 className='font-semibold text-foreground mb-2'>
									REACH Compliant
								</h4>
								<p className='text-sm text-muted-foreground'>
									Chemical Safety Standards
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary via-primary to-secondary text-white'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl md:text-5xl font-bold mb-6'>
						Ready to Elevate Your Operations?
					</h2>
					<p className='text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Partner with Ratna Commercial for premium industrial
						materials, unmatched reliability, and competitive
						pricing. Your success is our priority.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<Link
							href='/request-quote'
							className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group'
						>
							Request Quote
							<ArrowRight
								size={20}
								className='group-hover:translate-x-1 transition-transform'
							/>
						</Link>
						<Link
							href='/contact'
							className='inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg'
						>
							Contact Our Team
						</Link>
					</div>

					{/* Contact Info */}
					<div className='mt-12 pt-8 border-t border-white/20'>
						<p className='text-white/80 mb-4'>
							Or reach us directly:
						</p>
						<div className='flex flex-col sm:flex-row gap-6 justify-center text-sm'>
							<div className='flex items-center gap-2'>
								<span className='font-medium'>
									📞 +94 11 234 5678
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-medium'>
									✉️ info@ratnacommercial.lk
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-medium'>
									🕒 24/7 Support Available
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
