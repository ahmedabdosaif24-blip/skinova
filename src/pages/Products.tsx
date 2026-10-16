import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  return (
    <div className="w-full pt-32 pb-24 bg-skinova-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-skinova-forest mb-6">Discover SKINOVA</h1>
          <p className="text-lg text-skinova-charcoal/70 max-w-2xl mx-auto">
            Explore our growing collection of everyday skincare essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
