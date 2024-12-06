import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600';
  };

  const navItems = [
    { path: '/', label: 'Bosh Sahifa' },
    { path: '/skills', label: 'Ko\'nikmalarim' },
    { path: '/projects', label: 'Loyihalar' },
    { path: '/about', label: 'Haqimda' },
  ];

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Alikulov.</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${isActive(item.path)} transition-colors duration-300`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path)} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;