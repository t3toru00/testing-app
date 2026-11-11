import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Instagram,
  Facebook,
  Compass,
} from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-forest-700 font-semibold mb-3">
            Location & Hours
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 mb-4">
            Visit{' '}
            <span className="italic font-normal text-forest-700">
              Bella Cucina
            </span>
          </h2>
          <p className="text-forest-800/80 text-base sm:text-lg leading-relaxed">
            Situated on a cobblestone street in Milan’s artistic Brera quarter, steps
            away from Pinacoteca di Brera and Teatro alla Scala.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details & Opening Hours Card */}
          <div className="lg:col-span-6 rounded-3xl bg-forest-950 text-cream-50 p-8 sm:p-10 shadow-elegant-lg border border-gold-400/25 flex flex-col justify-between">
            <div className="space-y-7">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold-300 font-semibold">
                  Concierge & Inquiries
                </span>
                <h3 className="font-serif text-3xl font-semibold text-cream-50 mt-1">
                  Get in Touch
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-300/90 font-semibold">
                      Restaurant Address
                    </p>
                    <p className="text-cream-100 text-sm sm:text-base mt-0.5">
                      {restaurantInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-300/90 font-semibold">
                      Telephone
                    </p>
                    <a
                      href="tel:+390289427510"
                      className="text-cream-100 hover:text-gold-300 text-sm sm:text-base mt-0.5 inline-block transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-300/90 font-semibold">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-cream-100 hover:text-gold-300 text-sm sm:text-base mt-0.5 inline-block transition-colors"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours Schedule */}
              <div className="pt-6 border-t border-forest-800">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <h4 className="font-serif text-xl font-semibold text-gold-300">
                    Opening Hours
                  </h4>
                </div>
                <dl className="space-y-2.5 text-sm">
                  {restaurantInfo.openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-forest-900/80"
                    >
                      <dt className="font-medium text-cream-100">{item.days}</dt>
                      <dd className="text-cream-200/75 text-xs sm:text-sm">
                        {item.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-7 mt-7 border-t border-forest-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-cream-200/80">
                Follow Our Culinary Journey
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={restaurantInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bella Cucina on Instagram"
                  className="w-10 h-10 rounded-full bg-forest-900 border border-gold-400/30 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={restaurantInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bella Cucina on Facebook"
                  className="w-10 h-10 rounded-full bg-forest-900 border border-gold-400/30 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={restaurantInfo.socials.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bella Cucina on TripAdvisor"
                  className="w-10 h-10 rounded-full bg-forest-900 border border-gold-400/30 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-all"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map & Directions Card */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-cream-300 shadow-elegant bg-cream-100 flex flex-col">
            <div className="relative flex-1 min-h-[340px] w-full bg-forest-900">
              <iframe
                title="Bella Cucina Brera District Milan Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.1815%2C45.4685%2C9.1935%2C45.4755&layer=mapnik&marker=45.4720%2C9.1875"
                className="w-full h-full min-h-[340px] border-0 filter contrast-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="p-6 sm:p-8 bg-cream-50 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-forest-950">
                  Brera Quarter, Centro Storico
                </h3>
                <p className="text-xs sm:text-sm text-forest-800/80 mt-0.5">
                  Valet parking available on Via Borgonuovo • Metro M2 Lanza / Montenapoleone
                </p>
              </div>

              <a
                href={restaurantInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shrink-0 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
