import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-spiritual-dark text-cream py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-gold mb-4">Shastri Ji</h3>
          <p className="text-sm leading-relaxed text-gray-300 max-w-xs mx-auto md:mx-0">
            Guiding your life's path with ancient Vedic wisdom. Authentic Karam Kand rituals and insightful Jyotish readings.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-saffron mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Pandit Ji</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services & Pujas</Link></li>
            <li><Link to="/booking" className="hover:text-gold transition-colors">Book an Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-saffron mb-4">Connect</h4>
          <p className="text-sm text-gray-300 mb-2">Call/WhatsApp: +91 9818440305</p>
          <p className="text-sm text-gray-300 mb-4">Serving devotees globally with online guidance and locally for sacred rituals.</p>
          <Link to="/booking" className="inline-block bg-gold text-spiritual-dark font-bold py-2 px-6 rounded hover:bg-white transition-colors">
            Book Session (₹500)
          </Link>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Shastri Ji Vedic Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
