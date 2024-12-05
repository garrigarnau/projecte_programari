import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-800">SmartWare</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/video-call" className="text-lg text-gray-600 hover:text-rose-600">
              Videollamades
            </Link>
            <Link to="/health" className="text-lg text-gray-600 hover:text-rose-600">
              Salut
            </Link>
            <Link to="/profile" className="text-lg text-gray-600 hover:text-rose-600">
              Perfil
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/video-call" 
              className="block text-lg text-gray-600 hover:text-rose-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Videollamades
            </Link>
            <Link 
              to="/health" 
              className="block text-lg text-gray-600 hover:text-rose-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Salut
            </Link>
            <Link 
              to="/profile" 
              className="block text-lg text-gray-600 hover:text-rose-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Perfil
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};