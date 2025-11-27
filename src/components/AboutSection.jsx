import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Decorative Crosshairs */}
      <div className="absolute top-20 left-20 opacity-40">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 opacity-40">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
        </div>
      </div>

      {/* Repeating Text Header */}
      <div className="mb-20 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[100px] font-black mx-8">
              about<span className="text-orange-500">.</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1517264097307-63b4210df978?w=800"
                alt="Artistic Photography"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Hand Overlay Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                    {/* Simplified hand/petal design */}
                    {[...Array(8)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="100"
                        cy="100"
                        rx="30"
                        ry="80"
                        fill="white"
                        transform={`rotate(${i * 45} 100 100)`}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-32">
              <div className="w-16 h-0.5 bg-white"></div>
              <div className="w-16 h-0.5 bg-white"></div>
            </div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-32">
              <div className="w-16 h-0.5 bg-white"></div>
              <div className="w-16 h-0.5 bg-white"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-7xl font-black leading-tight">
              Capturing
              <br />
              Timeless
              <br />
              <span className="text-orange-500">Stories</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Every frame tells a story, every moment holds infinite possibilities. Through the lens, we explore the intersection of light, shadow, and emotion.
              </p>
              <p>
                With over a decade of experience in visual storytelling, we transform ordinary moments into extraordinary memories that transcend time.
              </p>
              <p>
                Our approach combines technical excellence with artistic vision, creating imagery that resonates deeply with audiences worldwide.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Work
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;