import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Pandit Ji', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-saffron text-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col items-center">
              <span className="font-bold text-2xl tracking-wide text-gold">Shastri Ji</span>
              <span className="text-sm font-medium">Vedic Priest & Astrologer</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold text-spiritual-dark px-5 py-2 rounded-md font-bold hover:bg-white transition-colors shadow-sm"
            >
              Book for ₹500
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saffron-dark px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-saffron hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-bold text-spiritual-dark bg-gold rounded-md"
          >
            Book Appointment (₹500)
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
