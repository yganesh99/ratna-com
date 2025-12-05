import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-slate-400 text-center px-4">
          <div className="w-20 h-20 mx-auto mb-2 bg-slate-300 rounded-lg flex items-center justify-center">
            <span className="text-4xl">📦</span>
          </div>
          <p className="text-xs font-medium">{product.name}</p>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Spec */}
        {Object.entries(product.specs).slice(0, 1).map(([key, value]) => (
          <div key={key} className="text-xs text-gray-500 mb-4">
            <span className="font-semibold">{key}:</span> {value}
          </div>
        ))}

        {/* View Product Button */}
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
        >
          View Product
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
