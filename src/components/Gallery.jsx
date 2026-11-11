import React, { useState } from 'react';
import { galleryImages } from '../data/restaurantData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-forest-700 font-semibold mb-3">
            Atmosphere & Gastronomy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 mb-4">
            Inside{' '}
            <span className="italic font-normal text-forest-700">
              Bella Cucina
            </span>
          </h2>
          <p className="text-forest-800/80 text-base sm:text-lg leading-relaxed">
            A glimpse into our candlelit Milanese dining room, olive tree courtyard,
            and the culinary artistry emerging from our kitchen every evening.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[270px]">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View larger image of ${item.title}`}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-elegant-lg border border-cream-300/60 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest-950/70 border border-gold-400/40 text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold-300 font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-1">
                  {item.title}
                </h3>
                <p className="text-cream-100/80 text-xs sm:text-sm line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Image Lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-forest-900 border border-gold-400/30 text-cream-50 hover:text-gold-400 transition-colors"
            aria-label="Close gallery preview"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-forest-900/90 border border-gold-400/30 text-cream-50 hover:text-gold-400 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-3xl overflow-hidden bg-forest-900 border border-gold-400/30 shadow-2xl"
          >
            <img
              src={galleryImages[activeIndex].image}
              alt={galleryImages[activeIndex].title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-forest-900 text-cream-50">
              <span className="text-xs uppercase tracking-widest text-gold-400 block mb-1">
                {galleryImages[activeIndex].category}
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-1">
                {galleryImages[activeIndex].title}
              </h3>
              <p className="text-sm text-cream-200/80">
                {galleryImages[activeIndex].caption}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-forest-900/90 border border-gold-400/30 text-cream-50 hover:text-gold-400 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
