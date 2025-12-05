'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' });

			setTimeout(() => setSubmitStatus('idle'), 5000);
		}, 1000);
	};

	return (
		<div>
			{/* Hero Section */}
			<section className='bg-slate-900 text-white py-20'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Contact Us
					</h1>
					<p className='text-xl text-blue-100 max-w-3xl'>
						Get in touch with our team for inquiries, quotes, or any
						assistance you need
					</p>
				</div>
			</section>

			<div className='container mx-auto px-4 py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div>
						<h2 className='text-3xl font-bold mb-8'>
							Get in Touch
						</h2>

						<div className='space-y-6 mb-12'>
							<div className='flex gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<MapPin
											className='text-blue-600'
											size={24}
										/>
									</div>
								</div>
								<div>
									<h3 className='font-bold text-lg mb-1'>
										Our Location
									</h3>
									<p className='text-gray-700'>
										123 Industrial Avenue
										<br />
										Colombo 00500
										<br />
										Sri Lanka
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<Phone
											className='text-blue-600'
											size={24}
										/>
									</div>
								</div>
								<div>
									<h3 className='font-bold text-lg mb-1'>
										Phone
									</h3>
									<p className='text-gray-700'>
										+94 11 234 5678
										<br />
										+94 77 123 4567
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<Mail
											className='text-blue-600'
											size={24}
										/>
									</div>
								</div>
								<div>
									<h3 className='font-bold text-lg mb-1'>
										Email
									</h3>
									<p className='text-gray-700'>
										info@ratnacommercial.lk
										<br />
										sales@ratnacommercial.lk
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<Clock
											className='text-blue-600'
											size={24}
										/>
									</div>
								</div>
								<div>
									<h3 className='font-bold text-lg mb-1'>
										Business Hours
									</h3>
									<p className='text-gray-700'>
										Monday - Friday: 8:00 AM - 6:00 PM
										<br />
										Saturday: 9:00 AM - 2:00 PM
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className='rounded-lg overflow-hidden h-64'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.53279938082133!2d79.86252776248023!3d6.9472512156607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1764915240074!5m2!1sen!2slk'
								width='600'
								height='450'
								style={{ border: 0 }}
								allowFullScreen={true}
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
					</div>

					{/* Contact Form */}
					<div>
						<div className='bg-white rounded-lg border border-gray-200 p-8 text-black'>
							<h2 className='text-2xl font-bold mb-6'>
								Send us a Message
							</h2>

							{submitStatus === 'success' && (
								<div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800'>
									Thank you for your message! We'll get back
									to you soon.
								</div>
							)}

							<form
								onSubmit={handleSubmit}
								className='space-y-6 placeholder:text-gray-900'
							>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-semibold mb-2'
									>
										Name *
									</label>
									<input
										type='text'
										id='name'
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({
												...formData,
												name: e.target.value,
											})
										}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										placeholder='Your name'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-semibold mb-2'
									>
										Email *
									</label>
									<input
										type='email'
										id='email'
										required
										value={formData.email}
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										placeholder='your.email@example.com'
									/>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-semibold mb-2'
									>
										Subject *
									</label>
									<input
										type='text'
										id='subject'
										required
										value={formData.subject}
										onChange={(e) =>
											setFormData({
												...formData,
												subject: e.target.value,
											})
										}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										placeholder='How can we help?'
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-semibold mb-2'
									>
										Message *
									</label>
									<textarea
										id='message'
										required
										rows={6}
										value={formData.message}
										onChange={(e) =>
											setFormData({
												...formData,
												message: e.target.value,
											})
										}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										placeholder='Tell us more about your inquiry...'
									/>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
								>
									{isSubmitting
										? 'Sending...'
										: 'Send Message'}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
