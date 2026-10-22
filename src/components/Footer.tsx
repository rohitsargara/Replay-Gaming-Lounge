import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Phone, Clock, ArrowUp, Navigation } from 'lucide-react';

export const Footer: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDE6DA] border-t border-[#DFD6C7] pt-16 pb-12 px-6 lg:px-12 text-[#4A433A]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Narrative (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="font-editorial text-3xl font-semibold tracking-tight text-[#221F1C] block"
            >
              REPLAY
            </a>
            <p className="text-xs sm:text-sm text-[#665D50] leading-relaxed max-w-sm">
              An architectural destination in Udaipur where precision esports hardware, tournament snooker, and handcrafted multi-cuisine dining converge in a tactile, calm sanctuary.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B95333] hover:bg-[#933E25] rounded-md transition-colors cursor-pointer"
              >
                Reserve Your Station
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8A7D6F] font-semibold">
              The Lounge
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#5E5548]">
              <li>
                <a href="#spaces" className="hover:text-[#B95333] transition-colors">
                  Esports Battle Pods
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#B95333] transition-colors">
                  PlayStation 5 Suites
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#B95333] transition-colors">
                  English Snooker Saloon
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#B95333] transition-colors">
                  Motion &amp; Social Games
                </a>
              </li>
              <li>
                <a href="#tariffs" className="hover:text-[#B95333] transition-colors">
                  Gaming Rates &amp; Tariffs
                </a>
              </li>
            </ul>
          </div>

          {/* Cafe & Dining */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8A7D6F] font-semibold">
              Dining &amp; Kitchen
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#5E5548]">
              <li>
                <a href="#menu" className="hover:text-[#B95333] transition-colors">
                  Mexican Honey Chilli Potatoes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B95333] transition-colors">
                  Stone-Fired Pizzas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B95333] transition-colors">
                  Specialty Coffee &amp; Frappes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B95333] transition-colors">
                  Sizzling Brownies &amp; Desserts
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B95333] transition-colors">
                  Table Tasting Planner
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8A7D6F] font-semibold">
              Visit Udaipur
            </div>
            <div className="space-y-2 text-xs text-[#5E5548]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B95333] shrink-0 mt-0.5" />
                <span>13, Tekri Madri Link Road, Santosh Nagar, Udaipur 313002</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B95333] shrink-0" />
                <span className="font-mono tabular-nums">10:30 AM – 11:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#B95333] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-mono tabular-nums font-semibold text-[#221F1C] hover:text-[#B95333]"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B95333] hover:underline font-medium"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 border-t border-[#DFD6C7] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7F7466] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Replay Gaming Lounge &amp; Cafe. All verified rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Udaipur, Rajasthan, India</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#221F1C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
