import React from 'react';
import { Sparkles, MapPin, Utensils } from 'lucide-react';
import { specialDishes } from '../data/restaurantData';

export default function SpecialDishes() {
  return (
    <section
      id="specials"
      className="py-24 bg-forest-950 text-cream-50 relative overflow-hidden"
    >
      {/* Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-[0.22em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Chef’s Signature Creations</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-cream-50 mb-4">
            Our Most Celebrated{' '}
            <span className="italic font-normal text-gold-300">
              Special Dishes
            </span>
          </h2>

          <p className="text-cream-200/80 text-base sm:text-lg leading-relaxed">
            Crafted exclusively for the evening tasting table using rare regional
            ingredients—from Piedmont white truffles to dry-aged Tuscan Chianina beef.
          </p>
        </div>

        {/* 3 Special Dish Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (
            <article
              key={dish.id}
              className="group rounded-3xl bg-forest-900/90 border border-gold-400/20 hover:border-gold-400/55 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Dish Photography */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow">
                  {dish.badge}
                </span>

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-forest-950/90 border border-gold-400/40 backdrop-blur-md">
                  <span className="font-serif text-2xl font-bold text-gold-400">
                    €{dish.price}
                  </span>
                </div>

                {/* Subtitle overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
                    {dish.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream-50 group-hover:text-gold-300 transition-colors mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-cream-200/80 text-sm leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest-800 flex items-center justify-between text-xs text-cream-200/70">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    {dish.origin}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-gold-400" />
                    {dish.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
