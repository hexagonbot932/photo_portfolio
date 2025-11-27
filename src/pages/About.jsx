import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Globe, value: '30+', label: 'Countries' },
    { icon: Heart, value: '500+', label: 'Projects Completed' },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=400',
    },
    {
      name: 'Jordan Blake',
      role: 'Videographer',
      image: 'https://images.unsplash.com/photo-1612237372447-633d5ced1be1?w=400',
    },
    {
      name: 'Morgan Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/34915194/pexels-photo-34915194.jpeg?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h1 className="text-[120px] leading-[0.9] font-black mb-8">
              about<span className="text-orange-500">.</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-32">
            <div>
              <img
                src="https://images.unsplash.com/photo-1666636386855-922abe045862?w=800"
                alt="About"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-5xl font-black leading-tight">
                Crafting Visual
                <br />
                <span className="text-orange-500">Masterpieces</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, our studio has been at the forefront of visual storytelling, pushing the boundaries of what's possible through photography and videography.
                </p>
                <p>
                  We believe that every image should tell a story, evoke emotion, and create lasting memories. Our team of passionate creatives works tirelessly to capture the perfect moment.
                </p>
                <p>
                  From intimate portraits to grand exhibitions, we bring artistry and technical excellence to every project we undertake.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-32">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <stat.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-5xl font-black mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-6xl font-black mb-12">
              Meet the <span className="text-orange-500">Team</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                      <p className="text-orange-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;