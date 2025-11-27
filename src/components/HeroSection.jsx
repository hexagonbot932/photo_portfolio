import React from 'react';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: Youtube, name: 'yt', url: '#' },
    { icon: Instagram, name: 'ig', url: '#' },
    { icon: Facebook, name: 'fb', url: '#' },
    { icon: Twitter, name: 'x', url: '#' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-black rounded-full"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Typography */}
          <div className="col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-[140px] leading-[0.9] font-black tracking-tight">
                visual
                <br />
                <span className="relative inline-block">
                  moments
                </span>
              </h1>
            </div>

            <div className="max-w-md space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-16 pt-8">
              <div className="space-y-2">
                <h3 className="text-6xl font-black">+250k</h3>
                <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
                  Videos that reaching a wide audience and give lasting impression
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-6xl font-black">+800k</h3>
                <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
                  Hours watched, engaging storytelling that captivates viewers
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Cards */}
          <div className="col-span-5 relative">
            {/* Main Orange Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://images.unsplash.com/photo-1666636386855-922abe045862?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjBvcmFuZ2V8ZW58MHx8fHwxNzY0MjQxNDI1fDA&ixlib=rb-4.1.0&q=85"
                    alt="Photographer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Signature */}
                  <div className="absolute top-8 left-8 text-white font-script text-4xl opacity-80">
                    Photography
                  </div>

                  {/* Globe Icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded-full relative">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
                    </div>
                  </div>

                  {/* Thumbnail Circles */}
                  <div className="absolute bottom-8 left-8 flex flex-col gap-4">
                    {[
                      'https://images.unsplash.com/photo-1612237372447-633d5ced1be1?w=100',
                      'https://images.pexels.com/photos/34915194/pexels-photo-34915194.jpeg?w=100',
                      'https://images.pexels.com/photos/34898318/pexels-photo-34898318.jpeg?w=100'
                    ].map((img, idx) => (
                      <div key={idx} className="w-14 h-14 rounded-full bg-white overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-8 right-8 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                    7
                  </div>
                </div>
              </div>

              {/* Yellow Botanical Card */}
              <div className="absolute -right-12 top-1/2 w-64 h-64">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.05] transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1640304593605-f6f87d934d9c?w=400"
                    alt="Palm Leaf"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;