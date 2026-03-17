import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "9818440305";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href={`tel:+91${phoneNumber}`}
        className="bg-saffron text-white p-3 rounded-full shadow-lg hover:bg-saffron-dark transition-colors flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
