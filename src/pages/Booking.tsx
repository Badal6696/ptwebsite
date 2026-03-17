import { useState, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarHeart, Star, Info, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') === 'jyotish' ? 'jyotish' : 'karam-kand';
  
  const [serviceType, setServiceType] = useState(initialService);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    serviceDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields (Name and Phone)");
      return;
    }
    setStep(2);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-saffron-dark mb-4">Book Your Appointment</h1>
        <p className="text-lg text-gray-600 mb-6">Secure your session with Shastri Ji for a flat consultation fee of ₹500.</p>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-saffron/20">
        
        {/* Progress Bar */}
        <div className="flex text-sm font-bold bg-saffron/10 text-spiritual-dark">
          <div className={`flex-1 py-4 text-center border-b-4 ${step === 1 ? 'border-saffron bg-saffron/20' : 'border-transparent text-gray-400'}`}>
             1. Service Details
          </div>
          <div className={`flex-1 py-4 text-center border-b-4 ${step === 2 ? 'border-saffron bg-saffron/20' : 'border-transparent text-gray-400'}`}>
             2. Secure Booking (₹500)
          </div>
        </div>

        <div className="p-8 md:p-12">
          {step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block text-lg font-bold text-spiritual-dark mb-4">Select Service Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setServiceType('karam-kand')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${serviceType === 'karam-kand' ? 'border-saffron bg-saffron/5 shadow-md' : 'border-gray-200 hover:border-saffron/50'}`}
                  >
                    <div className={`p-3 rounded-full ${serviceType === 'karam-kand' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CalendarHeart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Karam Kand</h3>
                      <p className="text-sm text-gray-500">Pujas & Rituals</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => setServiceType('jyotish')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${serviceType === 'jyotish' ? 'border-saffron bg-saffron/5 shadow-md' : 'border-gray-200 hover:border-saffron/50'}`}
                  >
                    <div className={`p-3 rounded-full ${serviceType === 'jyotish' ? 'bg-saffron text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Jyotish</h3>
                      <p className="text-sm text-gray-500">Astrology Reading</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Details */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                <h3 className="font-bold text-spiritual-dark border-b border-gray-200 pb-2 mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Phone *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none" placeholder="Mobile Number" />
                  </div>
                </div>
              </div>

              {/* Jyotish specific fields */}
              {serviceType === 'jyotish' && (
                <div className="bg-saffron/5 p-6 rounded-2xl border border-saffron/20 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                   <div className="flex items-center gap-2 mb-4 border-b border-saffron/20 pb-2">
                     <Star className="w-5 h-5 text-saffron" />
                     <h3 className="font-bold text-spiritual-dark">Birth Details (Crucial for Astrology)</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time of Birth *</label>
                      <input required type="time" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth *</label>
                      <input required type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none" placeholder="City, State, Country" />
                    </div>
                  </div>
                </div>
              )}

              {/* Service Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specific Query / Puja Requirement (Optional)</label>
                <textarea name="serviceDetails" value={formData.serviceDetails} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron outline-none resize-none" placeholder="E.g., Looking for Kundli matching for marriage..."></textarea>
              </div>

              <button type="submit" className="w-full bg-saffron text-white text-lg font-bold py-4 rounded-xl hover:bg-saffron-dark transition-colors shadow-lg flex items-center justify-center gap-2">
                Proceed to Payment (₹500)
              </button>

            </form>
          ) : (
            <div className="space-y-8 text-center animate-in fade-in zoom-in-95 duration-300">
               <div className="bg-green-50 text-green-800 p-4 rounded-xl flex items-start gap-3 text-left">
                 <Info className="w-6 h-6 shrink-0 mt-0.5" />
                 <div>
                   <p className="font-bold">Almost there, {formData.name}!</p>
                   <p className="text-sm mt-1">Please complete the payment of ₹500 to confirm your appointment. Send the payment screenshot on WhatsApp at 9818440305 once done.</p>
                 </div>
               </div>

               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 inline-block w-full max-w-sm">
                 <h3 className="font-bold text-xl mb-6 text-spiritual-dark">Scan to Pay ₹500</h3>
                 
                 {/* QR Code container */}
                 <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 inline-block">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=badal.snarayan1@axl&pn=Shastri%20Ji&cu=INR&am=500" 
                      alt="Scan to pay 500 via UPI" 
                      className="w-48 h-48 object-contain mx-auto"
                    />
                 </div>

                 <div className="space-y-3">
                   <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">Or pay using UPI ID</div>
                   <div className="bg-white px-4 py-3 rounded-lg border border-gray-200 font-mono text-lg font-bold text-spiritual-dark select-all">
                      badal.snarayan1@axl
                   </div>
                 </div>
               </div>

               <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
                 <button onClick={() => setStep(1)} className="px-6 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors">
                   Go Back
                 </button>
                 <a 
                   href={`https://wa.me/919818440305?text=Hari%20Om%20Shastri%20Ji.%20I%20have%20paid%20%E2%82%B9500%20for%20my%20${serviceType}%20booking.%20My%20name%20is%20${formData.name}.%20Here%20is%20my%20screenshot:`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md flex items-center justify-center gap-2"
                 >
                   <CheckCircle2 className="w-5 h-5" /> I Have Paid, Send Screenshot
                 </a>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
