'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import type { Product, Category } from '@/types/product';

function ProductsList() {
	const searchParams = useSearchParams();
	const categoryParam = searchParams.get('category');

	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState(
		categoryParam || 'all'
	);

	const categories = productsData.categories as unknown as Category[];
	const products = productsData.products as unknown as Product[];

	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const matchesCategory =
				selectedCategory === 'all' ||
				product.category === selectedCategory;
			const matchesSearch =
				searchQuery === '' ||
				product.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				product.shortDescription
					.toLowerCase()
					.includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	}, [products, selectedCategory, searchQuery]);

	return (
		<div className='bg-gray-50 min-h-screen'>
			{/* Page Header */}
			<div className='bg-slate-900 text-white py-12'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						Our Products
					</h1>
					<p className='text-xl text-blue-100'>
						Browse our comprehensive range of industrial materials
						and equipment
					</p>
				</div>
			</div>

			<div className='container mx-auto px-4 py-12'>
				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Filters Sidebar */}
					<aside className='lg:w-64 shrink-0'>
						<div className='bg-white rounded-lg p-6 sticky top-24'>
							<h2 className='font-bold text-lg mb-4'>
								Filter by Category
							</h2>
							<div className='space-y-2'>
								<button
									onClick={() => setSelectedCategory('all')}
									className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
										selectedCategory === 'all'
											? 'bg-blue-600 text-white'
											: 'hover:bg-gray-100'
									}`}
								>
									All Products
								</button>
								{categories.map((category) => (
									<button
										key={category.id}
										onClick={() =>
											setSelectedCategory(category.id)
										}
										className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
											selectedCategory === category.id
												? 'bg-blue-600 text-white'
												: 'hover:bg-gray-100'
										}`}
									>
										{category.name}
									</button>
								))}
							</div>
						</div>
					</aside>

					{/* Products Grid */}
					<main className='flex-1'>
						{/* Search Bar */}
						<div className='mb-8'>
							<div className='relative'>
								<Search
									className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
									size={20}
								/>
								<input
									type='text'
									placeholder='Search products...'
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</div>
						</div>

						{/* Results Count */}
						<div className='mb-6 text-gray-600'>
							Showing {filteredProducts.length} product
							{filteredProducts.length !== 1 ? 's' : ''}
						</div>

						{/* Products Grid */}
						{filteredProducts.length > 0 ? (
							<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
								{filteredProducts.map((product) => (
									<ProductCard
										key={product.id}
										product={product}
									/>
								))}
							</div>
						) : (
							<div className='text-center py-12'>
								<p className='text-gray-500 text-lg'>
									No products found matching your criteria.
								</p>
							</div>
						)}
					</main>
				</div>
			</div>
		</div>
	);
}

export default function ProductsPage() {
	return (
		<Suspense
			fallback={
				<div className='bg-gray-50 min-h-screen'>
					<div className='bg-slate-900 text-white py-12'>
						<div className='container mx-auto px-4'>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>
								Our Products
							</h1>
						</div>
					</div>
					<div className='container mx-auto px-4 py-12 text-center'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
						<p className='text-gray-600'>Loading products...</p>
					</div>
				</div>
			}
		>
			<ProductsList />
		</Suspense>
	);
}
