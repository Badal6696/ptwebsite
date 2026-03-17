import { BookOpen, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-saffron-dark mb-4">About Shastri Ji</h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Image / Visual */}
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gold rounded-3xl transform translate-x-4 translate-y-4"></div>
          <div className="bg-saffron/10 w-full h-96 rounded-3xl relative z-10 border-2 border-saffron flex items-center justify-center overflow-hidden">
             {/* Abstract placeholder for Pandit Ji's photo */}
            <div className="text-center p-8">
              <span className="text-6xl text-saffron/40 block mb-4">ॐ</span>
              <p className="text-saffron-dark font-medium italic">"Dedicated to preserving the sanctity of Vedic traditions."</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-spiritual-dark mb-6">A Journey Rooted in Vedic Lineage</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over two decades of dedicated service to Sanatana Dharma, Shastri Ji is a highly revered Vedic Priest and Astrologer. Hailing from a traditional lineage of scholars, he has devoted his life to mastering the profound scriptures, Karam Kand (ritualistic ceremonies), and Jyotish Shastra (Vedic Astrology).
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            His approach to every puja and astrological consultation is deeply rooted in authenticity and compassion. He believes that true spiritual remedies lie in the correct pronunciation of mantras (Swara), the purity of intention (Bhava), and strict adherence to the Shastras.
          </p>

          {/* Highlights */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                <BookOpen className="w-6 h-6 text-saffron-dark" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-spiritual-dark mb-1">Vedic Scholar (Acharya)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Completed rigorous traditional education in Sanskrit, Vedas, and Upanishads from reputed Gurukuls.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                <Award className="w-6 h-6 text-saffron-dark" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-spiritual-dark mb-1">Jyotish Visharad</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Certified expert in interpreting complex planetary alignments (Kundli) to guide individuals through career, marriage, and life hurdles.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-saffron-dark" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-spiritual-dark mb-1">Trusted Globally</h3>
                <p className="text-gray-600 text-sm leading-relaxed">While based locally for physical rituals, Shastri Ji provides online astrological consultations and Sankalp for devotees worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
