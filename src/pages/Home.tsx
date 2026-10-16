import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const featuredProducts = products.slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-skinova-forest text-skinova-ivory overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract background elements */}
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-skinova-gold rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[40rem] h-[40rem] bg-skinova-emerald rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-skinova-ivory"
          >
            Your Skin.<br />
            <span className="text-skinova-gold">Your Confidence.</span><br />
            Your Glow.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-skinova-ivory/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Discover a modern approach to everyday skincare, designed to make your daily care routine feel simple, refined, and personal.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/products"
              className="bg-skinova-gold text-skinova-forest px-8 py-4 w-full sm:w-auto text-sm font-semibold tracking-wider uppercase hover:bg-skinova-beige transition-colors"
            >
              Explore Our Products
            </Link>
            <Link 
              to="/about"
              className="bg-transparent border border-skinova-gold/50 text-skinova-ivory px-8 py-4 w-full sm:w-auto text-sm font-semibold tracking-wider uppercase hover:bg-skinova-gold/10 transition-colors"
            >
              Discover SKINOVA
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 bg-skinova-ivory">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-skinova-forest mb-8">Beauty Begins With Care.</h2>
          <p className="text-lg text-skinova-charcoal/80 leading-relaxed mb-10">
            At SKINOVA, we believe everyday skincare should feel effortless, personal, and thoughtfully designed. We are building a modern personal care brand focused on creating accessible, well-presented essentials for everyday routines.
          </p>
          <Link 
            to="/about"
            className="inline-block border-b border-skinova-gold text-skinova-forest font-medium tracking-widest uppercase pb-1 hover:text-skinova-gold transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-skinova-beige/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-skinova-forest mb-4">Your Daily Essentials</h2>
            <p className="text-skinova-charcoal/70">Thoughtfully designed for your everyday routine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products"
              className="inline-block bg-skinova-forest text-skinova-ivory px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-skinova-emerald transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 bg-skinova-ivory">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-skinova-forest text-center mb-16">Care That Fits Your Everyday.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-skinova-gold/50 flex items-center justify-center transform rotate-45 group-hover:bg-skinova-gold/10 transition-colors">
                <div className="w-8 h-8 border border-skinova-forest/50"></div>
              </div>
              <h3 className="font-serif text-2xl text-skinova-forest mb-4">Everyday Care</h3>
              <p className="text-skinova-charcoal/70 leading-relaxed">
                Designed around the role of skincare in everyday routines.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-skinova-gold/50 rounded-full flex items-center justify-center group-hover:bg-skinova-gold/10 transition-colors">
                <div className="w-8 h-8 border border-skinova-forest/50 rounded-full"></div>
              </div>
              <h3 className="font-serif text-2xl text-skinova-forest mb-4">Modern Simplicity</h3>
              <p className="text-skinova-charcoal/70 leading-relaxed">
                Clear presentation and a straightforward customer experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-skinova-gold/50 flex items-center justify-center group-hover:bg-skinova-gold/10 transition-colors">
                <div className="w-8 h-8 border border-skinova-forest/50 rounded-sm"></div>
              </div>
              <h3 className="font-serif text-2xl text-skinova-forest mb-4">Accessible Beauty</h3>
              <p className="text-skinova-charcoal/70 leading-relaxed">
                A brand direction focused on making personal care approachable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Vision Preview */}
      <section className="py-24 bg-skinova-forest text-skinova-ivory text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-skinova-gold">A Vision for Everyday Beauty.</h2>
          <p className="text-lg md:text-xl text-skinova-ivory/80 leading-relaxed mb-10 font-light">
            "Our vision is to grow into a trusted personal care brand that brings together thoughtful design, accessible skincare essentials, and a consistent commitment to quality."
          </p>
          <Link 
            to="/vision"
            className="inline-block border border-skinova-gold text-skinova-gold px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-skinova-gold hover:text-skinova-forest transition-colors"
          >
            Discover Our Vision
          </Link>
        </div>
      </section>

      {/* Brand Identity Banner */}
      <section className="h-[60vh] relative overflow-hidden flex items-center justify-center bg-skinova-beige">
        <div className="absolute inset-0 bg-[url('/logo.jpg')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-skinova-forest/20 to-transparent"></div>
        <h2 className="relative z-10 font-serif text-5xl md:text-7xl lg:text-9xl text-skinova-forest tracking-widest text-center px-4 mix-blend-color-burn opacity-80">
          CARE. HYDRATE. GLOW.
        </h2>
      </section>
    </div>
  );
}
