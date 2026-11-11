import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SpecialDishes from './components/SpecialDishes';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-forest-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <SpecialDishes />
        <MenuSection />
        <Gallery />
        <Reservations />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
