import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-skinova-beige/20">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {product.comingSoon && (
          <div className="absolute top-4 right-4 bg-skinova-charcoal text-skinova-ivory text-xs px-3 py-1 tracking-widest font-medium uppercase">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-skinova-gold text-xs font-semibold tracking-widest uppercase mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-2xl text-skinova-forest mb-3">{product.name}</h3>
        <p className="text-skinova-charcoal/70 text-sm mb-6 flex-grow">{product.shortDescription}</p>
        <Link 
          to={`/products/${product.id}`}
          className="inline-block border border-skinova-forest text-skinova-forest text-center py-3 w-full text-sm font-medium tracking-widest uppercase hover:bg-skinova-forest hover:text-skinova-ivory transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
