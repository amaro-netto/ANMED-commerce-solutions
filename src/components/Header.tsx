
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-cyan-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (11) 99999-9999
            </span>
            <span>Frete grátis acima de R$ 500</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Minha Conta</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/image/0f4bfa84-3607-4685-abd1-294709e5d076.png" 
              alt="ANMED Produtos Médicos" 
              className="h-12 md:h-16"
            />
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos médicos..."
                className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-cyan-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-cyan-500 text-white rounded-r-lg">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 py-2">
              <li><Link to="/" className="block py-2 text-gray-700 hover:text-cyan-500 transition-colors">Início</Link></li>
              <li><Link to="/products" className="block py-2 text-gray-700 hover:text-cyan-500 transition-colors">Produtos</Link></li>
              <li><Link to="/categories" className="block py-2 text-gray-700 hover:text-cyan-500 transition-colors">Categorias</Link></li>
              <li><Link to="/about" className="block py-2 text-gray-700 hover:text-cyan-500 transition-colors">Sobre</Link></li>
              <li><Link to="/contact" className="block py-2 text-gray-700 hover:text-cyan-500 transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
