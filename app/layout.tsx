import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ratna Commercial Agencies - Industrial Metals, Machinery & Tools Supplier',
  description: 'Global sourcing & supply of industrial-grade metals, machinery, hardware, and tools. Reliable, competitive, on time. Your trusted B2B partner.',
  keywords: 'industrial metals, machinery, tools, hardware, animal feed, B2B supplier, ferrous metals, non-ferrous metals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
