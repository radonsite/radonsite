import { Sun, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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

                <div className="leading-tight">
                  <div className="text-xl font-extrabold text-white">BHAVISHYA</div>
                  <div className="text-xs font-semibold text-green-400 tracking-widest">SOLUTIONS</div>
                </div>
            </div>
            <p className="text-gray-400">
              Leading the renewable energy revolution with cutting-edge solar solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bhavishyasolutions?utm_source=qr&igsh=MWt2bHI2enY3NnRuMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya Solutions Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Twitter and LinkedIn removed per request */}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Residential Solar</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Commercial Solar</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Battery Storage</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Solar Calculator</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Warranty Info</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
          © 2024 Bhavishya Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
