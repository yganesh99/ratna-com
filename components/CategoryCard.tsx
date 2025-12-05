import Link from 'next/link';
import type { Category } from '@/types/product';

interface CategoryCardProps {
  category: Category;
}

const categoryIcons: Record<string, string> = {
  'non-ferrous': '🔩',
  'ferrous': '⚙️',
  'machinery': '🏭',
  'tools': '🔧',
  'feed': '🌾',
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all duration-300"
    >
      {/* Category Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-slate-200 transition-colors">
        <span className="text-6xl">{categoryIcons[category.id] || '📦'}</span>
      </div>

      {/* Category Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
