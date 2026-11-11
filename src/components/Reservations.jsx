import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  PhoneCall,
  Info,
} from 'lucide-react';

const timeSlots = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
];

const guestOptions = [
  '1 Guest',
  '2 Guests',
  '3 Guests',
  '4 Guests',
  '5 Guests',
  '6 Guests',
  '7 Guests',
  '8+ Guests (Private Table)',
];

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  date: '',
  time: '19:30',
  guests: '2 Guests',
  specialRequests: '',
};

export default function Reservations() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submittedReservation, setSubmittedReservation] = useState(null);

  const todayIso = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[+\d\s()-]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (7–20 digits).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred dining date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred dining time.';
    }

    if (!formData.guests) {
      newErrors.guests = 'Please select the number of guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedReservation({
        ...formData,
        referenceCode: `BC-${Math.floor(100000 + Math.random() * 900000)}`,
      });
    }
  };

  const handleReset = () => {
    setSubmittedReservation(null);
    setFormData(initialFormState);
    setErrors({});
  };

  return (
    <section
      id="reservations"
      className="py-24 bg-forest-950 text-cream-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hospitality Promise & Dining Policies */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/35 text-gold-300 text-xs uppercase tracking-[0.22em] font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Table Reservations</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-cream-50 leading-tight mb-5">
              Reserve Your Table at{' '}
              <span className="italic font-normal text-gold-300">
                Bella Cucina
              </span>
            </h2>

            <p className="text-cream-200/80 text-base leading-relaxed mb-8">
              Join us for an intimate lunch, candlelit dinner, or special celebration.
              Select your preferred date and time, and let us prepare an unforgettable
              Italian and European dining experience.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-2xl bg-forest-900/90 border border-gold-400/20">
                <h3 className="font-serif text-xl font-semibold text-gold-300 mb-1">
                  Dress Code & Atmosphere
                </h3>
                <p className="text-sm text-cream-200/80 leading-relaxed">
                  Smart casual to elegant attire is kindly requested. Jacket appreciated
                  for evening dining in the main salon.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-forest-900/90 border border-gold-400/20">
                <h3 className="font-serif text-xl font-semibold text-gold-300 mb-1">
                  Private Events & Wine Cellar
                </h3>
                <p className="text-sm text-cream-200/80 leading-relaxed">
                  Hosting more than 8 guests? Our private Sommelier Vault and Olive
                  Courtyard accommodate bespoke tasting menus up to 36 guests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gold-400/10 border border-gold-400/30">
              <PhoneCall className="w-5 h-5 text-gold-400 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="text-cream-200 block">
                  Prefer to speak with our Maître D’?
                </span>
                <a
                  href="tel:+390289427510"
                  className="text-gold-300 font-semibold hover:underline"
                >
                  Call +39 02 8942 7510 (Tue–Sun, 10:30–22:30)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Reservation Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-cream-50 text-forest-950 p-6 sm:p-10 shadow-2xl border border-gold-400/30">
              {submittedReservation ? (
                <div className="py-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mx-auto mb-5 shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-forest-700 font-semibold">
                    Frontend Reservation Preview
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-forest-950 mt-1 mb-3">
                    Reservation Details Recorded
                  </h3>
                  <p className="text-forest-800/85 text-sm sm:text-base max-w-lg mx-auto mb-6">
                    Thank you, <strong>{submittedReservation.fullName}</strong>! Your
                    reservation details have been validated in this interactive frontend
                    demo.
                  </p>

                  {/* Transparent Frontend-Only Notice */}
                  <div className="max-w-lg mx-auto mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2.5 text-left">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Demo Notice:</strong> This form uses frontend-only
                      functionality. No external email or live restaurant booking has
                      been transmitted.
                    </span>
                  </div>

                  {/* Summary Receipt Card */}
                  <div className="max-w-lg mx-auto rounded-2xl bg-cream-100 border border-cream-300 p-5 text-left space-y-2.5 text-sm mb-8">
                    <div className="flex justify-between border-b border-cream-300 pb-2">
                      <span className="text-forest-700">Demo Reference:</span>
                      <span className="font-mono font-semibold text-forest-950">
                        {submittedReservation.referenceCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-700">Guest Name:</span>
                      <span className="font-semibold text-forest-950">
                        {submittedReservation.fullName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-700">Date & Time:</span>
                      <span className="font-semibold text-forest-950">
                        {submittedReservation.date} at {submittedReservation.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-700">Party Size:</span>
                      <span className="font-semibold text-forest-950">
                        {submittedReservation.guests}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-700">Contact:</span>
                      <span className="font-semibold text-forest-950">
                        {submittedReservation.email} • {submittedReservation.phone}
                      </span>
                    </div>
                    {submittedReservation.specialRequests && (
                      <div className="pt-2 border-t border-cream-300">
                        <span className="text-forest-700 block mb-1">
                          Special Requests:
                        </span>
                        <p className="text-forest-900 italic">
                          “{submittedReservation.specialRequests}”
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream-50 font-semibold text-sm tracking-wide transition-colors"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="font-serif text-3xl font-semibold text-forest-950">
                      Book a Table
                    </h3>
                    <p className="text-xs sm:text-sm text-forest-700 mt-1">
                      Complete the form below to preview your reservation details.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Customer Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Giulia Rossini"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-forest-950 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-cream-300 focus:border-forest-800 focus:ring-forest-800/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="giulia@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-forest-950 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-cream-300 focus:border-forest-800 focus:ring-forest-800/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 02 1234 5678"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-forest-950 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-cream-300 focus:border-forest-800 focus:ring-forest-800/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Date */}
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          min={todayIso}
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-forest-950 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.date
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-cream-300 focus:border-forest-800 focus:ring-forest-800/20'
                          }`}
                        />
                      </div>
                      {errors.date && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-forest-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-cream-300 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="guests"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-forest-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-cream-300 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                        >
                          {guestOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="specialRequests"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-800 mb-1.5"
                      >
                        Special Requests & Dietary Notes (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={3}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Allergies, anniversary celebration, courtyard seating preference, sommelier pairing..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-forest-950 text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-7">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold text-base tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 transition-all duration-200"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Submit Reservation</span>
                    </button>
                    <p className="text-[11px] text-center text-forest-700/75 mt-3">
                      Frontend preview form — instant validation & confirmation summary
                      on screen.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
