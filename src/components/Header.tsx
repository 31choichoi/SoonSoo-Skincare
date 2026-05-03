import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SOONSOO', path: '#philosophy' },
    { name: 'PROGRAM', path: '#programs' },
    { name: 'INTERIOR', path: '#interior' },
    { name: 'LOCATION', path: '#location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'scrolled-header py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="luxury-text text-2xl tracking-[0.2em] font-medium text-primary">
          SOONSOO
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.path}
              className={`text-sm tracking-widest font-light hover:text-primary transition-colors ${
                isScrolled ? 'text-dark' : 'text-dark/80'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:02-123-4567" className="text-dark hover:text-primary transition-colors">
            <Phone size={18} />
          </a>
          <a href="https://instagram.com" className="text-dark hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
          <button className="px-6 py-2 border border-primary text-primary text-xs tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
            BOOKING
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-base border-t border-secondary/20 p-8 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-widest font-light text-dark hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 flex justify-center space-x-8">
                <Phone size={20} className="text-primary" />
                <Instagram size={20} className="text-primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
