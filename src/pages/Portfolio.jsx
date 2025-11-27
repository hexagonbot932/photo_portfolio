import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Video, Palette } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: Palette },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'video', name: 'Videography', icon: Video },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Urban Dreams',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1517264097307-63b4210df978?w=600',
      year: '2024',
    },
    {
      id: 2,
      title: 'Nature\'s Whisper',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1640304593605-f6f87d934d9c?w=600',
      year: '2024',
    },
    {
      id: 3,
      title: 'Motion Stories',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1506108859383-d8067b1ec811?w=600',
      year: '2023',
    },
    {
      id: 4,
      title: 'Abstract Moments',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1635300275007-2a0a817a9527?w=600',
      year: '2023',
    },
    {
      id: 5,
      title: 'Light Play',
      category: 'photography',
      image: 'https://images.pexels.com/photos/34930908/pexels-photo-34930908.jpeg?w=600',
      year: '2024',
    },
    {
      id: 6,
      title: 'Documentary Series',
      category: 'video',
      image: 'https://images.pexels.com/photos/34929782/pexels-photo-34929782.jpeg?w=600',
      year: '2023',
    },
    {
      id: 7,
      title: 'Golden Hour',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1629557891575-65b820e8638d?w=600',
      year: '2024',
    },
    {
      id: 8,
      title: 'Behind the Lens',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1589883913877-b18f51c6bab3?w=600',
      year: '2024',
    },
  ];

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h1 className="text-[120px] leading-[0.9] font-black mb-6">
              portfolio<span className="text-orange-500">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A curated collection of visual stories that capture the essence of moments, emotions, and experiences.
            </p>
          </div>

          <div className="flex gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 ${
                  filter === cat.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-orange-500 rounded-full text-xs font-bold uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs opacity-75">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;