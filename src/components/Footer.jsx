import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Exhibitions', path: '/exhibitions' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Youtube, name: 'YouTube', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-4 h-8 bg-black rounded-full"></div>
                  <div className="w-4 h-8 bg-black rounded-full"></div>
                </div>
              </div>
              <h3 className="text-3xl font-black">
                Visual<span className="text-orange-500">Moments</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Capturing the essence of time through the art of photography and videography. 
              Every frame tells a story that transcends boundaries.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@visualmoments.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Barcelona, Spain</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-black mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Visual Moments. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
