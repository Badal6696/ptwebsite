import { Link } from 'react-router-dom';
import { Sparkles, CalendarHeart, Users, BookOpen, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron to-saffron-dark text-white py-20 px-4 md:px-8 text-center relative overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          {/* Abstract Mandala / Om background representation */}
          <div className="w-[500px] h-[500px] border-[20px] border-white rounded-full flex items-center justify-center">
             <div className="w-[400px] h-[400px] border-[10px] border-white rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6 inline-block bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-gold font-semibold text-sm">
             ॐ Radhe Radhe
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Illuminating Your Life's Path with <span className="text-gold">Vedic Wisdom</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-medium drop-shadow-sm">
            Expert Karam Kand rituals and insightful Jyotish guidance by Shastri Ji to bring peace, prosperity, and clarity to your life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/booking" 
              className="bg-gold text-spiritual-dark text-lg px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Book Your Session for ₹500
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
           <div className="flex flex-col items-center gap-2">
             <Users className="w-8 h-8 text-saffron" />
             <span className="font-semibold text-spiritual-dark">40+ Years Experience</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <BookOpen className="w-8 h-8 text-saffron" />
             <span className="font-semibold text-spiritual-dark">Vedic Scholar (Acharya)</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <CalendarHeart className="w-8 h-8 text-saffron" />
             <span className="font-semibold text-spiritual-dark">1000+ Pujas Performed</span>
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-saffron-dark mb-4">Divine Services</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Karam Kand */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-saffron/20 hover:border-saffron transition-colors">
            <div className="w-14 h-14 bg-saffron/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-saffron" />
            </div>
            <h3 className="text-2xl font-bold text-spiritual-dark mb-4">Karam Kand (Rituals)</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience the power of authentic Vedic rituals conducted with strict adherence to Shastras. Bring divine blessings to your significant life events.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Vivah (Marriage Ceremony)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Griha Pravesh (House Warming)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Navagraha Shanti Puja</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Maha Mrityunjay Hawan</li>
            </ul>
            <Link to="/services" className="text-saffron font-bold hover:text-saffron-dark flex items-center gap-1">
              Read More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Jyotish */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-saffron/20 hover:border-saffron transition-colors">
            <div className="w-14 h-14 bg-saffron/10 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-saffron" />
            </div>
            <h3 className="text-2xl font-bold text-spiritual-dark mb-4">Jyotish (Astrology)</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Navigate life's complexities with profound Vedic astrological insights. Gain clarity on your destiny, career, and relationships.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Detailed Kundli Reading</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Kundli Milan (Matchmaking)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Career & Financial Guidance</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gold rounded-full"></div> Gemstone Recommendation</li>
            </ul>
            <Link to="/services" className="text-saffron font-bold hover:text-saffron-dark flex items-center gap-1">
              Read More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-saffron/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-saffron-dark mb-4">Devotee Experiences</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Shastri Ji performed our Griha Pravesh with such devotion. His explanation of every mantra brought us immense peace. Highly recommended.", author: "Rajesh S." },
              { text: "The astrology reading was incredibly accurate. It gave me the clarity I needed for my career transition. A truly gifted astrologer.", author: "Priya M." },
              { text: "We booked Shastri Ji for a Shanti Puja. The aura he created at our home was purely divine. The flat ₹500 consultation was very transparent.", author: "Amit K." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold text-left relative">
                <span className="text-6xl text-saffron/20 absolute top-4 left-4 font-serif">"</span>
                <p className="text-gray-700 italic mb-6 relative z-10 pt-4">{t.text}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="font-bold text-spiritual-dark">- {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold text-spiritual-dark mb-6">Ready to Seek Divine Blessings?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you need a ritual performed with utmost purity or seek astrological guidance for your future, Shastri Ji is here for you.
        </p>
        <Link 
          to="/booking" 
          className="inline-block bg-saffron text-white text-xl px-10 py-4 rounded-full font-bold hover:bg-saffron-dark hover:shadow-lg transition-all"
        >
          Book Your Appointment (₹500)
        </Link>
      </section>
    </div>
  );
};

export default Home;
