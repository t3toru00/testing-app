import React, { useState, useMemo } from 'react';
import { menuCategories, menuItems } from '../data/restaurantData';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-24 bg-cream-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-forest-700 font-semibold mb-3">
            À La Carte & Cellar Selections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 mb-4">
            Explore Our Seasonal{' '}
            <span className="italic font-normal text-forest-700">Menu</span>
          </h2>
          <p className="text-forest-800/80 text-base sm:text-lg leading-relaxed">
            Every dish is prepared to order using D.O.P. certified Italian ingredients,
            organic local produce, and traditional culinary craftsmanship.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14"
          role="tablist"
          aria-label="Menu Category Filters"
        >
          {menuCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                  isActive
                    ? 'bg-forest-900 text-gold-300 shadow-md scale-[1.02]'
                    : 'bg-cream-50 text-forest-800 border border-cream-300 hover:border-forest-800/40 hover:bg-cream-200/60'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-cream-50 rounded-2xl p-4 sm:p-5 border border-cream-300/80 hover:border-gold-500/50 shadow-sm hover:shadow-elegant transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center"
            >
              {/* Food Image */}
              <div className="relative w-full sm:w-36 h-48 sm:h-36 rounded-xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-forest-950/85 text-gold-300 text-[11px] font-medium">
                  {item.tag}
                </span>
              </div>

              {/* Dish Info & Price */}
              <div className="flex-1 w-full">
                <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-cream-300 pb-2 mb-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest-950 group-hover:text-forest-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-2xl font-bold text-forest-900 shrink-0">
                    €{item.price}
                  </span>
                </div>

                <p className="text-forest-800/80 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cream-200/80 text-forest-800 font-medium">
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    {item.dietary}
                  </span>
                  <span className="uppercase tracking-wider text-[11px] text-forest-700/70 font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Tasting Note & CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-forest-900 text-cream-50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elegant">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/15 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-cream-50">
                Dietary & Allergen Accommodations
              </h3>
              <p className="text-cream-200/80 text-sm">
                Gluten-free handmade pasta and plant-based tasting menus are always
                available upon request. Coperto & artisanal bread service €4 per person.
              </p>
            </div>
          </div>

          <a
            href="#reservations"
            className="px-7 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-semibold text-sm tracking-wide shrink-0 transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
