'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
	Menu,
	X,
	ChevronDown,
	Wrench,
	Settings,
	Factory,
	Hammer,
	Wheat,
} from 'lucide-react';
import productsData from '@/data/products.json';
import type { Category } from '@/types/product';

const categoryIcons = {
	'non-ferrous': Wrench,
	ferrous: Settings,
	machinery: Factory,
	tools: Hammer,
	feed: Wheat,
};

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
	const categories = productsData.categories as unknown as Category[];

	return (
		<header className='bg-white border-b border-border shadow-sm sticky top-0 z-50'>
			<nav className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link
						href='/'
						className='text-2xl font-bold tracking-tight'
					>
						<span className='text-primary'>Ratna</span>{' '}
						<span className='text-secondary'>Commercial</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						<Link
							href='/'
							className='text-foreground hover:text-primary transition-colors font-medium'
						>
							Home
						</Link>

						{/* Products Mega Menu */}
						<div className='relative'>
							<button
								onMouseEnter={() => setIsMegaMenuOpen(true)}
								onMouseLeave={() => setIsMegaMenuOpen(false)}
								className='flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium'
							>
								Products
								<ChevronDown size={16} />
							</button>

							{/* Mega Menu */}
							{isMegaMenuOpen && (
								<div
									className='absolute top-full left-0 w-screen max-w-4xl bg-white border border-border rounded-lg shadow-xl mt-2 p-6 z-50'
									onMouseEnter={() => setIsMegaMenuOpen(true)}
									onMouseLeave={() =>
										setIsMegaMenuOpen(false)
									}
								>
									<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
										{categories.map((category) => {
											const IconComponent =
												categoryIcons[
													category.id as keyof typeof categoryIcons
												] || Wrench;
											return (
												<Link
													key={category.id}
													href={`/products?category=${category.id}`}
													className='group block p-4 rounded-lg hover:bg-muted transition-colors'
												>
													<div className='flex items-start gap-3'>
														<div className='flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
															<IconComponent
																className='text-primary'
																size={20}
															/>
														</div>
														<div>
															<h3 className='font-semibold text-foreground group-hover:text-primary transition-colors mb-1'>
																{category.name}
															</h3>
															<p className='text-sm text-muted-foreground line-clamp-2'>
																{
																	category.description
																}
															</p>
														</div>
													</div>
												</Link>
											);
										})}
									</div>

									<div className='mt-6 pt-4 border-t border-border'>
										<Link
											href='/products'
											className='inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors'
										>
											View All Products
											<ChevronDown
												className='rotate-[-90deg]'
												size={16}
											/>
										</Link>
									</div>
								</div>
							)}
						</div>

						<Link
							href='/about'
							className='text-foreground hover:text-primary transition-colors font-medium'
						>
							About
						</Link>
						<Link
							href='/contact'
							className='text-foreground hover:text-primary transition-colors font-medium'
						>
							Contact
						</Link>
						<Link
							href='/request-quote'
							className='bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors font-semibold'
						>
							Request Quote
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label='Toggle menu'
					>
						{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4'>
						<Link
							href='/'
							className='block text-foreground hover:text-primary transition-colors font-medium'
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>

						{/* Mobile Products Menu */}
						<div className='space-y-2'>
							<div className='font-medium text-foreground'>
								Products
							</div>
							{categories.map((category) => {
								const IconComponent =
									categoryIcons[
										category.id as keyof typeof categoryIcons
									] || Wrench;
								return (
									<Link
										key={category.id}
										href={`/products?category=${category.id}`}
										className='flex items-center gap-3 block text-muted-foreground hover:text-primary transition-colors pl-4'
										onClick={() => setIsMenuOpen(false)}
									>
										<IconComponent size={16} />
										{category.name}
									</Link>
								);
							})}
							<Link
								href='/products'
								className='block text-primary hover:text-primary/80 transition-colors pl-4 font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								View All Products
							</Link>
						</div>

						<Link
							href='/about'
							className='block text-foreground hover:text-primary transition-colors font-medium'
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
						<Link
							href='/contact'
							className='block text-foreground hover:text-primary transition-colors font-medium'
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
						<Link
							href='/request-quote'
							className='block bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors font-semibold text-center'
							onClick={() => setIsMenuOpen(false)}
						>
							Request Quote
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
}
