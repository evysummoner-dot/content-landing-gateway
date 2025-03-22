
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "bg-stream-darkBlue/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 animate-fade-in">
          <span className="text-white font-display text-2xl font-bold">
            Tel<span className="text-stream-red">STREAM</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Planos', 'Conteúdo', 'Dispositivos', 'FAQ'].map((item, index) => (
            <Link 
              key={item} 
              to="#" 
              className="nav-item text-white/90 hover:text-white text-sm font-medium transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full animate-fade-in">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full animate-fade-in" style={{ animationDelay: '100ms' }}>
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-stream-red text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
          
          <Button 
            className="bg-stream-red hover:bg-stream-red/90 text-white rounded-md px-4 py-2 font-medium btn-bounce animate-fade-in hidden md:flex"
            style={{ animationDelay: '200ms' }}
          >
            Assinar
          </Button>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-white p-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-stream-darkBlue/95 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-lg ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {['Início', 'Planos', 'Conteúdo', 'Dispositivos', 'FAQ'].map((item) => (
            <Link 
              key={item} 
              to="#" 
              className="text-white/90 hover:text-white text-lg font-medium py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button 
            className="bg-stream-red hover:bg-stream-red/90 text-white rounded-md px-4 py-2 font-medium btn-bounce mt-2"
          >
            Assinar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
