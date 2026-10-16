import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-skinova-forest text-skinova-ivory pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="SKINOVA Logo" className="h-12 w-12 rounded-full object-cover grayscale brightness-200" />
              <span className="font-serif text-3xl tracking-widest uppercase">Skinova</span>
            </Link>
            <p className="text-skinova-gold tracking-widest text-sm font-medium mb-6">CARE. HYDRATE. GLOW.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-skinova-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="hover:text-skinova-gold transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:text-skinova-gold transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 tracking-wide text-skinova-gold">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Home</Link></li>
              <li><Link to="/products" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Products</Link></li>
              <li><Link to="/about" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">About Us</Link></li>
              <li><Link to="/vision" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Our Vision</Link></li>
              <li><Link to="/contact" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 tracking-wide text-skinova-gold">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-skinova-gold transition-colors text-sm tracking-wide">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 tracking-wide text-skinova-gold">Stay Connected</h4>
            <p className="text-sm tracking-wide mb-4 text-skinova-ivory/80">
              Be the first to hear about new products, brand updates, and upcoming launches.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-skinova-emerald border border-skinova-emerald/50 px-4 py-2 w-full text-sm focus:outline-none focus:border-skinova-gold placeholder:text-skinova-ivory/40"
              />
              <button 
                type="submit"
                className="bg-skinova-gold text-skinova-forest px-4 py-2 text-sm font-semibold tracking-wider hover:bg-skinova-beige transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-skinova-ivory/40 mt-2">*This is a placeholder form.</p>
          </div>
        </div>

        <div className="border-t border-skinova-emerald pt-8 text-center text-sm text-skinova-ivory/60 tracking-wide">
          <p>&copy; {new Date().getFullYear()} SKINOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
