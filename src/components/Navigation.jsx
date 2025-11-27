import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Exhibitions', path: '/exhibitions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="flex gap-1">
              <div className="w-3 h-6 bg-white rounded-full"></div>
              <div className="w-3 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-all duration-300 hover:text-orange-500 relative group ${
                location.pathname === item.path ? 'text-black' : 'text-gray-600'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">★</span>
          <span className="text-sm font-medium text-gray-800">Alex Rivera, 15 Mar 24</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">AR</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;