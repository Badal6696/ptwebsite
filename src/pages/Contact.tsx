import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-saffron-dark mb-4">Reach Out to Shastri Ji</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Whether you have questions about a specific puja or want to inquire before booking an astrological reading, feel free to contact us.</p>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        
        {/* Contact Info */}
        <div className="lg:w-1/3 bg-saffron text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gold">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gold mb-1 text-sm uppercase tracking-wider">Call / WhatsApp</h3>
                  <a href="tel:+919818440305" className="text-xl font-semibold hover:text-gold transition-colors block">+91 9818440305</a>
                  <p className="text-sm mt-1 text-white/80">Available for calls and messages.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gold mb-1 text-sm uppercase tracking-wider">Email Support</h3>
                  <a href="mailto:info@shastriji.example.com" className="text-lg font-medium hover:text-gold transition-colors">info@shastriji.example.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gold mb-1 text-sm uppercase tracking-wider">Availability</h3>
                  <p className="text-lg font-medium">10:00 AM - 8:00 PM</p>
                  <p className="text-sm mt-1 text-white/80">Monday to Sunday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gold mb-1 text-sm uppercase tracking-wider">Location</h3>
                  <p className="text-lg font-medium">Vedic Ashram, Main Road</p>
                  <p className="text-sm mt-1 text-white/80">New Delhi, India</p>
                  <p className="text-xs mt-2 text-white/60 italic">(Online consultations available globally)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="lg:w-2/3 p-10 lg:p-16">
          <h2 className="text-3xl font-bold text-spiritual-dark mb-2">Send a Message</h2>
          <p className="text-gray-600 mb-8">Please fill out the form below and we will get back to you shortly.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="Enter your phone number" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject / Inquiry</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="E.g., Query about Griha Pravesh Puja" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none" placeholder="How can Shastri Ji assist you?"></textarea>
            </div>
            
            <button className="w-full bg-spiritual-dark text-white font-bold py-4 rounded-lg hover:bg-black transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
