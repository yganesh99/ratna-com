import Link from 'next/link';
import {
	Mail,
	Phone,
	MapPin,
	ArrowRight,
	FileText,
	MessageCircle,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-secondary text-white'>
			<div className='container mx-auto px-4 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					{/* Company Info */}
					<div className='lg:col-span-1'>
						<h3 className='text-white text-2xl font-bold mb-4'>
							Ratna Commercial Agencies
						</h3>
						<p className='text-white/80 text-sm leading-relaxed mb-6'>
							Your trusted partner in industrial metals,
							machinery, tools, and feed supplies. Delivering
							quality and reliability since 1999.
						</p>

						{/* CTA Buttons */}
						<div className='space-y-3'>
							<Link
								href='/request-quote'
								className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors group'
							>
								Request Quote
								<ArrowRight
									size={16}
									className='group-hover:translate-x-1 transition-transform'
								/>
							</Link>
							<Link
								href='/contact'
								className='inline-flex items-center gap-2 text-white hover:text-accent border border-white/30 hover:border-accent px-4 py-2 rounded-lg font-semibold text-sm transition-colors'
							>
								<MessageCircle size={16} />
								Contact Sales
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-white font-semibold mb-4'>
							Quick Links
						</h4>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/'
									className='text-white/80 hover:text-white transition-colors'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='text-white/80 hover:text-white transition-colors'
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-white/80 hover:text-white transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-white/80 hover:text-white transition-colors'
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Product Categories */}
					<div>
						<h4 className='text-white font-semibold mb-4'>
							Categories
						</h4>
						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/products?category=non-ferrous'
									className='text-white/80 hover:text-white transition-colors'
								>
									Non-Ferrous Metals
								</Link>
							</li>
							<li>
								<Link
									href='/products?category=ferrous'
									className='text-white/80 hover:text-white transition-colors'
								>
									Ferrous Metals
								</Link>
							</li>
							<li>
								<Link
									href='/products?category=machinery'
									className='text-white/80 hover:text-white transition-colors'
								>
									Machinery
								</Link>
							</li>
							<li>
								<Link
									href='/products?category=tools'
									className='text-white/80 hover:text-white transition-colors'
								>
									Tools & Hardware
								</Link>
							</li>
							<li>
								<Link
									href='/products?category=feed'
									className='text-white/80 hover:text-white transition-colors'
								>
									Animal Feed
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info & Resources */}
					<div>
						<h4 className='text-white font-semibold mb-4'>
							Contact & Resources
						</h4>
						<ul className='space-y-3 text-sm mb-6'>
							<li className='flex items-start gap-3'>
								<MapPin
									size={18}
									className='mt-0.5 flex-shrink-0 text-accent'
								/>
								<span className='text-white/80'>
									123 Industrial Avenue, Colombo, Sri Lanka
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<Phone
									size={18}
									className='text-accent'
								/>
								<span className='text-white/80'>
									+94 11 234 5678
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<Mail
									size={18}
									className='text-accent'
								/>
								<span className='text-white/80'>
									info@ratnacommercial.lk
								</span>
							</li>
						</ul>

						{/* Download Brochure */}
						<Link
							href='#'
							className='inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/30 hover:border-white px-3 py-2 rounded-lg text-sm transition-colors group'
						>
							<FileText size={16} />
							Download Brochure
						</Link>
					</div>
				</div>

				{/* Trust Indicators */}
				<div className='border-t border-white/20 pt-8 mb-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
						<div>
							<div className='text-2xl font-bold text-accent mb-1'>
								25+
							</div>
							<div className='text-white/80 text-sm'>
								Years Experience
							</div>
						</div>
						<div>
							<div className='text-2xl font-bold text-accent mb-1'>
								30+
							</div>
							<div className='text-white/80 text-sm'>
								Countries Served
							</div>
						</div>
						<div>
							<div className='text-2xl font-bold text-accent mb-1'>
								500+
							</div>
							<div className='text-white/80 text-sm'>
								Happy Clients
							</div>
						</div>
						<div>
							<div className='text-2xl font-bold text-accent mb-1'>
								24/7
							</div>
							<div className='text-white/80 text-sm'>Support</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-white/20 pt-6 text-center text-sm text-white/60'>
					<p>
						&copy; {new Date().getFullYear()} Ratna Commercial
						Agencies (Pvt) Ltd. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
