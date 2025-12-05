import Link from 'next/link';
import { Wrench, Settings, Factory, Hammer, Wheat } from 'lucide-react';
import type { Category } from '@/types/product';

interface CategoryCardProps {
	category: Category;
}

const categoryIcons = {
	'non-ferrous': Wrench,
	ferrous: Settings,
	machinery: Factory,
	tools: Hammer,
	feed: Wheat,
};

export default function CategoryCard({ category }: CategoryCardProps) {
	const IconComponent =
		categoryIcons[category.id as keyof typeof categoryIcons] || Wrench;

	return (
		<Link
			href={`/products?category=${category.id}`}
			className='group block bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1'
		>
			{/* Category Visual */}
			<div className='relative h-48 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 flex items-center justify-center group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-secondary/10 transition-all duration-300'>
				<div className='w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300'>
					<IconComponent
						className='text-primary'
						size={40}
					/>
				</div>

				{/* Subtle Pattern Overlay */}
				<div className='absolute inset-0 opacity-[0.03]'>
					<div className='w-full h-full bg-[radial-gradient(circle_at_50%_50%,currentColor,transparent_50%)]'></div>
				</div>
			</div>

			{/* Category Info */}
			<div className='p-6'>
				<h3 className='font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors'>
					{category.name}
				</h3>
				<p className='text-muted-foreground leading-relaxed line-clamp-3'>
					{category.description}
				</p>

				{/* Call to Action */}
				<div className='mt-4 flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors'>
					<span>Explore Products</span>
					<svg
						className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</div>
			</div>
		</Link>
	);
}
