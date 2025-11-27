import React from 'react';
import Navigation from '../components/Navigation';
import ExhibitionsSection from '../components/ExhibitionsSection';
import Footer from '../components/Footer';

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <ExhibitionsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Exhibitions;