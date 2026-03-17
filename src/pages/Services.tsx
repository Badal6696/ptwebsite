import { Link } from 'react-router-dom';
import { Sparkles, Star, ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-saffron-dark mb-6">Our Divine Offerings</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Authentic rituals performed with devotion and precise astrological guidance. Every service involves a transparent, flat consultation fee of ₹500 to secure your slot.
        </p>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="space-y-32">
        {/* Karam Kand Section */}
        <section className="scroll-mt-32" id="karam-kand">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left relative">
               <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-saffron opacity-10">
                 <Sparkles className="w-32 h-32" />
               </div>
               <h2 className="text-4xl font-bold text-saffron-dark mb-4">Karam Kand</h2>
               <h3 className="text-xl font-medium text-gold mb-8">Vedic Rituals & Pujas</h3>
               <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                 Karam Kand refers to the ritualistic practices of Sanatana Dharma. Shastri Ji conducts these sacred ceremonies with strict adherence to Vedic injunctions, ensuring every mantra and offering invokes the intended divine grace.
               </p>
               <Link to="/booking?service=karam-kand" className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3 rounded-full font-bold hover:bg-saffron-dark transition-colors shadow-lg">
                  Book a Puja <ChevronRight className="w-5 h-5" />
               </Link>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Vivah (Marriage)", desc: "Complete traditional Vedic wedding ceremony." },
                 { title: "Griha Pravesh", desc: "Purify your new home with Vaastu Shanti and Hawan." },
                 { title: "Shanti Puja", desc: "For resolving Graha Dosha, Navagraha Shanti, and personal peace." },
                 { title: "Hawan & Yagya", desc: "Fire rituals including Maha Mrityunjay, Gayatri, and Chandi Hawan." },
                 { title: "Namkaran Sanskar", desc: "Auspicious naming ceremony for newborns based on Nakshatras." },
                 { title: "Satyanarayan Katha", desc: "Auspicious reading and puja for general well-being and prosperity." }
               ].map((s, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-saffron hover:shadow-md transition-all">
                   <h4 className="font-bold text-lg text-spiritual-dark mb-2 flex items-center gap-2">
                     <div className="w-2 h-2 bg-gold rounded-full"></div>
                     {s.title}
                   </h4>
                   <p className="text-gray-600 text-sm">{s.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Jyotish Section */}
        <section className="scroll-mt-32" id="jyotish">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left relative">
               <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-saffron opacity-10">
                 <Star className="w-32 h-32" />
               </div>
               <h2 className="text-4xl font-bold text-saffron-dark mb-4">Jyotish</h2>
               <h3 className="text-xl font-medium text-gold mb-8">Vedic Astrology</h3>
               <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                 Vedic Astrology is the "Eye of the Vedas." Shastri Ji analyzes the precise planetary positions at your birth to guide you through life's challenges, career decisions, and relationships.
               </p>
               <Link to="/booking?service=jyotish" className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3 rounded-full font-bold hover:bg-saffron-dark transition-colors shadow-lg">
                  Book a Reading <ChevronRight className="w-5 h-5" />
               </Link>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Kundli Reading", desc: "In-depth analysis of your birth chart, highlighting strengths and mitigating doshas." },
                 { title: "Kundli Milan", desc: "Comprehensive matchmaking for prospective brides and grooms." },
                 { title: "Career Guidance", desc: "Astrological insights into career paths, business ventures, and financial stability." },
                 { title: "Muhurat Selection", desc: "Finding the most auspicious time (Shubh Muhurat) for important life events." },
                 { title: "Gemstone Consultation", desc: "Recommendations for Ratnas (gemstones) to balance planetary energies." },
                 { title: "Prashna Kundli", desc: "Horary astrology to answer specific, pressing questions about your life." }
               ].map((s, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-saffron hover:shadow-md transition-all">
                   <h4 className="font-bold text-lg text-spiritual-dark mb-2 flex items-center gap-2">
                     <div className="w-2 h-2 bg-gold rounded-full"></div>
                     {s.title}
                   </h4>
                   <p className="text-gray-600 text-sm">{s.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
