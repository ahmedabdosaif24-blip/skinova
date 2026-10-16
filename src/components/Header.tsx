import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Vision', path: '/vision' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-skinova-ivory/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src="/logo.jpg" alt="SKINOVA" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-2xl tracking-widest text-skinova-forest font-semibold uppercase">Skinova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-skinova-gold',
                location.pathname === link.path ? 'text-skinova-gold' : 'text-skinova-forest'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/products"
            className="bg-skinova-forest text-skinova-ivory px-6 py-2.5 rounded-sm text-sm font-medium tracking-wider hover:bg-skinova-emerald transition-colors"
          >
            Explore Products
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-skinova-forest z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-skinova-ivory flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-2xl font-serif tracking-widest transition-colors',
                location.pathname === link.path ? 'text-skinova-gold' : 'text-skinova-forest'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/products"
            className="mt-4 bg-skinova-forest text-skinova-ivory px-8 py-3 rounded-sm text-lg font-medium tracking-wider hover:bg-skinova-emerald transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </header>
  );
}
