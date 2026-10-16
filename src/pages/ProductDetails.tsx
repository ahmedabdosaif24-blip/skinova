import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="w-full pt-32 pb-24 bg-skinova-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link 
          to="/products"
          className="inline-flex items-center gap-2 text-skinova-forest/70 hover:text-skinova-forest transition-colors mb-10 text-sm font-medium tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="aspect-square bg-skinova-beige/20 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center mix-blend-multiply"
            />
            {product.comingSoon && (
              <div className="absolute top-6 right-6 bg-skinova-charcoal text-skinova-ivory text-sm px-4 py-2 tracking-widest font-medium uppercase">
                Coming Soon
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-skinova-gold text-sm font-semibold tracking-widest uppercase mb-4">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-skinova-forest mb-6">{product.name}</h1>
            
            <p className="text-lg text-skinova-charcoal/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.size && (
              <p className="text-skinova-charcoal/60 mb-8 text-sm">
                Size: {product.size}
              </p>
            )}

            <div className="space-y-4 mb-10">
              <div className="bg-skinova-beige/30 p-6">
                <h4 className="font-serif text-xl text-skinova-forest mb-4">Ingredients</h4>
                {product.ingredients ? (
                  <p className="text-sm text-skinova-charcoal/80 leading-relaxed">{product.ingredients.join(', ')}</p>
                ) : (
                  <p className="text-sm text-skinova-charcoal/60 italic">Full ingredient list coming soon.</p>
                )}
              </div>
              
              <div className="bg-skinova-beige/30 p-6">
                <h4 className="font-serif text-xl text-skinova-forest mb-4">How to Use</h4>
                {product.directions ? (
                  <p className="text-sm text-skinova-charcoal/80 leading-relaxed">{product.directions}</p>
                ) : (
                  <p className="text-sm text-skinova-charcoal/60 italic">Usage instructions coming soon.</p>
                )}
              </div>
            </div>

            <button 
              disabled
              className="w-full bg-skinova-forest/50 text-skinova-ivory py-4 text-sm font-medium tracking-widest uppercase cursor-not-allowed mb-4"
            >
              Details Coming Soon
            </button>
            <p className="text-xs text-center text-skinova-charcoal/40 uppercase tracking-wider">
              Product formulations are being finalized
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
