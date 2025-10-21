import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            {/* Inline simplified Bhavishya-style logo: roof + sun + panel feel */}
            <svg
              width="56"
              height="40"
              viewBox="0 0 112 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
              className="shrink-0"
            >
              <rect x="0" y="52" width="112" height="28" rx="4" fill="#0F4C81" />
              <path d="M8 52 L56 12 L104 52 Z" fill="#0F4C81" />
              <rect x="16" y="28" width="80" height="16" rx="2" fill="#1976D2" opacity="0.95" />
              <circle cx="18" cy="18" r="8" fill="#FFC107" />
            </svg>

            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-[#0F4C81]">BHAVISHYA</div>
              <div className="text-sm font-semibold text-[#2E8B57] tracking-widest">SOLUTIONS</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-colors text-center"
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
