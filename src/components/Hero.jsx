import React from 'react';
import { Sparkles, ArrowRight, Calendar, Clock, MapPin, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 pt-24 pb-16"
    >
      {/* Background High-Res Photography with Layered Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Bella Cucina candlelit fine dining restaurant interior and artisanal Italian dishes"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.22em] font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Artisanal Italian & European Gastronomy</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.08] tracking-tight mb-6">
              Experience the{' '}
              <span className="italic font-normal text-gold-300">
                Taste of Italy
              </span>
            </h1>

            <p className="text-cream-100/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-9 font-normal">
              Nestled in the heart of Milan’s Brera district, Bella Cucina celebrates
              time-honored Italian recipes and contemporary European craftsmanship—featuring
              hand-rolled pasta, wood-fired heritage cuts, and over 450 curated cellar wines.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-semibold text-base tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#reservations"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 border border-cream-100/30 hover:border-gold-400/60 backdrop-blur-sm font-semibold text-base tracking-wide transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book a Table</span>
              </a>
            </div>

            {/* Key Restaurant Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-cream-100/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800/90 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-cream-50 font-serif text-lg font-semibold leading-tight">
                    Michelin Guide
                  </p>
                  <p className="text-cream-200/70 text-xs">
                    Recognized Fine Dining
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800/90 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-cream-50 font-serif text-lg font-semibold leading-tight">
                    Tue – Sun Service
                  </p>
                  <p className="text-cream-200/70 text-xs">
                    Lunch & Candlelit Dinner
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800/90 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-cream-50 font-serif text-lg font-semibold leading-tight">
                    Brera, Milano
                  </p>
                  <p className="text-cream-200/70 text-xs">
                    Via dei Giardini 42
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Culinary Showcase Card */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Gold Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-gold-400/30 translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-forest-900 border border-gold-400/25 shadow-2xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1000&q=85"
                    alt="Signature White Truffle Tagliolini at Bella Cucina"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-medium">
                    Tonight’s Tasting Highlight
                  </div>
                </div>

                <div className="p-6 bg-forest-900/95 text-cream-50">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h2 className="font-serif text-2xl font-semibold text-cream-50">
                      Tagliolini al Tartufo d’Alba
                    </h2>
                    <span className="font-serif text-2xl font-bold text-gold-400">
                      €38
                    </span>
                  </div>
                  <p className="text-cream-200/75 text-sm leading-relaxed mb-4">
                    Hand-cut 40-yolk pasta tossed tableside with Alpine butter,
                    36-month aged Parmigiano, and freshly shaved Alba white truffle.
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-forest-800 text-xs text-gold-300">
                    <span>Paired with Barolo DOCG Riserva</span>
                    <a
                      href="#specials"
                      className="underline hover:text-gold-400 font-medium"
                    >
                      View Chef’s Specials →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
