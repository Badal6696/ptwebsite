const Gallery = () => {
  // Using reliable Unsplash images depicting Hindu rituals and temples for the gallery
  const images = [
    { url: "https://images.unsplash.com/photo-1603597022218-1c4da1389cb4?q=80&w=600&auto=format&fit=crop", title: "Auspicious Hawan" },
    { url: "https://images.unsplash.com/photo-1622350811211-e40268edc86e?q=80&w=600&auto=format&fit=crop", title: "Temple Diyas" },
    { url: "https://images.unsplash.com/photo-1596752092147-f0c1a840eeb2?q=80&w=600&auto=format&fit=crop", title: "Spiritual Reading" },
    { url: "https://images.unsplash.com/photo-1590035048682-1dc3a479ff70?q=80&w=600&auto=format&fit=crop", title: "Traditional Puja" },
    { url: "https://images.unsplash.com/photo-1579401738779-7a7219ceb642?q=80&w=600&auto=format&fit=crop", title: "Divine Offerings" },
    { url: "https://images.unsplash.com/photo-1588698520864-1ddbcfe2d1db?q=80&w=600&auto=format&fit=crop", title: "Vedic Chants" },
  ];

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-saffron-dark mb-4">Glimpses of Divine Rituals</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Experience the profound aura of Karam Kand and Vedic Pujas performed by Shastri Ji.</p>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl shadow-md">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-white font-medium p-6 text-lg tracking-wide">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
