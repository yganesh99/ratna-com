import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, Mail, Phone } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Metadata } from 'next';
import type { Product, Category } from '@/types/product';

interface ProductPageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return productsData.products.map((product) => ({
		slug: product.slug,
	}));
}

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const product = productsData.products.find((p) => p.slug === params.slug);

	if (!product) {
		return {
			title: 'Product Not Found',
		};
	}

	return {
		title: `${product.name} - Ratna Commercial Agencies`,
		description: product.shortDescription,
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { slug } = await params;

	const products = productsData.products as unknown as Product[];
	const categories = productsData.categories as unknown as Category[];
	const product = products.find((p) => p.slug === slug);
	if (!product) {
		notFound();
	}

	const category = categories.find((c) => c.id === product.category);

	return (
		<div className='bg-gray-50 min-h-screen'>
			{/* Back Button */}
			<div className='bg-white border-b'>
				<div className='container mx-auto px-4 py-4'>
					<Link
						href='/products'
						className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium'
					>
						<ArrowLeft size={20} />
						Back to Products
					</Link>
				</div>
			</div>

			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-2'>
						{/* Product Image */}
						<div className='bg-white rounded-lg p-8 mb-8'>
							<div className='aspect-video bg-linear-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center'>
								<div className='text-center'>
									<div className='text-8xl mb-4'>📦</div>
									<p className='text-gray-500 font-medium'>
										{product.name}
									</p>
								</div>
							</div>
						</div>

						{/* Product Info */}
						<div className='bg-white rounded-lg p-8 mb-8'>
							<div className='mb-4'>
								<span className='inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full'>
									{category?.name}
								</span>
							</div>
							<h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
								{product.name}
							</h1>
							<p className='text-lg text-gray-700 mb-6'>
								{product.description}
							</p>

							{/* Download Datasheet */}
							{/* <a
								href={product.datasheetUrl}
								className='inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Download size={20} />
								Download Datasheet (PDF)
							</a> */}
						</div>

						{/* Specifications */}
						<div className='bg-white rounded-lg p-8 mb-8 text-black'>
							<h2 className='text-2xl font-bold mb-6'>
								Technical Specifications
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{Object.entries(product.specs).map(
									([key, value]) => (
										<div
											key={key}
											className='border-b border-gray-200 pb-3'
										>
											<div className='text-sm text-gray-600 mb-1'>
												{key}
											</div>
											<div className='font-semibold text-gray-900'>
												{value}
											</div>
										</div>
									)
								)}
							</div>
						</div>

						{/* Use Cases */}
						<div className='bg-white rounded-lg p-8 text-black'>
							<h2 className='text-2xl font-bold mb-6'>
								Applications & Use Cases
							</h2>
							<ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{product.useCases.map((useCase, index) => (
									<li
										key={index}
										className='flex items-start gap-2'
									>
										<span className='text-blue-600 mt-1'>
											✓
										</span>
										<span>{useCase}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1'>
						{/* Request Quote Card */}
						<div className='bg-white rounded-lg p-6 mb-6 sticky top-24 text-black'>
							<h3 className='text-xl font-bold mb-4'>
								Interested in this product?
							</h3>
							<p className='text-gray-600 mb-6'>
								Get a competitive quote tailored to your
								requirements
							</p>
							<Link
								href={`/request-quote?product=${product.id}`}
								className='block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors mb-4'
							>
								Request Quote
							</Link>

							<div className='border-t border-gray-200 pt-6 mt-6'>
								<h4 className='font-semibold mb-4'>
									Contact Us
								</h4>
								<div className='space-y-3 text-sm'>
									<div className='flex items-center gap-2 text-gray-600'>
										<Phone size={18} />
										<span>+94 11 234 5678</span>
									</div>
									<div className='flex items-center gap-2 text-gray-600'>
										<Mail size={18} />
										<span>info@ratnacommercial.lk</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
