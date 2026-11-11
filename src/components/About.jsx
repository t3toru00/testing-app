import React, { useState } from 'react';
import { Leaf, Wine, Flame, BookOpen, X, CheckCircle2 } from 'lucide-react';

const qualityPillars = [
  {
    icon: Leaf,
    title: 'Seasonal Biodynamic Produce',
    description:
      'Harvested each morning from partner family estates across Lombardy, Piedmont, and Sicily.',
  },
  {
    icon: Flame,
    title: 'Handmade Pasta & Hearth Cooking',
    description:
      'Bronze-extruded and hand-rolled pasta crafted daily alongside olive-wood hearth roasting.',
  },
  {
    icon: Wine,
    title: '450+ Old-World Wine Cellar',
    description:
      'Curated vintages spanning Barolo, Brunello di Montalcino, Franciacorta, and Burgundy.',
  },
];

export default function About() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant-lg border border-gold-400/25">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                alt="Bella Cucina dining room and culinary presentation"
                className="w-full h-[460px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Culinary Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-50 bg-forest-900">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
                alt="Executive Chef plating handmade Italian pasta"
                className="w-full h-40 object-cover"
              />
              <div className="p-3.5 bg-forest-900 text-cream-50">
                <p className="font-serif text-base font-semibold text-gold-300">
                  Chef Matteo Bellini
                </p>
                <p className="text-xs text-cream-200/80">
                  Executive Chef & Founder
                </p>
              </div>
            </div>

            {/* Years of Heritage Badge */}
            <div className="absolute top-6 left-6 bg-forest-950/90 backdrop-blur-md text-cream-50 px-5 py-3.5 rounded-2xl border border-gold-400/40 shadow-lg">
              <span className="block font-serif text-3xl font-bold text-gold-400 leading-none">
                12+ Years
              </span>
              <span className="text-[11px] uppercase tracking-widest text-cream-200">
                Culinary Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-forest-700 font-semibold mb-3">
              Our Heritage & Philosophy
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 leading-tight mb-6">
              Where Italian Tradition Meets{' '}
              <span className="italic font-normal text-forest-700">
                European Elegance
              </span>
            </h2>

            <p className="text-forest-800/90 text-base sm:text-lg leading-relaxed mb-5">
              Founded in 2014 by Chef Matteo Bellini after decades in the kitchens of
              Modena, Lyon, and Milan, <strong>Bella Cucina</strong> was born from a simple
              conviction: extraordinary dining begins with reverence for the ingredient.
            </p>

            <p className="text-forest-800/80 text-base leading-relaxed mb-8">
              Every morning, our kitchen hums with the rhythm of rolling pins pressing
              golden 40-yolk pasta dough, slow-simmering bone broths, and unpacking crates
              of San Marzano tomatoes, Alba truffles, and wild line-caught Mediterranean
              seafood. Whether you join us for an intimate dinner for two or a celebratory
              gathering, our table is an invitation to linger.
            </p>

            {/* Three Quality Pillars */}
            <div className="space-y-4 mb-9">
              {qualityPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-cream-100/80 border border-cream-300/70 hover:border-gold-500/40 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-forest-950">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-forest-800/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discover Our Story Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setStoryModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream-50 font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>Discover Our Story</span>
              </button>

              <a
                href="#reservations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-forest-900/25 hover:border-forest-900 text-forest-900 font-semibold text-sm transition-colors"
              >
                <span>Reserve Your Evening</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Story Modal */}
      {storyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-cream-50 border border-gold-400/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-56 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                alt="Bella Cucina culinary craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setStoryModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-forest-950/80 text-cream-50 hover:text-gold-400 transition-colors"
                aria-label="Close story dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-300 block mb-1">
                  Since 2014 • Brera District
                </span>
                <h3
                  id="story-modal-title"
                  className="font-serif text-3xl font-semibold text-cream-50"
                >
                  The Story of Bella Cucina
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-forest-900">
              <p className="text-base leading-relaxed">
                Bella Cucina began inside a restored 19th-century courtyard carriage house
                on Via dei Giardini. Chef Matteo Bellini and Sommelier Elena Visconti
                envisioned a dining room that felt like an aristocratic Milanese home—warm,
                unhurried, and deeply connected to Italy’s agricultural artisans.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300">
                  <p className="font-serif text-lg font-semibold text-forest-950 mb-1">
                    100% Traceable Provenance
                  </p>
                  <p className="text-xs text-forest-800/80 leading-relaxed">
                    From 36-month aged Parmigiano Reggiano vacche rosse to cold-pressed
                    Sicilian Nocellara olive oil, we partner directly with 28 small farms.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300">
                  <p className="font-serif text-lg font-semibold text-forest-950 mb-1">
                    Zero-Waste Kitchen Ethos
                  </p>
                  <p className="text-xs text-forest-800/80 leading-relaxed">
                    Stocks, reductions, and house-cured charcuterie honor the whole
                    harvest and seasonal rhythms of Northern Italy.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-forest-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>2014 — Opening of Bella Cucina in Brera, Milan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>2018 — Wine Spectator Best of Award of Excellence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>2022 — Unveiling of the Private Olive Courtyard & Conservatory</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-cream-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setStoryModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-forest-900/20 text-forest-900 text-sm font-medium hover:bg-cream-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#reservations"
                  onClick={() => setStoryModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-forest-900 text-cream-50 text-sm font-semibold hover:bg-forest-800 transition-colors"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
