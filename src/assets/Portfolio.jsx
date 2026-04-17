import React from 'react';

const Portfolio = () => {
  const categories = ["DESIGN", "GRAPHICS", "MUSIC", "TECHNOLOGY"];
  
  // Test uchun rasmlar (o'zingiznikiga almashtirishingiz mumkin)
  const items = [
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=500",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=500",
    "https://images.unsplash.com/photo-1518005020452-9b446127ec31?q=80&w=500",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500"
  ];

  return (
    <section className="bg-black py-20 px-10">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-bold mb-2">My Portfolio</h2>
        <p className="text-gray-500 text-sm">Sub heading goes here</p>
      </div>

      {/* Filter tugmalari */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button 
            key={cat}
            className="px-6 py-1 border border-gray-700 text-gray-400 text-xs hover:border-white hover:text-white transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rasmlar galereyasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {items.map((src, index) => (
          <div key={index} className="overflow-hidden group cursor-pointer aspect-video md:aspect-square">
            <img 
              src={src} 
              alt="Work" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;