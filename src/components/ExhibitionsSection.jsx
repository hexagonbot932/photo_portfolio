import React from 'react';
import { Button } from './ui/button';
import { MapPin, Calendar } from 'lucide-react';

const ExhibitionsSection = () => {
  const exhibitions = [
    {
      title: 'Visual Narratives',
      location: 'Barcelona Gallery, Spain',
      date: '15 Apr 2024',
      image: 'https://images.unsplash.com/photo-1635300275007-2a0a817a9527?w=600',
    },
    {
      title: 'Moments in Time',
      location: 'London Art Space, UK',
      date: '28 Apr 2024',
      image: 'https://images.unsplash.com/photo-1506108859383-d8067b1ec811?w=600',
    },
    {
      title: 'Light & Shadow',
      location: 'Berlin Museum, Germany',
      date: '10 May 2024',
      image: 'https://images.pexels.com/photos/34930908/pexels-photo-34930908.jpeg?w=600',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-8xl font-black mb-6">
            exhibitions<span className="text-orange-500">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Join us at our upcoming exhibitions around the world. Experience the art of visual storytelling in person.
          </p>
        </div>

        {/* Exhibition Cards */}
        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      {exhibition.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span className="text-lg">{exhibition.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-orange-500" />
                        <span className="text-lg">{exhibition.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-black text-white hover:bg-orange-500 px-8 py-6 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105">
                      Buy Ticket
                    </Button>
                    <Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white px-8 py-6 rounded-full font-bold text-base transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-16 text-center text-white shadow-2xl">
          <h3 className="text-5xl font-black mb-6">Want to Collaborate?</h3>
          <p className="text-xl mb-8 opacity-90">Let's create something extraordinary together</p>
          <Button className="bg-white text-black hover:bg-black hover:text-white px-12 py-6 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;