import { Sun, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-8 h-8 text-orange-600" />
                <svg
                  width="48"
                  height="34"
                  viewBox="0 0 96 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  className="shrink-0"
                >
                  <rect x="0" y="44" width="96" height="24" rx="4" fill="#0F4C81" />
                  <path d="M6 44 L48 8 L90 44 Z" fill="#0F4C81" />
                  <rect x="10" y="24" width="76" height="12" rx="2" fill="#1976D2" opacity="0.95" />
                  <circle cx="18" cy="16" r="6" fill="#FFC107" />
                </svg>
            </div>
            <p className="text-gray-400">
              Leading the renewable energy revolution with cutting-edge solar solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bhavishyasolutions?utm_source=qr&igsh=MWt2bHI2enY3NnRuMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya Solutions Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@bhavishyasolutions?si=E4lHevWCHngs8j5_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya Solutions YouTube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                {/* Inline YouTube play icon */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.58A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8a3 3 0 0 0 2.1 2.12c1.8.58 9.4.58 9.4.58s7.6 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-5.8zM9.8 15.6V8.4L16 12l-6.2 3.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Access</h3>
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-orange-600 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-600 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <p className="text-gray-400 text-sm">
          © 2024 Bhavishya Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
