import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/types/product';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group'>
			{/* Product Image */}
			<div className='relative h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden'>
				<div className='w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300'>
					<Package
						className='text-primary'
						size={48}
					/>
				</div>

				{/* Optional: Uncomment when real images are added */}
				{/* <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        /> */}

				{/* Overlay for future image */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>

			{/* Product Info */}
			<div className='p-6'>
				<h3 className='font-bold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
					{product.name}
				</h3>
				<p className='text-muted-foreground mb-4 line-clamp-2 leading-relaxed'>
					{product.shortDescription}
				</p>

				{/* Key Specifications */}
				<div className='space-y-2 mb-4'>
					{Object.entries(product.specs)
						.slice(0, 2)
						.map(([key, value]) => (
							<div
								key={key}
								className='flex justify-between items-start text-sm'
							>
								<span className='font-medium text-foreground/80'>
									{key}:
								</span>
								<span className='text-muted-foreground ml-2 text-right'>
									{value}
								</span>
							</div>
						))}
				</div>

				{/* Use Cases */}
				{product.useCases.length > 0 && (
					<div className='mb-4'>
						<p className='text-xs font-medium text-primary mb-2'>
							Applications:
						</p>
						<div className='flex flex-wrap gap-1'>
							{product.useCases
								.slice(0, 2)
								.map((useCase, index) => (
									<span
										key={index}
										className='inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md'
									>
										{useCase}
									</span>
								))}
						</div>
					</div>
				)}

				{/* View Product Button */}
				<Link
					href={`/products/${product.slug}`}
					className='inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors group/link'
				>
					View Details
					<ArrowRight
						size={16}
						className='group-hover/link:translate-x-1 transition-transform'
					/>
				</Link>
			</div>
		</div>
	);
}
