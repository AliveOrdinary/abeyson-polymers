
import Link from 'next/link';
import { Product } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("group bg-card border border-border overflow-hidden hover:border-border-hover transition-all duration-300", className)}>
      <div className="aspect-square relative bg-muted flex items-center justify-center">
         <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
            [Product Image]
         </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
          </div>
          <Link 
            href={`/products/${product.slug}`}
            className="shrink-0"
          >
            <ArrowUpRight 
              size={20} 
              className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
