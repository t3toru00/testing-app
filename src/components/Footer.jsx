import React from 'react';
import {
  UtensilsCrossed,
  Instagram,
  Facebook,
  Compass,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#about' },
  { name: 'Special Dishes', href: '#specials' },
  { name: 'Seasonal Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book a Table', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-100 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gold-400/15 border border-gold-400/50 flex items-center justify-center text-gold-400">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-cream-50 leading-none">
                  Bella Cucina
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold-300 mt-0.5">
                  Milano • Est. 2014
                </span>
              </div>
            </a>

            <p className="text-sm text-cream-200/75 leading-relaxed max-w-sm">
              Celebrating the art of handmade Italian pasta, wood-fired European
              specialties, and warm Milanese hospitality in the heart of Brera.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={restaurantInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/25 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/25 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/25 flex items-center justify-center text-cream-100 hover:bg-gold-400 hover:text-forest-950 transition-colors"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-semibold text-gold-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-200/80 hover:text-gold-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-semibold text-gold-300 mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="tel:+390289427510"
                  className="hover:text-gold-300 transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-semibold text-gold-300 mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-xs text-cream-200/80">
              {restaurantInfo.openingHours.map((slot) => (
                <li key={slot.days} className="pb-2 border-b border-forest-900">
                  <span className="font-semibold text-cream-50 block">
                    {slot.days}
                  </span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/65">
          <p>
            © {new Date().getFullYear()} Bella Cucina Ristorante S.r.l. All rights
            reserved. P.IVA 08492010964.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 border border-gold-400/25 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
