import React from 'react';
import { Star, Quote } from 'lucide-react';
import { customerReviews } from '../data/restaurantData';

export default function Reviews() {
  return (
    <section className="py-24 bg-cream-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-forest-700 font-semibold mb-3">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 mb-4">
            Words from Our{' '}
            <span className="italic font-normal text-forest-700">Table</span>
          </h2>
          <p className="text-forest-800/80 text-base sm:text-lg leading-relaxed">
            Rated 4.9 / 5 across over 640 verified dining reviews from local Milanese
            patrons and international culinary travelers.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {customerReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-3xl bg-cream-50 p-7 sm:p-8 border border-cream-300/90 shadow-sm hover:shadow-elegant transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-gold-400/25 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Star Rating */}
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Dish Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-cream-200/80 text-forest-800 text-xs font-medium mb-4">
                  Ordered: {review.dishHighlight}
                </span>

                {/* Testimonial Quote */}
                <p className="text-forest-900/90 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{review.quote}”
                </p>
              </div>

              {/* Reviewer Author Info */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-cream-200">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/50"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest-950 leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-xs text-forest-700">
                    {review.role} • {review.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
